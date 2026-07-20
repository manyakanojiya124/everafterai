// src/fonts/index.ts
import localFont from "next/font/local";

export const amoresa = localFont({
  src: "./amoresa/Andrey-Sharonov-Amoresa-Regular.otf",
  variable: "--font-amoresa",
  display: "swap",
});

export const codecPro = localFont({
  src: [
    { path: "./codec-pro/CodecPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./codec-pro/CodecPro-Italic.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-codec-pro",
  display: "swap",
});