"use client";

import Image from "next/image";
import { useState } from "react";
import { Images } from "lucide-react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  return (
    <div className="rounded-[2.4rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-sky-950/10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-slate-100">
        <Image src="/placeholders/smile-after-01-placeholder.svg" alt="Illustrative after smile result" fill className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <Image src="/placeholders/smile-before-01-placeholder.svg" alt="Illustrative before smile" fill className="max-w-none object-cover" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="h-full w-1 -translate-x-1/2 bg-white shadow-lg" />
          <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sky-600 shadow-xl">
            <Images className="h-5 w-5" />
          </div>
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">Before</div>
        <div className="absolute right-4 top-4 rounded-full bg-sky-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">After</div>
      </div>
      <label className="mt-5 block text-sm font-semibold text-slate-700" htmlFor="smile-slider">
        Drag to compare the smile preview
      </label>
      <input
        id="smile-slider"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-3 w-full accent-sky-600"
      />
      <p className="mt-3 text-xs leading-6 text-slate-500">Approved patient photography can be added here once consented before/after images are available.</p>
    </div>
  );
}
