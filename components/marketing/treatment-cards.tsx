"use client";

import { useState } from "react";
import { ArrowRight, Baby, Camera, ClipboardList, Smile, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = [Smile, Baby, Camera, Stethoscope, ClipboardList, Smile];

export function TreatmentCards() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = icons[index] ?? Smile;
        const isActive = active === index;
        return (
          <Card
            key={service.title}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex={0}
            className={cn(
              "group cursor-pointer overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-950/10",
              isActive && "border-sky-200 bg-sky-50/60 shadow-xl shadow-sky-950/10",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </span>
              <ArrowRight className={cn("h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-500", isActive && "translate-x-1 text-sky-500")} />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">{service.audience}</p>
            <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
            <div className={cn("grid transition-all duration-300", isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <p className="overflow-hidden pt-4 text-sm leading-7 text-slate-700">{service.detail}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
