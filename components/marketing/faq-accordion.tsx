"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="mx-auto max-w-4xl space-y-3">
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.question} value={`item-${index}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-black text-slate-950 transition hover:bg-sky-50/60">
              {faq.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-sky-600 transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6 pb-6 text-sm leading-7 text-slate-600">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
