"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X, Users, ArrowRight } from "lucide-react";

const links: { label: string; href: string; isActive: (path: string) => boolean }[] = [
  { label: "Home", href: "/", isActive: (p) => p === "/" },
  { label: "Events", href: "/events", isActive: (p) => p === "/events" },
  { label: "Annual Calendar", href: "/events#calendar", isActive: () => false },
  { label: "Travel Guide", href: "/events#travel", isActive: () => false },
  { label: "My Registration", href: "/events#register", isActive: () => false },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[1000] border-b border-[#e9ddcb] bg-[#fbf6ee]/95 shadow-[0_6px_24px_-18px_rgba(75,60,35,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">


<Link
  href="/"
  className="flex items-center"
  aria-label="WellSense home"
>
  <Image
    src="/images/wellsense-logo.png"
    alt="WellSense – Eradicating Diabesity"
    width={180}
    height={60}
    priority
    className="h-auto w-[140px] object-contain sm:w-[170px]"
  />
</Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${link.isActive(pathname) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/events#register" className="btn-copper !min-h-0 !rounded-xl !px-5 !py-2.5">
            <Users size={16} aria-hidden /> Register Interest
          </Link>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl text-forest transition-colors hover:bg-[#eee5d6] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-sand bg-cream px-5 py-3 lg:hidden"
            aria-label="Mobile"
          >
            <div className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#eee5d6]"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/events#register" onClick={() => setOpen(false)} className="btn-copper mt-2">
                Register Interest <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
