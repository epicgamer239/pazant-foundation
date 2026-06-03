type FieldLabelProps = {
  children: React.ReactNode;
  invert?: boolean;
};

export function FieldLabel({ children, invert = false }: FieldLabelProps) {
  return (
    <p
      className={`text-xs font-semibold tracking-wide ${
        invert ? "text-hero-ink/90" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}
