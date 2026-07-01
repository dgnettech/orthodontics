import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, Images, ShieldCheck } from "lucide-react";
import { BeforeAfterSlider } from "@/components/marketing/before-after-slider";
import { CTABand } from "@/components/marketing/cta-band";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { galleryItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description: "Smile gallery and placeholder before/after module for Nel Orthodontics in Benoni.",
};

export default function SmileGalleryPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Smile gallery</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">A polished gallery experience ready for real patient stories.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">This gallery is built with clearly named placeholder assets. Replace them with approved before/after smile photography, team images and practice visuals when available.</p>
            <Button asChild className="mt-8"><Link href="/book-appointment">Start your smile journey</Link></Button>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <MotionSection>
        <div className="container-shell">
          <SectionHeader eyebrow="Gallery modules" title="Modern, structured image areas." copy="Cards are intentionally labelled so the practice can replace placeholder artwork with approved photography without changing layout code." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <Card key={item.title} className="overflow-hidden p-3">
                <Image src={item.image} alt={item.title} width={520} height={390} className="rounded-3xl" />
                <div className="p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">{item.category}</p>
                  <h2 className="mt-2 font-black text-slate-950">{item.title}</h2>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Privacy first", copy: "Only use patient images with proper consent and clinical approval." },
            { icon: Images, title: "Before/after ready", copy: "The slider module can be reused for individual treatment stories." },
            { icon: Camera, title: "Easy replacement", copy: "Placeholder SVGs live in /public/placeholders with descriptive file names." },
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
