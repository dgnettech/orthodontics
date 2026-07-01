import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Check, ClipboardList, FileText, ShieldCheck, Timer } from "lucide-react";
import { CTABand } from "@/components/marketing/cta-band";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "First Appointment",
  description: "What to expect at your first Nel Orthodontics appointment, including records, evaluations, timing and what to bring.",
};

export default function FirstAppointmentPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">First appointment</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">A calm first visit with clear answers.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Your first appointment is designed to help you understand whether orthodontic treatment is needed, when it should begin and which records are required for planning.</p>
          <Button asChild className="mt-8" size="lg"><Link href="/book-appointment">Request an appointment</Link></Button>
        </div>
      </section>

      <MotionSection>
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Children older than 10 years",
              copy: "This visit commonly includes an orthodontic examination, consultation, panoramic X-ray and infection control. A full evaluation may include cephalometric X-ray, clinical photographs, diagnostic treatment plan and quotation.",
              points: ["Allow up to 90 minutes", "Treatment plan discussed with you", "Written cost estimate provided where appropriate"],
            },
            {
              title: "Children 10 years and younger",
              copy: "A full orthodontic examination is not always necessary at a younger age. The initial visit helps determine whether treatment should start now, be monitored, or be planned for later.",
              points: ["Consultation and panoramic X-ray", "Growth and eruption evaluated", "Full examination can be scheduled later if needed"],
            },
          ].map((group) => (
            <Card key={group.title} className="p-7">
              <CalendarDays className="h-8 w-8 text-sky-600" />
              <h2 className="mt-5 text-2xl font-black text-slate-950">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{group.copy}</p>
              <div className="mt-5 space-y-3">
                {group.points.map((point) => <p key={point} className="flex gap-3 text-sm font-bold text-slate-700"><Check className="h-5 w-5 text-sky-600" /> {point}</p>)}
              </div>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader align="left" eyebrow="What to bring" title="Arrive prepared and we will guide the rest." copy="A little preparation helps the team handle your records and account information efficiently." />
          <div className="grid gap-4">
            {[
              { icon: FileText, title: "Proof of identity", copy: "Bring proof of identity for the person responsible for the account." },
              { icon: ShieldCheck, title: "Medical aid details", copy: "Bring proof of medical aid membership if you would like these details reflected on your statement." },
              { icon: Timer, title: "Enough time", copy: "The first consultation can be a longer appointment, especially when diagnostic records are taken." },
              { icon: ClipboardList, title: "Questions and concerns", copy: "Bring any questions about age, braces, bite concerns, habits, crowding or smile goals." },
            ].map((item) => (
              <Card key={item.title} className="flex gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600"><item.icon className="h-6 w-6" /></span>
                <div><h2 className="font-black text-slate-950">{item.title}</h2><p className="mt-1 text-sm leading-7 text-slate-600">{item.copy}</p></div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-28"><div className="container-shell"><CTABand title="Ready for your first visit?" copy="Send an appointment request and the Nel Orthodontics team will help you choose the right next step." /></div></MotionSection>
    </>
  );
}
