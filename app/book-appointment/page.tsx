import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Check, Clock3, HeartHandshake, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { MotionSection } from "@/components/marketing/motion-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Request an orthodontic appointment with Nel Orthodontics in Benoni for children, teens or adults.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Book appointment</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Start with a clear, reassuring orthodontic consultation.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">Send your preferred details and the practice team will contact you to help arrange the right appointment type.</p>
            <div className="mt-8 grid gap-3">
              {[
                "Suitable for parents, teens and adult patients",
                "Preferred date captured for the team to review",
                "Form validation and Supabase-ready storage included",
              ].map((item) => <p key={item} className="flex gap-3 text-sm font-bold text-slate-700"><Check className="h-5 w-5 text-sky-600" /> {item}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary"><a href={business.phoneHref}><Phone className="h-4 w-4" /> Call instead</a></Button>
              <Button asChild variant="ghost"><Link href="/first-appointment">What to expect</Link></Button>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <MotionSection>
        <div className="container-shell">
          <SectionHeader eyebrow="What happens next" title="A simple follow-up process." copy="The website captures your request. The practice then confirms availability, appointment type and anything you should bring." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: CalendarCheck, title: "1. Request received", copy: "Your details are stored in the appointment_requests table when Supabase is connected." },
              { icon: Phone, title: "2. Team contacts you", copy: "The practice confirms timing and answers practical questions before the visit." },
              { icon: HeartHandshake, title: "3. Visit with confidence", copy: "Arrive prepared for a calm consultation and clear explanation of next steps." },
            ].map((item) => (
              <Card key={item.title} className="p-7">
                <item.icon className="h-8 w-8 text-sky-600" />
                <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white pb-28">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <Card className="p-7">
            <Clock3 className="h-8 w-8 text-sky-600" />
            <h2 className="mt-5 text-xl font-black text-slate-950">Opening hours</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {business.hours.map((item) => <p key={item.days} className="flex justify-between gap-4"><span>{item.days}</span><span className="font-bold text-slate-800">{item.time}</span></p>)}
            </div>
          </Card>
          <Card className="p-7">
            <Phone className="h-8 w-8 text-sky-600" />
            <h2 className="mt-5 text-xl font-black text-slate-950">Prefer to speak to someone?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Call {business.phone} or email {business.email}. The floating buttons are always available on mobile and desktop.</p>
          </Card>
        </div>
      </MotionSection>
    </>
  );
}
