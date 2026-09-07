/**
 * Central content configuration for M. K. Woollen.
 * Update these values as the company confirms details.
 * Anything wrapped in [SQUARE BRACKETS] is an unconfirmed placeholder.
 */

export const site = {
  name: "M. K. Woollen",
  tagline: "Customized Wool. Carefully Processed. Consistent Yarn.",
  city: "Bikaner",
  state: "Rajasthan",
  country: "India",
  address: "H-33, 34, 49, 50, Karni Agro Industrial Area, Bikaner, Rajasthan, India",
  phones: ["7726823592", "9351338278"],
  whatsapp: "917726823592", // [CONFIRM OFFICIAL WHATSAPP NUMBER]
  email: "mkwoollen@gmail.com",
  businessHours: "[BUSINESS HOURS — TO BE CONFIRMED]",
  linkedin: "", // [ADD URL]
  instagram: "", // [ADD URL IF APPLICABLE]
} as const;

export const whatsappMessage =
  "Hello M. K. Woollen, I am interested in your grey/undyed woollen yarn. I would like to discuss my requirement and request a sample.";

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

export const telHref = `tel:+91${site.phones[0]}`;
export const mailHref = `mailto:${site.email}`;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Quality", to: "/quality" },
  { label: "Applications", to: "/applications" },
  { label: "Contact", to: "/contact" },
] as const;

export const processSteps = [
  {
    title: "Raw Wool Sourcing",
    body: "Wool is sourced primarily from New Zealand and received at our Bikaner facility. [CONFIRM PROCESS]",
  },
  {
    title: "Wool Selection & Preparation",
    body: "Raw wool is selected and prepared for processing. [CONFIRM PROCESS]",
  },
  {
    title: "Scouring / Cleaning",
    body: "Cleaning and preparation of wool ahead of fibre processing. [CONFIRM PROCESS]",
  },
  {
    title: "Carding",
    body: "Fibres are opened and aligned to prepare a uniform web for spinning. [CONFIRM PROCESS]",
  },
  {
    title: "Spinning",
    body: "Prepared wool fibres are converted into woollen yarn. [CONFIRM PROCESS]",
  },
  {
    title: "Winding / Packing",
    body: "Finished yarn is wound and packed according to customer requirements. [CONFIRM PROCESS]",
  },
  {
    title: "Dispatch",
    body: "Packed yarn is dispatched to carpet and textile manufacturers. [CONFIRM PROCESS]",
  },
] as const;

export const products = [
  {
    title: "Carpet Yarn",
    body: "Grey and undyed woollen yarn manufactured for carpet production.",
  },
  {
    title: "Yarn for Hand-Made Carpets",
    body: "Yarn formats suitable for manufacturers producing hand-knotted and hand-tufted carpets, subject to customer requirements.",
  },
  {
    title: "Yarn for Machine-Made Carpets",
    body: "Yarn supplied for machine-made carpet applications and industrial production, subject to required specifications.",
  },
  {
    title: "Custom Requirements",
    body: "For buyers requiring a specific count, ply, twist, blend or packaging, contact our team to discuss feasibility.",
  },
] as const;

export const specTable = [
  [
    "Raw Material",
    "New Zealand, Turkey greasy, Spain greasy, European greasy, Jordan, Jodi, Eader, Spain Matrex, Saudi, Seredian, Egypt greasy, Tunisia, Algeria Backwash, Algeria Tanrey",
  ],
  ["Yarn Type", "Handspun, fine white, and other yarn types"],
  ["Colour", "White, yellow, grey, light grey, black, and natural shades"],
  ["Application", "Carpet & Textile Manufacturing"],
  ["Count Range", "0-90 counts"],
  ["Ply", "2 to 6"],
  ["Form", "Hanks / Cones / [CONFIRM]"],
] as const;

export const stats = [
  { value: "21+", label: "Years of Experience" },
  { value: "5,000 kg/day", label: "Production Capacity" },
  { value: "11", label: "Machines: 2 carding · 1 washing · 2 ring · 6 spinning" },
  { value: "50+", label: "Customers Across India" },
] as const;
