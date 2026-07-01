import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Check, HeartPulse, Smile, Sparkles } from "lucide-react";
import { CTABand } from "@/components/marketing/cta-band";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { TreatmentCards } from "@/components/marketing/treatment-cards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { treatmentConcerns } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Braces, preventative orthodontics, diagnostic X-rays, treatment planning and orthodontic evaluations in Benoni.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Treatments</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Orthodontic care tailored to your age, smile and bite.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">Whether you are a parent exploring early evaluation, a teenager preparing for braces, or an adult ready to improve your smile, the treatment plan begins with careful diagnosis.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link href="/book-appointment">Book an evaluation <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="secondary"><Link href="/first-appointment">First appointment details</Link></Button>
            </div>
          </div>
          <Card className="p-7">
            <Smile className="h-10 w-10 text-sky-600" />
            <h2 className="mt-6 text-2xl font-black text-slate-950">What braces can improve</h2>
            <div className="mt-5 grid gap-3">
              {["Smile appearance and confidence", "Bite balance and jaw alignment", "Cleaning access and long-term oral health", "Risk reduction for protruding front teeth"].map((item) => (
                <p key={item} className="flex gap-3 text-sm font-semibold leading-7 text-slate-700"><Check className="mt-1 h-4 w-4 text-sky-600" /> {item}</p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <MotionSection>
        <div className="container-shell">
          <SectionHeader eyebrow="Core services" title="Services offered by Nel Orthodontics." copy="Interactive treatment cards explain each service in a family-friendly way without overwhelming new patients." />
          <div className="mt-12"><TreatmentCards /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader align="left" eyebrow="Diagnosis matters" title="Common orthodontic concerns we evaluate." copy="Orthodontic problems can be genetic, developmental or habit-related. Records such as X-rays, photographs and impressions help the practice explain what is happening clearly." />
          <div className="grid gap-3 sm:grid-cols-2">
            {treatmentConcerns.map((item) => (
              <Card key={item} className="flex items-center gap-3 p-4">
                <Activity className="h-5 w-5 shrink-0 text-sky-600" />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Aesthetic options", copy: "For selected patients, more aesthetic bracket options may be discussed during treatment planning." },
            { icon: HeartPulse, title: "Oral health support", copy: "Straighter teeth can be easier to clean and may reduce risks linked to crowding or bite trauma." },
            { icon: Smile, title: "Confidence focus", copy: "Treatment is not only about teeth — it can improve smile confidence and day-to-day comfort." },
          ].map((item) => (
            <Card key={item.title} className="p-7">
              <item.icon className="h-8 w-8 text-sky-600" />
              <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="pb-28 pt-0"><div className="container-shell"><CTABand title="Not sure which treatment is right?" copy="Start with an orthodontic evaluation. The team will help you understand timing, options and what to expect next." /></div></MotionSection>
    </>
  );
}
