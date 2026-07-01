import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Check, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Star, UserRoundCheck } from "lucide-react";
import { BeforeAfterSlider } from "@/components/marketing/before-after-slider";
import { CTABand } from "@/components/marketing/cta-band";
import { HeroVisual } from "@/components/marketing/hero-visual";
import { LocationSection } from "@/components/marketing/location-section";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { SmileJourney } from "@/components/marketing/smile-journey";
import { TreatmentCards } from "@/components/marketing/treatment-cards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business, galleryItems, testimonials, trustPoints } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="absolute inset-0 -z-10 hero-grid opacity-70" />
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Sparkles className="h-4 w-4" /> Premium orthodontic care in Benoni
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Confident smiles begin with calm, specialist care.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Nel Orthodontics helps children, teenagers and adults understand their treatment options with warm guidance, precise diagnosis and a trusted team led by {business.doctor}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/book-appointment">Book Appointment <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/first-appointment">What to expect</Link></Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl bg-white/78 p-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70">
                  <Check className="h-4 w-4 text-sky-600" /> {point}
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <MotionSection className="bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeader
              align="left"
              eyebrow="Trusted orthodontic care in Benoni"
              title="A warmer way to plan a healthier smile."
              copy="Orthodontic treatment should feel understandable, not intimidating. The practice combines specialist diagnosis, practical explanations and supportive patient care so families know what is happening and why."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Specialist trust", copy: "Member of the South African Society of Orthodontists." },
                { icon: HeartHandshake, title: "Patient-first", copy: "Gentle support for anxious children, busy parents and adult patients." },
                { icon: Award, title: "Experienced team", copy: "Oral hygienists, admin support and laboratory expertise in one care environment." },
                { icon: BadgeCheck, title: "Clear planning", copy: "Records, diagnosis, treatment timing and written estimates explained clearly." },
              ].map((item) => (
                <Card key={item.title} className="p-6">
                  <item.icon className="h-7 w-7 text-sky-600" />
                  <h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.copy}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Orthodontic services for every stage of the smile journey."
            copy="Explore the core appointment types and treatment pathways offered by Nel Orthodontics. Hover or tap a card for more detail."
          />
          <div className="mt-12"><TreatmentCards /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-gradient-to-b from-white to-sky-50/70">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Your smile journey"
            title="From first question to confident progress."
            copy="A simple, interactive look at how the Nel Orthodontics team helps patients move from uncertainty to a clear plan."
          />
          <div className="mt-12"><SmileJourney /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Meet Dr Wally Nel"
              title="Specialist orthodontic experience with a personal approach."
              copy="Dr Wally Nel studied at the University of Pretoria and completed postgraduate orthodontic training with distinction. His work focuses on improving smiles, confidence and bite function with careful diagnosis and modern treatment planning."
            />
            <div className="mt-7 grid gap-3 text-sm leading-7 text-slate-700">
              {[
                "B.Ch.D Dentistry, University of Pretoria",
                "PDD Orthodontics, University of the Western Cape — Cum Laude",
                "M.Ch.D Orthodontics, University of Pretoria — Cum Laude",
                "South African Society of Orthodontists member",
              ].map((item) => (
                <p key={item} className="flex gap-3"><GraduationCap className="mt-1 h-5 w-5 text-sky-600" /> {item}</p>
              ))}
            </div>
            <Button asChild className="mt-8" variant="secondary"><Link href="/about">Meet the team</Link></Button>
          </div>
          <div className="relative overflow-hidden rounded-[2.3rem] border border-slate-200 bg-sky-50 p-4 shadow-2xl shadow-sky-950/10">
            <Image src="/placeholders/dr-wally-nel-portrait-placeholder.svg" alt="Dr Wally Nel portrait placeholder" width={760} height={640} className="h-auto w-full rounded-[1.8rem]" />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Smile gallery"
              title="A preview of transformation-focused care."
              copy="Use the before/after slider as a placeholder-ready gallery module. Replace the named SVG assets with approved clinical photography when available."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {galleryItems.slice(1, 3).map((item) => (
                <Card key={item.title} className="overflow-hidden p-3">
                  <Image src={item.image} alt={item.title} width={420} height={300} className="rounded-3xl" />
                  <div className="p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">{item.category}</p>
                    <p className="mt-1 font-black text-slate-950">{item.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <BeforeAfterSlider />
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="Happy stories" title="Reassuring care patients remember." copy="Warm, practical support matters just as much as clinical precision. These stories reflect the tone families should feel from the first enquiry." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((story) => (
              <Card key={story.author} className="p-6">
                <div className="flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-5 text-sm leading-7 text-slate-700">“{story.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-600"><UserRoundCheck className="h-5 w-5" /></span>
                  <div><p className="font-black text-slate-950">{story.author}</p><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{story.context}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-shell"><CTABand /></div>
      </MotionSection>

      <MotionSection className="pb-28 pt-0">
        <div className="container-shell"><LocationSection /></div>
      </MotionSection>
    </>
  );
}
