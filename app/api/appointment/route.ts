import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { appointmentSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the appointment form and try again.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Appointment capture is not connected yet. Please call +27 11 425 0773 or email benoni@orthodontics.co.za." },
      { status: 503 },
    );
  }

  const values = parsed.data;
  const { error } = await supabase.from("appointment_requests").insert({
    name: values.name,
    surname: values.surname,
    phone: values.phone,
    email: values.email,
    message: values.message || null,
    preferred_date: values.preferred_date || null,
    patient_type: values.patient_type,
    source: "website",
    status: "new",
  });

  if (error) {
    return NextResponse.json({ error: "We could not save the appointment request. Please call the practice directly." }, { status: 500 });
  }

  return NextResponse.json({ message: "Thank you — your appointment request has been received. The practice team will contact you soon." });
}
