import Link from "next/link";

const base =
  "inline-flex min-h-11 items-center justify-center px-6 text-sm font-semibold transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-[0_8px_24px_oklch(0.2_0.04_250/0.12)] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none motion-reduce:active:scale-100";

const variants = {
  primary: `${base} bg-accent text-hero-ink hover:bg-accent-hover`,
  secondary: `${base} border border-line bg-surface text-ink hover:border-ink/30`,
  ghost: `${base} text-ink underline-offset-4 hover:underline`,
  onDark: `${base} bg-hero-ink text-hero hover:bg-hero-ink/90`,
  onDarkOutline: `${base} border border-hero-muted/60 text-hero-ink hover:border-hero-ink`,
  onAccent: `${base} bg-hero-ink text-accent-band hover:bg-hero-ink/90`,
  onAccentOutline: `${base} border border-hero-ink/50 text-hero-ink hover:bg-hero-ink/10`,
};

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
};

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  onClick,
  tabIndex,
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  if (href?.startsWith("mailto:") || href?.startsWith("http")) {
    return (
      <a href={href} className={classes} onClick={onClick} tabIndex={tabIndex}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} tabIndex={tabIndex}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </button>
  );
}
