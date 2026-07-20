"use client";

import Image from "next/image";

import { cn, initialsFor } from "@/lib/utils";

const sizeMap = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-base",
  lg: "h-24 w-24 text-2xl",
  xl: "h-32 w-32 text-4xl",
} as const;

export function PresenceAvatar({
  name,
  src,
  size = "md",
  ring = true,
  className,
}: {
  name: string;
  src?: string | null;
  size?: keyof typeof sizeMap;
  ring?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(ring && "presence-ring", className)}>
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-primary font-serif font-medium text-white",
          sizeMap[size],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <span>{initialsFor(name)}</span>
        )}
      </div>
    </div>
  );
}
