export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
      {children}
    </span>
  );
}
