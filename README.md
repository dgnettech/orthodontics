# Nel Orthodontics Website

Premium, modern orthodontic website for **Nel Orthodontics** in Rynfield, Benoni. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, shadcn-style UI primitives and optional Supabase form persistence.

## Design concept

A warm, high-end medical website: soft whites, dental blues, rounded cards, subtle gradients, confident typography, smooth scroll/page animations and reassuring copy for parents, teens and adults.

## Sitemap

- `/` — Home
- `/about` — About Us
- `/treatments` — Treatments
- `/first-appointment` — First Appointment
- `/smile-gallery` — Smile Gallery
- `/patient-information` — Patient Information / FAQ
- `/contact` — Contact Us
- `/book-appointment` — Book Appointment

## Key features

- Mobile-first responsive navigation
- Sticky/floating call, email and booking actions
- Smooth page transitions and scroll reveal animations
- Interactive treatment cards
- Smile journey stepper
- FAQ accordion
- Before/after comparison slider
- Contact and appointment forms with React Hook Form + Zod validation
- Supabase-ready API routes for form persistence
- Google Maps embed for 93 Pretoria Road, Rynfield, Benoni
- SEO metadata, robots and sitemap
- Clearly named placeholder assets in `public/placeholders/`

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Supabase JS client
- shadcn-style component primitives using Radix Slot / Accordion
- Vercel-ready deployment

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Supabase is used only for appointment/contact form persistence. The site builds without these variables, but form submissions will show a setup message until they are configured.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-server-only-service-role-key
```

> Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Do not expose it as `NEXT_PUBLIC_*`.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/schema.sql`.
4. Add the environment variables above in `.env.local` and in Vercel Project Settings.
5. Redeploy.

Tables created:

- `appointment_requests`
- `contact_messages`

Both tables include `status`, `source`, `internal_notes`, `created_at` and `updated_at` so they are ready for a future admin panel.

## Placeholder images

All placeholder visuals are SVGs under:

```text
public/placeholders/
```

Replace these with approved practice/patient photography when available:

- `hero-orthodontic-visual.svg`
- `dr-wally-nel-portrait-placeholder.svg`
- `smile-before-01-placeholder.svg`
- `smile-after-01-placeholder.svg`
- `team-gallery-placeholder.svg`
- `diagnostic-xray-placeholder.svg`
- `laboratory-placeholder.svg`

## Validation and build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

### Option A: Vercel Dashboard

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output directory: leave default.
6. Add Supabase env vars if form persistence is required.
7. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Business details used

- Practice: Nel Orthodontics
- Orthodontist: Dr Wally Nel
- Address: 93 Pretoria Road, Rynfield, Benoni, South Africa
- Phone: +27 11 425 0773
- Email: benoni@orthodontics.co.za
- Services: braces, early preventative orthodontics, diagnostic orthodontic dental X-rays, first appointments, treatment planning and orthodontic evaluations
