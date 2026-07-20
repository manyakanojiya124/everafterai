import type { Metadata } from "next";

import "./globals.css";

import QueryProvider from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { amoresa, codecPro } from "@/fonts/fonts";
export const metadata: Metadata = {
  title: "EverAfter AI",
  description:
    "A private, quiet space to preserve and continue meaningful memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${amoresa.variable} ${codecPro.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="h-full bg-blush text-ink">
        <QueryProvider>
          <AuthProvider>
            {children}</AuthProvider>
        </QueryProvider>

        <Toaster />
      </body>
    </html>
  );
}