import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "EverAfter AI",
  description: "A private place to preserve meaningful memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen bg-stone-100">

        <QueryProvider>

          {children}

        </QueryProvider>

      </body>
    </html>
  );
}