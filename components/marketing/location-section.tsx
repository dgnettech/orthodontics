import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export function LocationSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2.2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/15">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-200">Visit our practice</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Orthodontic care in Rynfield, Benoni.</h2>
        <div className="mt-8 space-y-5 text-sm leading-7 text-slate-200">
          <p className="flex gap-4"><MapPin className="mt-1 h-5 w-5 text-sky-300" /> {business.address}</p>
          <p className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-sky-300" /> <a href={business.phoneHref}>{business.phone}</a></p>
          <p className="flex gap-4"><Mail className="mt-1 h-5 w-5 text-sky-300" /> <a href={business.emailHref}>{business.email}</a></p>
          <div className="rounded-3xl bg-white/8 p-5">
            <p className="mb-3 flex items-center gap-3 font-bold text-white"><Clock3 className="h-5 w-5 text-sky-300" /> Opening hours</p>
            {business.hours.map((item) => (
              <p key={item.days} className="flex justify-between gap-4"><span>{item.days}</span><span>{item.time}</span></p>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><a href={business.phoneHref}>Call {business.phone}</a></Button>
          <Button asChild variant="secondary"><a href={business.emailHref}>Email us</a></Button>
        </div>
      </div>
      <div className="min-h-[420px] overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl shadow-sky-950/10">
        <iframe
          title="Google map showing Nel Orthodontics in Rynfield Benoni"
          src={business.mapEmbed}
          className="h-full min-h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
