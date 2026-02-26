import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Systems That Increase Operational Performance",
  description:
    "I help operations-heavy teams reduce manual workload, respond faster to opportunities, and eliminate workflow bottlenecks using practical AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-neutral-850 bg-stone-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
