export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-line bg-surface-raised px-3 py-1 text-xs font-semibold text-ink">
      {children}
    </span>
  );
}
