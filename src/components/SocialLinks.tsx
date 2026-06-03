const platforms = ["Instagram", "Facebook", "LinkedIn"] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1 text-sm ${className}`}>
      {platforms.map((name) => (
        <li key={name} className="text-ink-muted">
          <span>{name}</span>
          <span className="sr-only"> (profiles coming soon)</span>
        </li>
      ))}
    </ul>
  );
}
