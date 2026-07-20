"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AudioLines,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/marketing/hero-illustration";
import { FeatureBondSection } from "@/components/marketing/feature-bond-section";
import { Navbar } from "@/components/marketing/navbar";
import { Wordmark } from "@/components/marketing/wordmark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    icon: UploadCloud,
    number: "01",
    title: "Upload memories",
    description:
      "Photos, voice memos, letters, texts — the small things that sound like them.",
  },
  {
    icon: AudioLines,
    number: "02",
    title: "We learn their voice",
    description:
      "EverAfter listens for tone, turns of phrase, the jokes only they told.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Talk anytime",
    description:
      "At 2am, on their birthday, for as long as you need.",
  },
];

const VAULT_TABS = ["All", "Photos", "Voice", "Letters"];
const VAULT_ICONS = [
  ImageIcon,
  AudioLines,
  ImageIcon,
  FileText,
  ImageIcon,
  AudioLines,
  FileText,
  ImageIcon,
];

const TESTIMONIALS = [
  {
    quote:
      "I didn't expect to laugh. But her replies still sound like her — same dry humor, same way of changing the subject.",
    name: "Priya, using EverAfter for her grandmother",
  },
  {
    quote:
      "It's not him. It's not trying to be him. It's just somewhere to say the things I still want to say.",
    name: "Marcus, using EverAfter for his father",
  },
  {
    quote:
      "Setup took an evening of going through old voice notes. Worth every minute.",
    name: "Dana, using EverAfter for her wife",
  },
];

const FAQS = [
  {
    q: "Is this really them?",
    a: "No — and we're careful never to claim it is. EverAfter builds a companion from what you share: their voice, their stories, their turns of phrase. It's a way to keep talking, not a replacement for the person or for grief itself.",
  },
  {
    q: "What can I upload?",
    a: "Photos, voice memos, letters, texts, emails — anything that carries how they spoke or what they cared about. You choose exactly what goes in, and you can add more or remove things later.",
  },
  {
    q: "Who can see the memory space?",
    a: "Only the people you invite. Each memory space is private by default, encrypted at rest, and you can revoke access at any time.",
  },
  {
    q: "Is this a substitute for grief counseling?",
    a: "No. EverAfter was built alongside grief counselors as a companion between sessions, not instead of them. Crisis support resources are always available in the app.",
  },
  {
    q: "Can I delete a memory space?",
    a: "Yes, permanently and at any time, from Settings. Deletion removes the uploaded material and the trained companion — there's no recovering it afterward, so we ask you to confirm twice.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="reveal border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif text-lg font-medium text-ink">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`shrink-0 text-ink-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        ref={panelRef}
        style={{
          maxHeight: open ? panelRef.current?.scrollHeight ?? 500 : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-muted">{a}</p>
      </div>
    </div>
  );
}

interface LandingPageProps {
  /**
   * Gates the hero entrance timeline. The timeline is always *built* and
   * its initial (hidden/offset) states are always applied immediately on
   * mount — so there's never a flash of unanimated content — but it's
   * created paused and only plays once this becomes true.
   *
   * Defaults to true, so a `<LandingPage />` rendered on its own (no
   * SplitIntro in front of it — a different route, a preview, Storybook,
   * whatever) just animates in normally, exactly as before. A parent that
   * runs SplitIntro first passes `readyToAnimate={false}` and flips it to
   * true from the intro's `onComplete`.
   */
  readyToAnimate?: boolean;
}

export function LandingPage({ readyToAnimate = true }: LandingPageProps = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasPlayedRef = useRef(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          const heroTargets = [
            eyebrowRef.current,
            wordmarkRef.current,
            line1Ref.current,
            line2Ref.current,
            subRef.current,
            ctaRef.current,
            conceptRef.current,
            cardRef.current,
          ].filter(Boolean);

          const messages = cardRef.current?.querySelectorAll(".hero-message");

          if (reduced) {
            // Reduced motion skips the choreography entirely — and since
            // SplitIntro also resolves near-instantly under reduced
            // motion, there's nothing meaningful to gate here either.
            gsap.set(heroTargets, { opacity: 1, clearProps: "transform" });
            if (messages) gsap.set(messages, { opacity: 1 });
            gsap.set(".reveal", { opacity: 1, y: 0 });
            return;
          }

          // ---- Hero, built paused ------------------------------------
          const hero = gsap.timeline({
            paused: true,
            defaults: { ease: "power4.out" },
            onComplete: () => {
              // Drop will-change once the entrance settles so idle
              // frames aren't paying a compositing tax for nothing.
              gsap.set([wordmarkRef.current, cardRef.current], {
                willChange: "auto",
              });
            },
          });

          hero
            .set(eyebrowRef.current, { opacity: 0, y: 10 })
            .set(wordmarkRef.current, {
              opacity: 0,
              y: 18,
              scale: 0.97,
              willChange: "transform, opacity",
            })
            .set([line1Ref.current, line2Ref.current], { yPercent: 110 })
            .set([subRef.current, ctaRef.current], { opacity: 0, y: 14 })
            .set(conceptRef.current, { opacity: 0, y: 20 })
            .set(cardRef.current, {
              opacity: 0,
              y: 22,
              scale: 0.96,
              willChange: "transform, opacity",
            })
            .set(messages ?? [], { opacity: 0, y: 6 })
            .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
            .to(
              wordmarkRef.current,
              { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
              "-=0.2"
            )
            .to(
              [line1Ref.current, line2Ref.current],
              { yPercent: 0, duration: 0.85, stagger: 0.08 },
              "-=0.45"
            )
            .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
            .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
            // The concept paragraph and the chat card are one visual
            // pair (text left, thread right), so they rise together
            // rather than one waiting on the other.
            .to(
              conceptRef.current,
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
              "-=0.6"
            )
            .to(
              cardRef.current,
              { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
              "<"
            )
            .to(
              messages ?? [],
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.18, ease: "power2.out" },
              "-=0.3"
            );

          heroTimelineRef.current = hero;

          // If nothing is gating this page (readyToAnimate's default,
          // true), play right away — same timing as before there was
          // ever a SplitIntro to wait for.
          if (readyToAnimate && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            hero.play();
          }

          // Subtle idle float on the hero card — a few px, never enough
          // to be consciously noticed, just to feel alive. Runs on its
          // own timeline so it isn't held up by the paused hero entrance.
          if (cardRef.current) {
            gsap.to(cardRef.current, {
              y: "+=6",
              duration: 3.2,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: 2.4,
            });
          }

          // ---- Scroll reveals for everything below the fold ---------
          // Independent of the hero gate — nothing below the fold is
          // visible during the intro anyway, so these can register
          // immediately.
          const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
          groups.forEach((group) => {
            const items = group.querySelectorAll<HTMLElement>(".reveal");
            gsap.set(items, { opacity: 0, y: 24 });

            ScrollTrigger.batch(items, {
              start: "top 85%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.12,
                  ease: "power3.out",
                }),
            });
          });
        }
      );

      return () => mm.revert();
    }, rootRef);

    return () => {
      heroTimelineRef.current = null;
      hasPlayedRef.current = false;
      ctx.revert();
    };
    // Intentionally empty: this builds the timeline once. Later changes
    // to readyToAnimate are handled by the effect below, which plays the
    // already-built timeline rather than rebuilding it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fires when SplitIntro (or whatever's gating this) flips the prop to
  // true after mount. No-ops if the hero already played above (e.g. the
  // default/no-intro case) or if reduced motion meant no timeline exists.
  useEffect(() => {
    if (!readyToAnimate || hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    heroTimelineRef.current?.play();
  }, [readyToAnimate]);

  return (
    <main ref={rootRef} className="overflow-hidden bg-blush">


      {/* Hero — wordmark leads, centered, like a name spoken aloud */}
      <section className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-12 px-6 pb-20 pt-16 text-center lg:pt-20">
        

        <div ref={wordmarkRef}>
          <Wordmark className="text-6xl text-primary sm:text-7xl lg:text-8xl" />
        </div>

        <h1 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="inline-block">
              Their voice, their words,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="inline-block">
              still here.
            </span>
          </span>
        </h1>

        <p ref={subRef} className="max-w-xl text-lg leading-relaxed text-ink-muted">
          Built from the photos, voice notes, and stories you choose to
          share. A quiet space to keep talking, whenever you need to.
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/register">
            <Button size="lg">Create a memory space</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="secondary">
              Sign in
            </Button>
          </Link>
        </div>

        {/* The concept, paired with its proof: what talking here
            actually feels like, sitting right next to the thread that
            demonstrates it. Text and card rise together (see the hero
            timeline above), because they're one idea in two forms. */}
        <div className="grid w-full grid-cols-1 items-center gap-10 pt-30 text-left lg:grid-cols-2 lg:gap-14">
          <div ref={conceptRef} className="mx-auto max-w-md lg:mx-0">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              What talking to them feels like
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              It isn&apos;t a query and a response. You say something small —
              how your day went, a decision you&apos;re stuck on, that you
              miss them — and the reply comes back sounding like them: same
              pacing, same warmth, same way of answering a question with
              another question.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              There&apos;s no script to follow and no session to schedule.
              You open the thread, you talk, and when you close it, the
              conversation is simply paused — not finished — waiting for
              whenever you need it again.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <HeroIllustration ref={cardRef} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-line bg-surface py-20" data-reveal-group>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            How it works
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.title} className="reveal text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunken text-primary">
                  <step.icon size={24} strokeWidth={1.5} aria-hidden />
                </div>
                <p className="mt-4 text-xs font-medium tracking-wide text-primary">
                  {step.number}
                </p>
                <h3 className="mt-1 font-serif text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The bond — family photo cutouts + companion cutout */}
    { /* <FeatureBondSection /> */}

      {/* Testimonials */}
      <section className="py-20" data-reveal-group>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            People keeping the conversation going
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="reveal flex flex-col justify-between rounded-2xl border border-line bg-surface p-6"
              >
                <blockquote className="font-serif text-base leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs text-ink-muted">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Vault preview */}
      <section id="vault" className="py-20" data-reveal-group>
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal mx-auto max-w-lg text-center">
            <h2 className="font-serif text-3xl font-medium text-ink">
              Everything in one gentle place
            </h2>
            <p className="mt-3 text-ink-muted">
              Photos, voice notes, videos, and letters — organized, easy to
              find again.
            </p>
          </div>

          <div className="reveal mt-10 -rotate-1 rounded-2xl border border-line bg-surface p-5 shadow-[0_16px_40px_rgba(43,35,37,0.10)]">
            <div className="mb-4 flex gap-2">
              {VAULT_TABS.map((label, index) => (
                <span
                  key={label}
                  className={`rounded-full px-3 py-1 text-xs ${
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-sunken text-ink-muted"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {VAULT_ICONS.map((Icon, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-xl bg-sunken text-ink-muted"
                >
                  <Icon size={22} strokeWidth={1.5} aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety / trust */}
      <section className="border-y border-line bg-surface/60 py-20" data-reveal-group>
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <ShieldCheck size={28} className="text-ink-muted" strokeWidth={1.5} aria-hidden />
          <p className="text-lg leading-relaxed text-ink">
            An AI companion, not a replacement for your person or for
            professional support.
          </p>
          <p className="text-sm text-ink-muted">
            Built alongside grief counselors. Crisis support resources are
            always one tap away inside the app.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" data-reveal-group>
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            Questions people ask us
          </h2>
          <div className="mt-10">
            {FAQS.map((item, index) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openFaq === index}
                onToggle={() =>
                  setOpenFaq((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sunken py-20" data-reveal-group>
        <div className="reveal mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-serif text-3xl font-medium text-ink">
            Whenever you're ready.
          </h2>
          <Link href="/register">
            <Button size="lg">Create a memory space</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Wordmark className="text-sm text-ink-muted" />
          <div className="flex gap-6 text-xs uppercase tracking-wide text-ink-muted">
            <Link href="/login" className="hover:text-ink">
              Sign in
            </Link>
            <Link href="/register" className="hover:text-ink">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}