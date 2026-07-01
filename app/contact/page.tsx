import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { LocationSection } from "@/components/marketing/location-section";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Card } from "@/components/ui/card";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Nel Orthodontics in Rynfield, Benoni by phone, email or secure website form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Contact us</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">We would love to hear from you.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Call, email or send a message to the Nel Orthodontics team. We will help you understand the next step for your child, teen or adult smile goals.</p>
        </div>
      </section>

      <MotionSection>
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="grid gap-4">
            {[
              { icon: Phone, title: "Call us", value: business.phone, href: business.phoneHref },
              { icon: Mail, title: "Email us", value: business.email, href: business.emailHref },
              { icon: MapPin, title: "Find us", value: business.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}` },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <item.icon className="h-7 w-7 text-sky-600" />
                <h2 className="mt-5 text-lg font-black text-slate-950">{item.title}</h2>
                <a href={item.href} className="mt-2 block text-sm leading-7 text-slate-600 transition hover:text-sky-700">{item.value}</a>
              </Card>
            ))}
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Send a message" title="Ask a question or request a callback." copy="Your message will be stored in Supabase once the project environment variables are configured." />
            <div className="mt-8"><ContactForm /></div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-28 pt-0"><div className="container-shell"><LocationSection /></div></MotionSection>
    </>
  );
}
