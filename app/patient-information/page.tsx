import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Check, HeartPulse, Smile } from "lucide-react";
import { CTABand } from "@/components/marketing/cta-band";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Patient Information & FAQ",
  description: "Helpful orthodontic FAQ for parents, teens and adults considering braces or evaluations at Nel Orthodontics.",
};

export default function PatientInformationPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Patient information</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Answers that make orthodontics feel less overwhelming.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Learn about age, braces, first visits, records and common orthodontic concerns before you book a consultation.</p>
          <Button asChild className="mt-8" variant="secondary"><Link href="/first-appointment">See first appointment guide</Link></Button>
        </div>
      </section>

      <MotionSection>
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            { icon: Baby, title: "For parents", copy: "Understand when children should be evaluated and when monitoring may be enough." },
            { icon: Smile, title: "For teens", copy: "Learn how braces can improve confidence, cleaning and bite balance." },
            { icon: HeartPulse, title: "For adults", copy: "Healthy teeth can often be moved at many ages with the right plan." },
          ].map((item) => (
            <Card key={item.title} className="p-7">
              <item.icon className="h-8 w-8 text-sky-600" />
              <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions." copy="Clear answers for the questions families commonly ask before an orthodontic evaluation." />
          <div className="mt-12"><FAQAccordion /></div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader align="left" eyebrow="Benefits of braces" title="Treatment can support both confidence and health." copy="Braces can improve the appearance of the teeth, smile and face, while also helping bite function, cleaning access and jaw alignment." />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Better appearance of teeth, smile and face", "Improved self-esteem and confidence", "A more even bite", "Easier cleaning", "Reduced risk to protruding front teeth", "Better jaw alignment and tooth function"].map((item) => (
              <Card key={item} className="flex gap-3 p-4"><Check className="h-5 w-5 shrink-0 text-sky-600" /><p className="text-sm font-bold text-slate-700">{item}</p></Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-28 pt-0"><div className="container-shell"><CTABand title="Have a question we did not answer?" copy="Send the practice a message or book an evaluation so the team can guide you based on your specific needs." /></div></MotionSection>
    </>
  );
}
