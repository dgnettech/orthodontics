"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { journeySteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SmileJourney() {
  const [active, setActive] = useState(0);
  const current = journeySteps[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="space-y-3">
        {journeySteps.map((step, index) => (
          <button
            key={step.title}
            onClick={() => setActive(index)}
            className={cn(
              "flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all",
              active === index ? "border-sky-200 bg-white shadow-xl shadow-sky-950/8" : "border-slate-200 bg-white/55 hover:border-sky-100 hover:bg-white",
            )}
          >
            <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black", active >= index ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-500")}>
              {active > index ? <Check className="h-5 w-5" /> : index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-600">{step.label}</span>
              <span className="mt-1 block text-base font-black text-slate-950">{step.title}</span>
            </span>
            <ChevronRight className={cn("h-5 w-5 text-slate-300 transition", active === index && "rotate-90 text-sky-500")} />
          </button>
        ))}
      </div>

      <motion.div
        key={current.title}
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-sky-950/20"
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-200">Step {active + 1}</p>
          <h3 className="mt-5 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">{current.title}</h3>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">{current.copy}</p>
          <div className="mt-10 grid grid-cols-4 gap-2">
            {journeySteps.map((step, index) => (
              <div key={step.label} className="h-2 overflow-hidden rounded-full bg-white/15">
                <div className={cn("h-full rounded-full bg-sky-300 transition-all duration-500", active >= index ? "w-full" : "w-0")} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
