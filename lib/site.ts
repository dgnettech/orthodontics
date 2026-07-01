export const business = {
  name: "Nel Orthodontics",
  doctor: "Dr Wally Nel",
  address: "93 Pretoria Road, Rynfield, Benoni, South Africa",
  addressLines: ["93 Pretoria Road", "Rynfield, Benoni", "South Africa"],
  phone: "+27 11 425 0773",
  phoneHref: `tel:${"+27 11 425 0773".replace(/\s/g, "")}`, 
  email: "benoni@orthodontics.co.za",
  emailHref: "mailto:benoni@orthodontics.co.za",
  hours: [
    { days: "Mon, Tue, Thu", time: "08:00 – 17:00" },
    { days: "Wed, Fri", time: "07:30 – 16:00" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=93%20Pretoria%20Road%2C%20Rynfield%2C%20Benoni%2C%20South%20Africa&output=embed",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "First Appointment", href: "/first-appointment" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "FAQ", href: "/patient-information" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Braces",
    summary:
      "Carefully planned orthodontic treatment for children, teens and adults who want a healthier, more confident smile.",
    detail:
      "From bite alignment to aesthetic improvements, braces help guide teeth into better positions while supporting long-term oral health.",
    audience: "Children, teenagers and adults",
  },
  {
    title: "Early Preventative Orthodontics",
    summary:
      "Gentle evaluations for growing children, helping parents understand whether early guidance is needed.",
    detail:
      "Screening is especially helpful from around age 7 and for children from 7 to 10 when jaw growth and eruption patterns can be assessed.",
    audience: "Parents and younger children",
  },
  {
    title: "Diagnostic Orthodontic X-rays",
    summary:
      "Modern diagnostic records help Dr Nel understand jaw growth, tooth positions and treatment options clearly.",
    detail:
      "Your records may include panoramic and cephalometric X-rays, clinical photographs and impressions or scans where needed.",
    audience: "New patients and treatment planning",
  },
  {
    title: "First Appointments",
    summary:
      "A structured, reassuring first visit that gives families a clear picture of what is happening and what comes next.",
    detail:
      "The team explains findings, timing, possible treatment pathways and the information needed for a quotation.",
    audience: "New families and adult patients",
  },
  {
    title: "Treatment Planning",
    summary:
      "Personalised plans based on diagnosis, patient age, smile goals, bite function and long-term stability.",
    detail:
      "Every case is different, so planning focuses on what is appropriate, realistic and comfortable for the patient.",
    audience: "Patients ready for next steps",
  },
  {
    title: "Orthodontic Evaluations",
    summary:
      "Professional assessments for crowding, spacing, bite concerns, overjet, overbite, crossbite and more.",
    detail:
      "Evaluation helps families avoid guesswork and understand whether treatment is urgent, future-focused or simply worth monitoring.",
    audience: "Anyone unsure about their smile or bite",
  },
];

export const journeySteps = [
  {
    label: "Say hello",
    title: "Book your consultation",
    copy: "Call, email or send an appointment request. The team will help you choose the right appointment type for your needs.",
  },
  {
    label: "Understand",
    title: "Records and orthodontic evaluation",
    copy: "Your first visit may include an examination, X-rays, photographs and impressions so the diagnosis is based on real information.",
  },
  {
    label: "Plan",
    title: "Clear treatment options",
    copy: "Dr Wally Nel explains the findings, possible treatment timing, expected pathway and written cost estimate where appropriate.",
  },
  {
    label: "Transform",
    title: "Confident smile progress",
    copy: "Your care team supports you through each appointment with practical guidance, hygiene support and warm encouragement.",
  },
];

export const trustPoints = [
  "South African Society of Orthodontists member",
  "Experienced orthodontic team in Benoni",
  "Qualified oral hygienists and laboratory support",
  "Patient-focused care for children, teens and adults",
];

export const testimonials = [
  {
    quote:
      "Absolutely the very best experience. From the helpful and friendly receptionists to the orthodontist himself and the whole support team — highly recommended.",
    author: "Leatitia van Straten",
    context: "Patient story",
  },
  {
    quote:
      "Amazing staff and service out of this world. They helped my daughter’s smile and we could not be happier.",
    author: "Thembi Nxele",
    context: "Parent story",
  },
  {
    quote:
      "The team made the process feel calm, organised and personal. Every visit felt like we knew exactly what was happening next.",
    author: "Nel Orthodontics patient",
    context: "Happy smile journey",
  },
];

export const faqs = [
  {
    question: "At what age should my child see an orthodontist?",
    answer:
      "If you notice a concern, it is worth booking an evaluation at any age. Many orthodontic guidelines recommend a first orthodontic check around age 7, when important permanent teeth are erupting and jaw development can be assessed.",
  },
  {
    question: "What happens at the first appointment?",
    answer:
      "The first visit may include a consultation, panoramic X-ray, photographs and other diagnostic records. For children older than 10, a full evaluation and treatment planning process may be discussed. The appointment can take up to 90 minutes.",
  },
  {
    question: "What should I bring to the appointment?",
    answer:
      "Please bring proof of identity for the person responsible for the account and medical aid membership details if you would like them reflected on your statement.",
  },
  {
    question: "Do all young children need braces immediately?",
    answer:
      "No. Many younger children only need monitoring. Early evaluation helps identify whether treatment is needed soon, later during adolescence, or not at all.",
  },
  {
    question: "Can adults have orthodontic treatment?",
    answer:
      "Yes. Healthy teeth can be moved at many ages, and adult orthodontics can improve appearance, confidence, bite function and oral hygiene. Dr Nel will advise on what is suitable for your specific case.",
  },
  {
    question: "Why are diagnostic X-rays important?",
    answer:
      "X-rays and other records help identify tooth positions, jaw relationships and impacted or missing teeth. This makes treatment planning more accurate and transparent.",
  },
];

export const galleryItems = [
  {
    title: "Smile transformation preview",
    image: "/placeholders/smile-after-01-placeholder.svg",
    category: "Before / after placeholder",
  },
  {
    title: "Welcoming orthodontic team",
    image: "/placeholders/team-gallery-placeholder.svg",
    category: "Team photo placeholder",
  },
  {
    title: "Diagnostic imaging",
    image: "/placeholders/diagnostic-xray-placeholder.svg",
    category: "Clinical image placeholder",
  },
  {
    title: "Orthodontic laboratory support",
    image: "/placeholders/laboratory-placeholder.svg",
    category: "Lab image placeholder",
  },
];

export const treatmentConcerns = [
  "Crowding or crooked teeth",
  "Spacing or gaps",
  "Overbite and deepbite",
  "Overjet or protruding front teeth",
  "Crossbite",
  "Openbite",
  "Impacted or missing teeth",
  "Class II and Class III bite concerns",
];
