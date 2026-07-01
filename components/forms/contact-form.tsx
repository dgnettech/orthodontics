"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/form-controls";
import { contactSchema, type ContactFormValues } from "@/lib/validation";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", surname: "", phone: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setMessage("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json().catch(() => ({}))) as { message?: string; error?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.error ?? "We could not send your message. Please call or email the practice directly.");
      return;
    }

    setStatus("success");
    setMessage(data.message ?? "Thank you — your message has been received.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-sky-950/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact_name">Name</Label>
          <Input id="contact_name" placeholder="Your name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="contact_surname">Surname</Label>
          <Input id="contact_surname" placeholder="Your surname" {...register("surname")} />
          <FieldError message={errors.surname?.message} />
        </div>
        <div>
          <Label htmlFor="contact_phone">Phone</Label>
          <Input id="contact_phone" placeholder="+27 ..." {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <Label htmlFor="contact_email">Email</Label>
          <Input id="contact_email" type="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="contact_message">Message</Label>
        <Textarea id="contact_message" placeholder="How can the Nel Orthodontics team help?" {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>
      {status !== "idle" ? (
        <div className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
          {message}
        </div>
      ) : null}
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Sending message..." : "Send message"}
      </Button>
    </form>
  );
}
