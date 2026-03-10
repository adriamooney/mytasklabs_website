"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
};

export function Section({ id, tone = "dark", children }: SectionProps) {
  const base = "py-20 px-6";
  const toneClasses =
    tone === "dark"
      ? "bg-[#030712] text-slate-50"
      : "bg-slate-50 text-slate-900";

  return (
    <section id={id} className={`relative ${base} ${toneClasses}`}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

