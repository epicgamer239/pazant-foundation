"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#mission", label: "Mission" },
  { href: "/#programs", label: "Programs" },
  { href: "/#impact", label: "Impact" },
  { href: "/#support", label: "Support" },
  { href: "/biography", label: "Her Legacy" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group max-w-[220px] sm:max-w-none">
          <span className="font-serif text-lg font-semibold leading-tight text-navy sm:text-xl">
            Rosalie Frazier Pazant Foundation
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#support"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
          >
            Get Involved
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-sand text-navy lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand bg-cream px-6 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-sm font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#support"
                className="inline-block rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
