"use client";

import { useEffect, useState } from "react";
import styles from "./split-intro.module.css";

/**
 * SplitIntro
 * -----------------------------------------------------------------------
 * A one-time entrance moment for the marketing landing page: the
 * "ever" | "after" wordmark meets edge-to-edge as a single word, holds
 * for a beat, then drifts apart using the app's --ease-gentle curve to
 * reveal the landing page underneath.
 *
 * This is the text version of the original image-based intro (HOME1 /
 * HOME2 split). Swapping images for live text changes what the perf
 * work has to guard against:
 *
 * - No more image decode. There's nothing to fetch or decode, so the
 *   old `preloadImage` / `Promise.all(...).decode()` gate is gone
 *   entirely — that was solely there to keep decode work off the first
 *   animation frame, and text never decodes.
 * - Motion still runs as a CSS @keyframes animation (see
 *   split-intro.module.css), not a React-state-driven `transition`,
 *   for the same reason as before: keyframes start reliably on
 *   class-add, transitions can get dropped if the "before" state
 *   hasn't actually painted yet.
 * - Both halves still get `will-change: transform` +
 *   `translate3d(0,0,0)` up front, promoting them to their own GPU
 *   layers before anything moves — this still matters for text, since
 *   a compositor-only transform is what keeps the parting motion smooth.
 * - A double requestAnimationFrame still runs before the "parting"
 *   class is applied. With images this was "wait for decode, then two
 *   frames." With text it's just "two frames" — one to let the joined
 *   word actually paint, one to let the browser promote the layers —
 *   so the animation's first tick is still pure transform, no
 *   paint/layout work riding along with it.
 * - Respects prefers-reduced-motion and only plays once per session.
 * -----------------------------------------------------------------------
 */

const HOLD_MS = 900;
const PART_MS = 1600;
const SESSION_KEY = "ea-intro-seen";

type Phase = "joined" | "parting" | "done";

interface SplitIntroProps {
    onComplete?: () => void;
}

export function SplitIntro({ onComplete }: SplitIntroProps) {
    const [phase, setPhase] = useState<Phase>("joined");

    useEffect(() => {
        let cancelled = false;
        const timers: ReturnType<typeof setTimeout>[] = [];

        const finish = () => {
            if (cancelled) return;
            setPhase("done");
            sessionStorage.setItem(SESSION_KEY, "1");
            onComplete?.();
        };

        if (sessionStorage.getItem(SESSION_KEY)) {
            finish();
            return;
        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            timers.push(setTimeout(finish, 400));
            return () => {
                cancelled = true;
                timers.forEach(clearTimeout);
            };
        }

        // Nothing to decode this time — just gate on two frames so the
        // joined word has actually painted and its layer is promoted
        // (will-change + translate3d, set in CSS) before "parting" lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (cancelled) return;
                timers.push(setTimeout(() => setPhase("parting"), HOLD_MS));
                timers.push(setTimeout(finish, HOLD_MS + PART_MS));
            });
        });

        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
        };
    }, [onComplete]);

    if (phase === "done") return null;

    return (
        <div
            aria-hidden="true"
            className={`${styles.overlay} ${phase === "parting" ? styles.split : ""}`}
        >
            <div className={`${styles.half} ${styles.left}`}>
                <span className={`${styles.word} font-amoresa text-primary`}>
                    ever
                </span>
            </div>
            <div className={`${styles.half} ${styles.right}`}>
                <span className={`${styles.word} font-codec font-medium text-primary`}>
                    after
                </span>
            </div>
        </div>
    );
}