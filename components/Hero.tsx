 "use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { FloatingPaths } from "./FloatingPaths";

type HeroProps = {
  calendlyUrl: string;
};

export function Hero({ calendlyUrl }: HeroProps) {
  const title = "AI Systems That Increase Operational Performance";
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-neutral-950 flex items-center justify-center px-6">
      <div className="absolute inset-0 z-0 opacity-60">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl rounded-md overflow-hidden border border-white/10"
        >
          <div
            className="absolute inset-0 rounded-md bg-black/70"
            aria-hidden
          />
          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            MyTask Labs · AI Operations Studio
          </p>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-3 last:mr-0 align-baseline"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + wordIndex * 0.08 + letterIndex * 0.02,
                      type: "spring",
                      stiffness: 150,
                      damping: 24,
                    }}
                    className="inline-block text-white"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
          Helping operations-heavy teams reduce manual workload, respond faster to opportunities, and eliminate workflow bottlenecks using practical AI automation.
          </p>
          {/* <p className="mt-3 text-xs text-slate-400 max-w-2xl mx-auto">
            Built for operations-heavy teams who can&apos;t afford to miss
            high-intent opportunities or rely on gut feel to manage volume.
          </p> */}

          <Button href={calendlyUrl} className="mt-8">
            Book strategy call
          </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
