"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "How it works", sectionId: "how-it-works" },
  { label: "Services", sectionId: "services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-600/50 bg-indigo-600/95 backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.25)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold text-white hover:text-indigo-100 transition-colors"
        >
          My Task Labs
        </Link>
        <nav className="flex gap-6" aria-label="Main navigation">
          {navItems.map((item) => {
            if ("href" in item) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm text-indigo-100 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            const hash = `#${item.sectionId}`;
            const href = pathname === "/" ? hash : `/${hash}`;

            return (
              <Link
                key={item.label}
                href={href}
                className="text-sm text-indigo-100 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
