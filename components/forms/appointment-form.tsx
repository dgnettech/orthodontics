"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/form-controls";
import { appointmentSchema, patientTypes, type AppointmentFormValues } from "@/lib/validation";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      preferred_date: "",
      patient_type: "Child",
      message: "",
    },
  });

  async function onSubmit(values: AppointmentFormValues) {
    setStatus("idle");
    setMessage("");
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json().catch(() => ({}))) as { message?: string; error?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.error ?? "We could not send your request. Please call the practice directly.");
      return;
    }

    setStatus("success");
    setMessage(data.message ?? "Thank you — your appointment request has been received.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-sky-950/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="surname">Surname</Label>
          <Input id="surname" placeholder="Your surname" {...register("surname")} />
          <FieldError message={errors.surname?.message} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+27 ..." {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="preferred_date">Preferred date</Label>
          <Input id="preferred_date" type="date" {...register("preferred_date")} />
          <FieldError message={errors.preferred_date?.message} />
        </div>
        <div>
          <Label htmlFor="patient_type">Patient type</Label>
          <Select id="patient_type" {...register("patient_type")}>
            {patientTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Select>
          <FieldError message={errors.patient_type?.message} />
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="appointment_message">How can we help?</Label>
        <Textarea id="appointment_message" placeholder="Tell us briefly about the patient, age, braces interest, or any concern you have noticed." {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>
      {status !== "idle" ? (
        <div className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
          {message}
        </div>
      ) : null}
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Sending request..." : "Send appointment request"}
      </Button>
    </form>
  );
}
