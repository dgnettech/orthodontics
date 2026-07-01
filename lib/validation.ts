import { z } from "zod";

const requiredText = (label: string) =>
  z.string().trim().min(2, `${label} must be at least 2 characters`).max(80, `${label} is too long`);

export const patientTypes = ["Child", "Teen", "Adult", "Existing patient"] as const;

export const appointmentSchema = z.object({
  name: requiredText("Name"),
  surname: requiredText("Surname"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact number")
    .max(30, "Contact number is too long"),
  email: z.email("Please enter a valid email address"),
  preferred_date: z.string().optional(),
  patient_type: z.enum(patientTypes, "Please select a patient type"),
  message: z.string().trim().max(1000, "Message is too long").optional(),
});

export const contactSchema = z.object({
  name: requiredText("Name"),
  surname: requiredText("Surname"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact number")
    .max(30, "Contact number is too long"),
  email: z.email("Please enter a valid email address"),
  message: z.string().trim().min(8, "Please add a short message").max(1200, "Message is too long"),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
