# Nel Orthodontics — Development Roadmap

## Goal
Build Nel Orthodontics into a premium, conversion-focused orthodontic web platform: launch a polished public site first, then add reliable lead capture, operational follow-up, content control, SEO growth, analytics, and optional patient-facing enhancements.

## Non-goals for the current app
- No full clinical record system.
- No medical-aid billing or practice-management replacement.
- No patient portal until the public website and lead workflow are stable.
- No admin panel unless the practice needs staff-managed content or lead handling beyond Supabase tables.

## Current baseline already completed
- Next.js App Router project with TypeScript and Tailwind CSS.
- Premium responsive public website with all required pages.
- Framer Motion interactions, FAQ accordion, smile journey stepper, treatment cards, before/after slider, sticky/floating CTAs.
- Contact and appointment forms with React Hook Form + Zod validation.
- Supabase-ready `appointment_requests` and `contact_messages` schema.
- README, environment setup, placeholder images and Vercel deployment instructions.
- GitHub pushed to `https://github.com/dgnettech/orthodontics.git` on `main`.

---

## Phase 1 — Launch readiness and live deployment

**Objective:** Make the current premium site live, stable, and easy to hand over.

### Tasks
1. Connect the GitHub repo to Vercel.
2. Add production environment variables if Supabase form storage is required:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Run `supabase/schema.sql` in the live Supabase project.
4. Confirm Vercel build uses the repo root and `npm run build`.
5. Smoke-test live routes:
   - `/`
   - `/about`
   - `/treatments`
   - `/first-appointment`
   - `/smile-gallery`
   - `/patient-information`
   - `/contact`
   - `/book-appointment`
6. Submit test contact and appointment requests and verify rows appear in Supabase.
7. Replace the temporary Vercel URL in metadata with the final domain.

### Acceptance criteria
- Public site loads on the Vercel production URL.
- All pages return HTTP 200.
- Forms validate correctly and store submissions in Supabase, or show a clear fallback if Supabase is not configured.
- No lint, typecheck, build, or audit failures.

### Test commands
```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev --audit-level=moderate
```

---

## Phase 2 — Brand, imagery and content polish

**Objective:** Replace placeholders and make the site feel fully practice-owned.

### Tasks
1. Replace placeholder SVGs in `public/placeholders/` with approved images:
   - Dr Wally Nel portrait
   - Practice/team photo
   - Reception or consultation imagery
   - Diagnostic imaging/lab imagery
   - Approved before/after smile photos with written consent
2. Add final brand assets:
   - Logo
   - Favicon
   - Open Graph image
3. Polish copy with the practice’s preferred wording and compliance tone.
4. Confirm phone number, hours and address are final.
5. Add privacy/consent wording near forms if required.
6. Improve gallery categories once real media is available.

### Acceptance criteria
- No visible placeholder wording remains on the production site unless intentionally retained.
- Every image has accessible alt text.
- Practice owner approves copy, contact details and visual tone.

### Primary files
- `public/placeholders/*`
- `app/layout.tsx`
- `lib/site.ts`
- Page files under `app/*/page.tsx`

---

## Phase 3 — Reliable lead capture workflow

**Objective:** Turn website enquiries into a practical office workflow.

### Tasks
1. Add email notifications for new appointment/contact submissions.
2. Add optional CAPTCHA or honeypot spam protection.
3. Add submission source tracking:
   - page path
   - UTM parameters
   - device type if useful
4. Add status handling in Supabase:
   - `new`
   - `contacted`
   - `booked`
   - `closed`
5. Add a simple staff-only lead dashboard if needed.
6. Export submissions to CSV for admin review.

### Acceptance criteria
- Practice receives a notification after a valid form submission.
- Spam is reduced without hurting genuine patients.
- Staff can see and manage leads without opening raw database tables, if admin dashboard is approved.

### Potential files
- `app/api/contact/route.ts`
- `app/api/appointment/route.ts`
- `supabase/schema.sql`
- Future: `app/admin/*`

---

## Phase 4 — SEO, local search and conversion optimisation

**Objective:** Help parents and adult patients find and trust Nel Orthodontics online.

### Tasks
1. Add final production domain to metadata, sitemap and robots.
2. Add LocalBusiness/Dentist structured data with final business details.
3. Add page-specific SEO titles/descriptions for all pages.
4. Add content sections targeting high-intent searches:
   - Orthodontist in Benoni
   - Braces in Benoni
   - Children’s orthodontist Benoni
   - Adult braces Benoni
   - First orthodontic consultation
5. Add Google Search Console and Bing Webmaster verification.
6. Add privacy-friendly analytics, for example Vercel Analytics or Plausible.
7. Track conversion events:
   - Book Appointment clicks
   - Phone clicks
   - Email clicks
   - Form submissions

### Acceptance criteria
- Sitemap is indexed.
- Structured data validates.
- Analytics show traffic and conversion events.
- Main CTAs are measurable.

### Primary files
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- Page metadata in `app/*/page.tsx`

---

## Phase 5 — Admin-ready content management

**Objective:** Let the practice update selected content without developer changes, only if they need it.

### Tasks
1. Decide CMS approach:
   - Lightweight Supabase admin tables, or
   - Headless CMS such as Sanity/Contentful, or
   - Keep Git-based content edits if updates are rare.
2. If Supabase admin is selected, add tables for:
   - testimonials
   - gallery items
   - FAQs
   - practice hours
   - service cards
3. Add staff authentication with role-based access.
4. Build compact admin screens for editing content.
5. Add preview states and validation before publishing.

### Acceptance criteria
- Staff can safely edit approved content areas.
- Public pages still build/render quickly.
- Admin changes cannot break layout with overly long or invalid fields.

### Potential files
- `app/admin/*`
- `lib/supabase.ts`
- `supabase/schema.sql`
- `components/admin/*`

---

## Phase 6 — Patient education and trust-building content

**Objective:** Increase confidence before patients book.

### Tasks
1. Add educational article pages:
   - When should my child see an orthodontist?
   - Braces for teenagers
   - Adult orthodontics
   - What happens at a first orthodontic appointment?
   - Braces care and cleaning tips
2. Add downloadable first-visit checklist PDF.
3. Add treatment explainer cards with simple diagrams.
4. Add finance/payment explanation page if the practice wants it.
5. Add schema markup for FAQ and article pages.

### Acceptance criteria
- Content answers common questions in warm, plain language.
- Pages internally link to booking CTAs.
- Articles are SEO-friendly and medically conservative.

### Potential routes
- `/patient-information/*`
- `/treatments/braces`
- `/treatments/early-orthodontics`

---

## Phase 7 — Advanced conversion features

**Objective:** Make it easier for visitors to take the next step.

### Tasks
1. Add multi-step appointment booking wizard.
2. Add patient type routing:
   - Parent booking for child
   - Teen braces enquiry
   - Adult consultation
   - Existing patient callback
3. Add calendar preference windows instead of one preferred date.
4. Add WhatsApp click-to-chat if approved by the practice.
5. Add post-submit confirmation page with what to expect next.
6. Add reminder/email automation if the practice wants follow-up workflows.

### Acceptance criteria
- Booking flow is faster and clearer than a long form.
- Staff receives structured information that is useful for scheduling.
- Conversion events are tracked.

### Potential files
- `app/book-appointment/page.tsx`
- `components/forms/appointment-form.tsx`
- `app/api/appointment/route.ts`

---

## Phase 8 — Performance, accessibility and compliance hardening

**Objective:** Keep the website fast, inclusive and safe as features grow.

### Tasks
1. Run Lighthouse checks for mobile and desktop.
2. Add Playwright smoke tests for main routes and forms.
3. Add accessibility checks for keyboard navigation, focus states and contrast.
4. Optimise real images with Next Image dimensions and compression.
5. Add security headers in `next.config.ts` if needed.
6. Review POPIA/privacy implications for form storage and consent wording.

### Acceptance criteria
- Lighthouse performance and accessibility scores remain strong.
- Main route smoke tests run before deploys.
- No sensitive keys are exposed client-side.
- Forms clearly explain what happens after submission.

### Test commands
```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev --audit-level=moderate
# Future after Playwright is added:
npm run test:e2e
```

---

## Phase 9 — Optional patient portal or operational extensions

**Objective:** Only build deeper app features if the practice wants an operational product, not just a premium website.

### Possible features
1. Secure patient portal for submitted requests and onboarding forms.
2. Document upload before appointment.
3. Treatment progress education emails.
4. Appointment reminder integrations.
5. Internal staff notes and follow-up tasks.
6. Integration with calendar or practice-management software.

### Decision gate
Do not start this phase until:
- The public site is live and stable.
- The practice confirms operational pain points.
- Privacy/security requirements are clear.
- Staff workflow is mapped.

---

## Recommended immediate next steps
1. Deploy GitHub repo to Vercel.
2. Decide whether Supabase should be connected now or after launch.
3. Replace placeholders with approved practice imagery.
4. Add production domain and final SEO metadata.
5. Run live smoke tests and form submission verification.

## Risks
- Real patient before/after images require explicit consent and careful privacy handling.
- Supabase service-role key must stay server-only.
- Adding an admin panel too early may slow launch; keep it optional until content updates become frequent.
- Contact details, hours and domain metadata must be final before production SEO work.

## Rollback notes
- Public website changes can be rolled back by reverting the Git commit and redeploying Vercel.
- Supabase schema changes should be additive where possible.
- Keep placeholder assets until replacement imagery is approved.

## Overall success definition
Nel Orthodontics has a fast, premium, trustworthy public website that converts visitors into appointment requests, gives the practice a reliable follow-up workflow, and can grow into content management or patient-facing features only when the business need is proven.
