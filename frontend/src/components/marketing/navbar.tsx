"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/marketing/wordmark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Distance, in px, over which the navbar fully transitions from its
// resting (transparent, roomy) state to its scrolled (glass, shrunk) state.
const SHRINK_DISTANCE = 96;

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#vault", label: "Memory vault" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Navbar
 * -----------------------------------------------------------------------
 * Fully self-contained: mounts, animates itself in, and drives its own
 * scroll behavior. Doesn't read from or write into any parent GSAP
 * context — drop it into any page and it behaves the same way.
 *
 * Two effects layered on scroll, both driven by one ScrollTrigger:
 *  1. Glass: a background layer fades in and blurs behind the bar
 *     (glassmorphism), rather than an abrupt class swap.
 *  2. Shrink: vertical padding and the wordmark scale ease down together,
 *     so the bar visibly compacts instead of just gaining a background.
 * -----------------------------------------------------------------------
 */
export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          if (reduced) {
            gsap.set(headerRef.current, { opacity: 1, y: 0 });
            return;
          }

          // ---- Entrance, independent of any other page timeline -----
          gsap.set(headerRef.current, { opacity: 0, y: -16 });
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.15,
          });

          // ---- Scroll-driven glass + shrink ---------------------------
          const trigger = ScrollTrigger.create({
            start: 0,
            end: SHRINK_DISTANCE,
            scrub: 0.35,
            onUpdate: (self) => {
              const p = self.progress; // 0 (top) -> 1 (scrolled past SHRINK_DISTANCE)

              gsap.set(glassRef.current, { opacity: p });
              gsap.set(innerRef.current, {
                paddingTop: gsap.utils.interpolate(20, 10, p),
                paddingBottom: gsap.utils.interpolate(20, 10, p),
              });
              gsap.set(wordmarkRef.current, {
                scale: gsap.utils.interpolate(1, 0.82, p),
                transformOrigin: "left center",
              });
            },
          });

          return () => trigger.kill();
        }
      );

      return () => mm.revert();
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      {/* Glass layer — a separate, opacity-only element so the color and
          blur come from real Tailwind classes; only opacity is tweened,
          which keeps the effect correct regardless of the theme's exact
          color values. */}
      <div
        ref={glassRef}
        aria-hidden
        className="absolute inset-0 -z-10 border-b border-line bg-blush/80 opacity-0 shadow-[0_8px_30px_rgba(43,35,37,0.08)] backdrop-blur-xl"
      />

      <div
        ref={innerRef}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link href="/" aria-label="EverAfter home">
          <div ref={wordmarkRef}>
            <Wordmark className="text-xl text-ink" />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-muted sm:flex ml-35">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Sign in
          </Link>
          <Link href="/register">
            <Button size="sm">Create a memory space</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
