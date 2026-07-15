import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the contact form and try again.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Contact capture is not connected yet. Please call +27 11 425 0773 or email benoni@orthodontics.co.za." },
      { status: 503 },
    );
  }

  const values = parsed.data;
  const { error } = await supabase.from("contact_messages").insert({
    name: values.name,
    surname: values.surname,
    phone: values.phone,
    email: values.email,
    message: values.message,
    source: "website",
    status: "new",
  });

  if (error) {
    console.error("contact_messages insert failed", {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    });
    return NextResponse.json({ error: "We could not save the message. Please call or email the practice directly." }, { status: 500 });
  }

  return NextResponse.json({ message: "Thank you — your message has been received. The practice team will respond soon." });
}
