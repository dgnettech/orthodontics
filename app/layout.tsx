import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { FloatingActions } from "@/components/marketing/floating-actions";
import { PageTransition } from "@/components/marketing/page-transition";
import { business } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nel-orthodontics.vercel.app"),
  title: {
    default: "Nel Orthodontics | Orthodontist in Benoni",
    template: "%s | Nel Orthodontics",
  },
  description:
    "Premium orthodontic care in Benoni with Dr Wally Nel. Braces, early orthodontic evaluations, X-rays, treatment planning and first appointments for children, teens and adults.",
  keywords: [
    "Nel Orthodontics",
    "Dr Wally Nel",
    "orthodontist Benoni",
    "braces Benoni",
    "orthodontics South Africa",
    "children orthodontics",
  ],
  openGraph: {
    title: "Nel Orthodontics | Orthodontist in Benoni",
    description: "Warm, professional orthodontic care for children, teens and adults in Rynfield, Benoni.",
    url: "https://nel-orthodontics.vercel.app",
    siteName: "Nel Orthodontics",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  medicalSpecialty: "Orthodontics",
  founder: business.doctor,
  address: {
    "@type": "PostalAddress",
    streetAddress: "93 Pretoria Road",
    addressLocality: "Benoni",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  telephone: business.phone,
  email: business.email,
  url: "https://nel-orthodontics.vercel.app",
  openingHoursSpecification: business.hours.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.days,
    opens: item.time.split(" – ")[0],
    closes: item.time.split(" – ")[1],
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${plusJakarta.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
