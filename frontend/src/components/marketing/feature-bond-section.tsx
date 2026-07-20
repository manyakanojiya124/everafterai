"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Photo = {
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: number;
  width: string;
  speed: number;
  tapeRotate: number;
};

const PHOTOS: Photo[] = [
  {
    src: "/assets/family/photo-1.png",
    alt: "Family photo",
    top: "4%",
    left: "6%",
    rotate: -6,
    width: "w-44 md:w-52 lg:w-60",
    speed: -16,
    tapeRotate: -10,
  },
  {
    src: "/assets/family/photo-2.png",
    alt: "Family photo",
    top: "2%",
    left: "62%",
    rotate: 5,
    width: "w-40 md:w-48 lg:w-56",
    speed: 14,
    tapeRotate: 8,
  },
  {
    src: "/assets/family/photo-3.png",
    alt: "Family photo",
    top: "48%",
    left: "2%",
    rotate: 4,
    width: "w-44 md:w-52 lg:w-60",
    speed: -10,
    tapeRotate: -6,
  },
  {
    src: "/assets/family/photo-4.png",
    alt: "Family photo",
    top: "50%",
    left: "64%",
    rotate: -4,
    width: "w-40 md:w-48 lg:w-56",
    speed: 18,
    tapeRotate: 12,
  },
];

export function FeatureBondSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !boardRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          const photos =
            gsap.utils.toArray<HTMLElement>(".bond-photo");

          const companion =
            boardRef.current?.querySelector(".bond-companion");

          if (reduced) {
            gsap.set([...photos, companion], {
              opacity: 1,
              y: 0,
              scale: 1,
            });
            return;
          }

          gsap.set(photos, {
            opacity: 0,
            y: 30,
            scale: 0.94,
          });

          gsap.set(companion, {
            opacity: 0,
            y: 40,
            scale: 0.92,
          });

          const entrance = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none none",
            },
            defaults: {
              ease: "power3.out",
              duration: 0.8,
            },
          });

          entrance
            .to(photos, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.12,
            })
            .to(
              companion,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.5)",
                duration: 0.9,
              },
              "-=0.3"
            );

          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });

          photos.forEach((photo) => {
            parallax.to(
              photo,
              {
                yPercent: Number(photo.dataset.speed ?? 0),
                ease: "none",
              },
              0
            );
          });

          if (companion) {
            parallax.to(
              companion,
              {
                yPercent: 8,
                ease: "none",
              },
              0
            );
          }

          return () => {
            entrance.scrollTrigger?.kill();
            parallax.scrollTrigger?.kill();
          };
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium tracking-wide text-primary">
            The bond
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-medium text-ink">
            Still part of the family.
          </h2>

          <p className="mt-4 text-lg text-ink-muted">
            EverAfter doesn't sit apart from your memories — it lives
            alongside them.
          </p>
        </div>

        <div
          ref={boardRef}
          className="relative mx-auto mt-20 h-[700px] w-full max-w-6xl"
        >
          {PHOTOS.map((photo, index) => (
            <div
              key={index}
              className={`bond-photo absolute ${photo.width}`}
              style={{
                top: photo.top,
                left: photo.left,
                rotate: `${photo.rotate}deg`,
              }}
              data-speed={photo.speed}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width:768px) 180px, (max-width:1200px) 220px, 260px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          ))}

          <div className="bond-companion absolute bottom-0 left-1/2 w-56 -translate-x-1/2 md:w-72 lg:w-80">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/assets/companion/companion.png"
                alt="Companion"
                fill
                priority
                sizes="(max-width:768px) 224px, (max-width:1200px) 288px, 320px"
                className="object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}