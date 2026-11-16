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
    "rounded-md px-7 py-3.5 text-center text-[16px] font-medium transition focus:outline-none focus:ring-2 focus:ring-forest/50";

  const solid =
    "bg-ink text-bright hover:brightness-95 hover:bg-bright hover:text-ink";

  const outline =
    "border border-forest/15 text-ink hover:bg-bright/10 hover:border-forest/50";

  return (
    <Link
      href={href}
      type="button"
      onClick={onClick}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      {buttonText || children}
    </Link>
  );
}
