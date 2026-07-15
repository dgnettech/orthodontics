import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, HeartHandshake, Microscope, ShieldCheck, Users } from "lucide-react";
import { CTABand } from "@/components/marketing/cta-band";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Dr Wally Nel and the experienced orthodontic team at Nel Orthodontics in Benoni.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">About Nel Orthodontics</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">A specialist team built around confident patient care.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nel Orthodontics brings together specialist orthodontic expertise, qualified oral hygienists, administrative care and laboratory support to make treatment feel organised, reassuring and personal.
            </p>
          </div>
          <Image src="/placeholders/team-gallery-placeholder.svg" alt="Nel Orthodontics care team illustration" width={820} height={620} className="rounded-[2.2rem] border border-slate-200 bg-sky-50 shadow-2xl shadow-sky-950/10" />
        </div>
      </section>

      <MotionSection>
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky top-28 hidden lg:block">
            <Image src="/placeholders/dr-wally-nel-portrait-placeholder.svg" alt="Dr Wally Nel portrait illustration" width={620} height={760} className="rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl shadow-sky-950/10" />
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Orthodontist" title="Dr Wally Nel" copy="Dr Wally Nel studied at the University of Pretoria and has dedicated his career to orthodontics, education and patient-focused smile transformation." />
            <div className="mt-8 grid gap-4">
              {[
                "B.Ch.D Dentistry, University of Pretoria",
                "Dip. Odont Periodontics, University of Pretoria",
                "PDD Orthodontics, University of the Western Cape — Cum Laude",
                "M.Ch.D Orthodontics, University of Pretoria — Cum Laude",
                "Member of the South African Society of Orthodontists",
                "Member of the Eastern Tshwane Orthodontic Society",
                "Former lecturer at the University of Pretoria Department of Orthodontics, 2005–2012",
                "Recipient of Academic Honorary Colours from the University of Pretoria in 2012",
              ].map((item) => (
                <Card key={item} className="flex gap-4 p-5">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  <p className="text-sm font-semibold leading-7 text-slate-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="The care team" title="Support at every step of treatment." copy="Behind every smooth orthodontic experience is a team that keeps patients comfortable, records organised and appliances carefully supported." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              { icon: Users, title: "Oral hygienists", copy: "Qualified oral hygiene professionals help patients maintain excellent oral health throughout orthodontic care." },
              { icon: Microscope, title: "Dental technologist", copy: "Experienced laboratory support contributes to custom orthodontic appliances and technical precision." },
              { icon: HeartHandshake, title: "Admin and patient support", copy: "Friendly assistance with appointments, account details, estimates and practical next steps." },
            ].map((item) => (
              <Card key={item.title} className="p-7">
                <item.icon className="h-8 w-8 text-sky-600" />
                <h2 className="mt-6 text-xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Trusted membership", copy: "South African Society of Orthodontists member." },
            { icon: Award, title: "Academic background", copy: "Postgraduate orthodontic qualifications completed Cum Laude." },
            { icon: HeartHandshake, title: "Patient-centred", copy: "Care that focuses on comfort, clarity and confidence." },
          ].map((item) => (
            <Card key={item.title} className="p-7 text-center">
              <item.icon className="mx-auto h-8 w-8 text-sky-600" />
              <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="pb-28 pt-0"><div className="container-shell"><CTABand /></div></MotionSection>
    </>
  );
}
