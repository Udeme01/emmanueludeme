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
    subheading: "font-display text-[24px] font-semibold tracking-tighter",
    paragraph: "mt-6 max-w-2xl text-[15px] leading-6 text-ink/80",
    small: "text-[14px] font-normal",
    caption: "mt-6 text-sm text-ink/60",
    eyebrow:
      "font-mono text-xs font-semibold uppercase tracking-widest text-forest",
  };

  return (
    <Tag
      className={`${base} ${variants[variant] ?? variants.paragraph} ${className}`}
    >
      {children}
    </Tag>
  );
}
