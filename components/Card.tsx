import type { HTMLAttributes } from "react";

type CardVariant =
  | "dark"
  | "light"
  | "lightOnDark"
  | "emerald"
  | "muted"
  | "darkEmerald"
  | "containerDark"
  | "containerDarkCta";

const variantClasses: Record<CardVariant, string> = {
  dark:
    "rounded-md bg-slate-900/50 ring-1 ring-white/10 p-6 flex flex-col shadow-[0_0_30px_-18px_rgba(148,163,184,0.8)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-14px_rgba(56,189,248,0.9)]",
  light:
    "rounded-md border border-slate-200 bg-white/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
  lightOnDark:
    "rounded-md p-6 backdrop-blur-md transition-all duration-300 bg-white ring-2 ring-indigo-400/60 shadow-purple-glow hover:scale-[1.02] hover:shadow-purple-glow-hover",
  emerald:
    "rounded-md bg-white/80 ring-1 ring-emerald-200 p-6 shadow-[0_0_30px_-20px_rgba(52,211,153,0.7)] backdrop-blur-md",
  muted:
    "rounded-md bg-slate-50 ring-1 ring-slate-200 p-6 backdrop-blur-md",
  darkEmerald:
    "rounded-md bg-slate-900/90 ring-1 ring-emerald-300/40 p-6 shadow-[0_0_40px_-24px_rgba(52,211,153,0.8)] backdrop-blur-md",
  containerDark:
    "rounded-md bg-slate-900/90 ring-1 ring-white/10 p-6 sm:p-7 shadow-[0_0_40px_-24px_rgba(15,23,42,0.9)] backdrop-blur-md",
  containerDarkCta:
    "rounded-md bg-slate-950/80 ring-1 ring-white/10 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_0_40px_-24px_rgba(15,23,42,0.9)] backdrop-blur-md",
};

type CardProps = HTMLAttributes<HTMLElement> & {
  variant: CardVariant;
  as?: "article" | "div";
};

export function Card({
  variant,
  as: Component = "article",
  className = "",
  ...props
}: CardProps) {
  return (
    <Component
      className={`${variantClasses[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
