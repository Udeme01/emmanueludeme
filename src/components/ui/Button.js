"use client";

import Link from "next/link";

export default function Button({
  children,
  onClick,
  className,
  variant = "solid",
  href,
  buttonText,
}) {
  const base =
    "rounded-md px-7 py-3.5 text-center text-[16px] font-medium transition";

  const variants = {
    solid: `${base} bg-ink hover:brightness-95 text-paper hover:bg-forest`,

    outline: `${base} border border-forest/15 text-ink hover:bg-bright/10 hover:border-forest/50`,

    text: `mt-8 inline-block font-semibold text-forest underline underline-offset-4 hover:text-ink`,
    bright: `${base} bg-bright text-ink hover:brightness-95`,
    textLight:
      "inline-block font-semibold text-paper underline underline-offset-4 transition hover:text-bright",
  };

  return (
    <Link
      href={href}
      type="button"
      onClick={onClick}
      className={`${variants[variant] ?? variants.solid} ${className}`}
    >
      {buttonText || children}
    </Link>
  );
}
