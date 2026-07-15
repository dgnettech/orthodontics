import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl">
              <Image src="/brand/nel-orthodontics-mark.svg" alt="" width={48} height={48} className="h-12 w-12" />
            </span>
            <div>
              <p className="text-lg font-black">Nel Orthodontics</p>
              <p className="text-sm text-sky-200">Warm orthodontic care in Benoni</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
            Premium orthodontic care with Dr Wally Nel and an experienced team supporting children, teenagers and adults through confident smile journeys.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <a href={business.phoneHref}>Call Practice</a>
            </Button>
          </div>
        </div>

        <div>
          <p className="font-bold text-white">Explore</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-sky-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-white">Visit us</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-sky-300" /> {business.address}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-sky-300" /> <a href={business.phoneHref}>{business.phone}</a></p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-sky-300" /> <a href={business.emailHref}>{business.email}</a></p>
            <div className="rounded-3xl bg-white/5 p-4">
              {business.hours.map((item) => (
                <p key={item.days} className="flex justify-between gap-4"><span>{item.days}</span><span>{item.time}</span></p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Nel Orthodontics. All rights reserved.</p>
          <p>Designed as a premium Next.js/Vercel experience.</p>
        </div>
      </div>
    </footer>
  );
}
