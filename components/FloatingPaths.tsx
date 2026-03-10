"use client";

import { motion } from "framer-motion";

type FloatingPathsProps = {
  position?: number;
  className?: string;
};

export function FloatingPaths({ position = 1, className = "" }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    d: `M-${380 - index * 5 * position} -${189 + index * 6}C-${
      380 - index * 5 * position
    } -${189 + index * 6} -${312 - index * 5 * position} ${
      216 - index * 6
    } ${152 - index * 5 * position} ${343 - index * 6}C${
      616 - index * 5 * position
    } ${470 - index * 6} ${684 - index * 5 * position} ${
      875 - index * 6
    } ${684 - index * 5 * position} ${875 - index * 6}`,
    width: 0.5 + index * 0.03,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`.trim()}>
      <svg
        className="h-full w-full text-slate-800"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Operational flow background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
