"use client";

import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";

// Change these if your public contact details change
const EMAIL = "emmanueludeme.dev@gmail.com";
const GITHUB = "https://github.com/Udeme01";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MarketingLayout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/30 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 xl:h-28 max-w-[90rem] items-center justify-between px-6">
          <Link
            href="/"
            className="font-display text-[24px] xl:text-[44px] font-semibold tracking-tighter text-ink leading-5 xl:leading-7.5"
          >
            theQuietdev
            <span className="text-[10px] uppercase tracking-widest block pl-0.5 md:pl-1">
              studios
            </span>
          </Link>
          <nav className="flex items-center xl:gap-6 text-sm font-light text-ink">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden transition hover:text-forest sm:block"
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              href="/contact"
              className="rounded-md bg-ink px-4 py-2 font-semibold text-bright text-[12px] transition hover:brightness-95"
            >
              {"Let's talk"}
            </Link> */}
            <Hamburger
              // toggled={false}
              // toggle={() => {}}
              size={20}
              color="#1C1C1C"
              label="Show menu"
            />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* OLD (kept for reference): same footer without the big wordmark at the bottom */}
      <footer className="bg-ink text-mint">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-xl font-bold">
              theQuietdev{" "}
              <span className="text-[10px] uppercase tracking-widest block pl-0.5 md:pl-1">
                studios
              </span>
            </p>
            <p className="mt-2 text-sm text-mint/80">
              Building what moves your business forward.
            </p>
            <p className="mt-1 text-sm text-mint/60">
              Independent Software Engineer
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-bright"
              >
                {link.label}
              </Link>
            ))}
            <a href={`mailto:${EMAIL}`} className="hover:text-bright">
              {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bright"
            >
              GitHub: Udeme01
            </a>
          </div>
        </div>
        <p className="border-t border-mint/15 py-5 text-center text-xs text-mint/60">
          © 2026 theQuietdev studios. All rights reserved.
        </p>

        {/* Big wordmark */}
        <div className="overflow-hidden px-6 pb-6">
          <div className="mx-auto max-w-6xl [container-type:inline-size]">
            <p
              aria-hidden="true"
              className="select-none whitespace-nowrap font-display text-[16cqw] font-extrabold leading-none tracking-tighter text-mint w-full text-center"
            >
              theQuietdev
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
