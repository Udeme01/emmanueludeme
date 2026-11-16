export default function Text({
  children,
  className = "",
  variant = "paragraph",
  Tag = "p",
}) {
  const base = "text-ink";
  const variants = {
    heading:
      "mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-ink sm:text-6xl",
    subheading:
          "max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl",
    subheadingText: "font-display text-2xl font-bold text-paper",
    paragraph: "mt-6 max-w-2xl text-[15px] leading-6 text-ink/80",
    small: "text-[14px] font-normal",
    caption: "mt-6 text-sm text-ink/60",
    eyebrow:
          "font-mono text-xs font-semibold uppercase tracking-widest text-forest",
    titleHead: "mt-3 font-display text-xl font-bold text-ink"
  };

  return (
    <Tag
      className={`${base} ${variants[variant] ?? variants.paragraph} ${className}`}
    >
      {children}
    </Tag>
  );
}
