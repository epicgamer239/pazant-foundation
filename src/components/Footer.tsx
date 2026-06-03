import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold">Rosalie Frazier Pazant Foundation</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              Committed to disciplined governance, educational opportunity, and community impact.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link href="/#about" className="hover:text-white">About</Link></li>
              <li><Link href="/#programs" className="hover:text-white">Programs</Link></li>
              <li><Link href="/biography" className="hover:text-white">Her Legacy</Link></li>
              <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">Connect</p>
            <p className="mt-4 text-sm text-cream/80">
              <a href="mailto:info@pazantfoundation.org" className="hover:text-white">
                info@pazantfoundation.org
              </a>
            </p>
            <p className="mt-2 text-sm text-cream/80">Beaufort, South Carolina</p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-sm text-cream/60 hover:text-white" aria-label="Instagram">Instagram</a>
              <a href="#" className="text-sm text-cream/60 hover:text-white" aria-label="Facebook">Facebook</a>
              <a href="#" className="text-sm text-cream/60 hover:text-white" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/10 pt-8 text-center text-sm text-cream/60">
          © {new Date().getFullYear()} Rosalie Frazier Pazant Foundation
        </div>
      </div>
    </footer>
  );
}
