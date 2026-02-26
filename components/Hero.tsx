import Link from "next/link";

type HeroProps = {
  calendlyUrl: string;
};

export function Hero({ calendlyUrl }: HeroProps) {
  return (
    <header className="pt-16 pb-20 px-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-850 tracking-tight leading-tight">
        AI Systems That Increase Operational Performance
      </h1>
      <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
        I help operations-heavy teams reduce manual workload, respond faster to
        opportunities, and eliminate workflow bottlenecks using practical AI
        automation layered on top of their existing tools.
      </p>
      <Link
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-6 py-3 bg-neutral-850 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors"
      >
        Book a 20-Minute Strategy Call
      </Link>
    </header>
  );
}
