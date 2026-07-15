"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { business, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Nel Orthodontics home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-sky-500/25">
            <Image src="/brand/nel-orthodontics-mark.svg" alt="" width={44} height={44} priority className="h-11 w-11" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-slate-950">Nel Orthodontics</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Benoni</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-700",
                pathname === item.href && "bg-sky-50 text-sky-700",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={business.phoneHref}>
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white lg:hidden">
          <nav className="container-shell grid gap-2 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700",
                  pathname === item.href && "bg-sky-50 text-sky-700",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/book-appointment" onClick={() => setOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
