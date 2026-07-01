"use client";

import Link from "next/link";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/92 p-2 shadow-2xl shadow-sky-950/15 backdrop-blur-xl md:bottom-6 md:left-auto md:right-6 md:translate-x-0">
      <a className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700" href={business.phoneHref} aria-label="Call Nel Orthodontics">
        <Phone className="h-5 w-5" />
      </a>
      <a className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700" href={business.emailHref} aria-label="Email Nel Orthodontics">
        <Mail className="h-5 w-5" />
      </a>
      <Link className="flex h-11 items-center gap-2 rounded-full bg-sky-600 px-4 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-700" href="/book-appointment">
        <CalendarCheck className="h-5 w-5" /> Book
      </Link>
    </div>
  );
}
