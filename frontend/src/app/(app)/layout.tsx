import { ReactNode } from "react";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="h-screen bg-stone-100">
      {children}
    </main>
  );
}