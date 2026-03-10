import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-indigo-500 shadow-[0_0_30px_-18px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.9)] hover:bg-indigo-400 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = {
  href: string;
  children: React.ReactNode;
  className?: string;
  disabled?: never;
};

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  className = "",
  disabled,
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const { type = "submit", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
