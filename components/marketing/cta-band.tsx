import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export function CTABand({
  title = "Ready to understand your smile options?",
  copy = "Book a first appointment and let the Nel Orthodontics team guide you through the process with clarity and care.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 p-8 text-white shadow-2xl shadow-sky-600/20 sm:p-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-sm font-bold backdrop-blur"><CalendarCheck className="h-4 w-4" /> Appointments available</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-sky-50">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="dark" size="lg"><Link href="/book-appointment">Book Appointment <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="secondary" size="lg"><a href={business.phoneHref}>Call Practice</a></Button>
        </div>
      </div>
    </div>
  );
}
