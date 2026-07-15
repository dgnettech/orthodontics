import Image from "next/image";
import { BadgeCheck, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:mx-0">
      <div className="absolute -left-6 top-10 hidden rounded-3xl bg-white p-4 shadow-2xl shadow-sky-950/10 sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"><ShieldCheck className="h-5 w-5" /></span>
          <div>
            <p className="text-sm font-bold text-slate-950">SASO member</p>
            <p className="text-xs text-slate-500">Trusted specialist care</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-16 z-10 rounded-3xl bg-white p-4 shadow-2xl shadow-sky-950/10">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600"><CalendarCheck className="h-5 w-5" /></span>
          <div>
            <p className="text-sm font-bold text-slate-950">First visits</p>
            <p className="text-xs text-slate-500">Clear, calm, guided</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-4 shadow-2xl shadow-sky-950/15">
        <div className="hero-grid rounded-[1.8rem] bg-white/70 p-5">
          <Image
            src="/placeholders/hero-orthodontic-visual.svg"
            alt="Friendly orthodontic consultation illustration"
            width={720}
            height={720}
            priority
            className="h-auto w-full drop-shadow-xl"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Parents", "Teens", "Adults"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/80 px-3 py-4 text-center shadow-sm">
              <Sparkles className="mx-auto h-4 w-4 text-sky-500" />
              <p className="mt-2 text-xs font-bold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 left-10 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/20">
        <BadgeCheck className="mr-2 inline h-4 w-4 text-sky-300" /> Benoni smile care
      </div>
    </div>
  );
}
