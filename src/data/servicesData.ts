export interface ServiceItem {
  id: string;
  name: string;
  category: "hair" | "makeup" | "henna" | "brows-hair-removal" | "aesthetics-prp";
  tag: string;
  shortDesc: string;
  fullDesc: string;
  duration?: string;
  startingPrice?: string;
  highlights: string[];
}

export const SALON_SERVICES: ServiceItem[] = [
  // Hair Services
  {
    id: "hair-cut-styling",
    category: "hair",
    name: "Couture Haircuts & Blow-Dry",
    tag: "Signature Hair",
    shortDesc: "Tailored hair cutting and blowout services designed to complement your face shape and personal style.",
    fullDesc: "From revitalizing trims to transformative restyling, our master stylists craft haircuts that elevate your natural texture and volume. Includes deep scalp wash and salon blowout.",
    duration: "45 - 60 mins",
    startingPrice: "From £35",
    highlights: ["Personal face-shape styling", "Bespoke volumizing blowout", "Premium conditioning seal"],
  },
  {
    id: "hair-color-balayage",
    category: "hair",
    name: "Luxury Color, Highlights & Balayage",
    tag: "Hair Color",
    shortDesc: "Rich multidimensional colors, subtle sun-kissed balayage, and expert root-melt highlights.",
    fullDesc: "Achieve radiant, healthy shine with our professional color treatments using hair-nourishing formulas that minimize damage while maximizing vibrancy and depth.",
    duration: "90 - 150 mins",
    startingPrice: "From £75",
    highlights: ["Custom shade formulation", "Seamless hand-painted balayage", "Gloss toner & bond repair"],
  },
  {
    id: "hair-rejuvenation-spa",
    category: "hair",
    name: "Hair Spa & Deep Rejuvenation Treatment",
    tag: "Restoration",
    shortDesc: "Intense moisture therapies, keratin nourishment, and scalp detox for dry, heat-treated hair.",
    fullDesc: "Revive dull, compromised hair fibers with our salon restorative therapy that leaves tresses silky, smooth, and full of natural bounce.",
    duration: "45 mins",
    startingPrice: "From £40",
    highlights: ["Scalp stimulation massage", "Hydrating peptide mask", "Thermal infusion therapy"],
  },

  // Makeup & Bridal
  {
    id: "bridal-makeup",
    category: "makeup",
    name: "Signature Bridal Make-Up & Hair",
    tag: "Bridal Specialist",
    shortDesc: "Flawless, photo-ready bridal makeup and exquisite bridal hair styling for your special day.",
    fullDesc: "Your wedding day demands uncompromised perfection. Our bridal package includes bespoke consultation, HD airbrush or luxury skin-focused makeup, long-wearing setting, and majestic hair styling with dupatta/veil and jewelry placement.",
    duration: "2.5 - 3 hours",
    startingPrice: "Bespoke Packages",
    highlights: ["Pre-bridal trial available", "Tear-proof HD coverage", "Bridal hair & accessory setting"],
  },
  {
    id: "occasion-party-makeup",
    category: "makeup",
    name: "Party & Occasion Glamour Make-Up",
    tag: "Event Make-Up",
    shortDesc: "Stunning evening, prom, engagement, or red-carpet look tailored to your outfit and event.",
    fullDesc: "Whether you desire soft romantic glam or striking bold eyes, our professional artists create a luminous, long-lasting look that radiates confidence.",
    duration: "60 mins",
    startingPrice: "From £55",
    highlights: ["Lash application included", "Custom eye & lip styling", "12-hour camera ready wear"],
  },

  // Henna Artistry
  {
    id: "bridal-henna",
    category: "henna",
    name: "Intricate Bridal Henna (Mehndi)",
    tag: "Henna Artistry",
    shortDesc: "Exquisite traditional, contemporary, or Arabic henna artistry with rich, dark staining organic cones.",
    fullDesc: "Our master henna artist designs symmetrical, storytelling bridal mehndi incorporating personalized motifs, intricate floral mandalas, and fine lacework across hands, arms, and feet.",
    duration: "3 - 5 hours",
    startingPrice: "From £90",
    highlights: ["100% natural organic henna", "Deep dark stain guarantee", "Custom bridal motifs"],
  },
  {
    id: "guest-festive-henna",
    category: "henna",
    name: "Festive & Guest Occasion Henna",
    tag: "Henna Art",
    shortDesc: "Delicate palms, cuffs, and modern minimal henna designs for Eid, Diwali, sangeet, and parties.",
    fullDesc: "Quick-drying, elegant henna designs crafted with precision for family members, bridesmaids, or festive celebrations.",
    duration: "15 - 30 mins / hand",
    startingPrice: "From £15 / side",
    highlights: ["Fast-application options", "Fresh floral and geometric designs", "Skin-safe natural ingredients"],
  },

  // Eyebrows & Hair Removal
  {
    id: "eyebrow-threading-shaping",
    category: "brows-hair-removal",
    name: "Precision Eyebrow Threading & Shaping",
    tag: "Brows",
    shortDesc: "Crisp arch definition and facial threading by skilled practitioners for clean, tailored brows.",
    fullDesc: "Experience virtually painless, immaculate threading that frames your facial structure with crisp symmetry and gentle care.",
    duration: "15 mins",
    startingPrice: "From £8",
    highlights: ["Facial mapping consultation", "Clean precision lines", "Soothing post-thread aloe"],
  },
  {
    id: "eyebrow-tint-lamination",
    category: "brows-hair-removal",
    name: "Eyebrow Tinting & Brow Lamination",
    tag: "Brow Styling",
    shortDesc: "Fuller, fluffier, and perfectly groomed brows that last up to 6 weeks.",
    fullDesc: "Enhance sparse hairs and correct asymmetrical growth with our semi-permanent lamination and custom brow tinting treatment.",
    duration: "45 mins",
    startingPrice: "From £35",
    highlights: ["Fluffy feather effect", "Custom pigment matching", "Nourishing keratin infusion"],
  },
  {
    id: "smooth-waxing-hair-removal",
    category: "brows-hair-removal",
    name: "Gentle Body & Facial Hair Removal (Waxing)",
    tag: "Silky Skin",
    shortDesc: "Ultra-hygienic hot and warm waxing for silky, hair-free skin with reduced regrowth.",
    fullDesc: "Full body, bikini, underarm, and facial waxing using premium hypoallergenic waxes that protect sensitive skin while delivering long-lasting smoothness.",
    duration: "20 - 60 mins",
    startingPrice: "From £12",
    highlights: ["Hypoallergenic peel wax", "Minimal discomfort technique", "Ingrown prevention treatment"],
  },

  // Aesthetics & PRP Treatments
  {
    id: "prp-hair-restoration",
    category: "aesthetics-prp",
    name: "PRP Hair Regrowth & Scalp Therapy",
    tag: "Advanced PRP",
    shortDesc: "Platelet-Rich Plasma therapy to naturally stimulate dormant follicles and thicken thinning hair.",
    fullDesc: "Utilizing your body’s own concentrated growth factors, PRP injections into the scalp boost microcirculation, reverse follicle miniaturization, and promote robust hair regeneration.",
    duration: "60 mins",
    startingPrice: "Consultation Required",
    highlights: ["100% autologous & safe", "Natural follicle stimulation", "Minimal downtime, maximum efficacy"],
  },
  {
    id: "prp-vampire-facial",
    category: "aesthetics-prp",
    name: "PRP Skin Rejuvenation (Vampire Facial)",
    tag: "Youthful Glow",
    shortDesc: "Collagen-stimulating platelet therapy combined with microneedling to erase fine lines and scars.",
    fullDesc: "A gold-standard aesthetic treatment that dramatically improves skin elasticity, texture, hyperpigmentation, and youthful radiance by infusing growth factors deep into dermis layers.",
    duration: "60 - 75 mins",
    startingPrice: "Consultation Required",
    highlights: ["Dramatically boosts collagen", "Smooths acne scars & fine lines", "Medical-grade sterile environment"],
  },
  {
    id: "advanced-aesthetic-facial",
    category: "aesthetics-prp",
    name: "Skin Rejuvenation & Advanced Aesthetics",
    tag: "Aesthetics",
    shortDesc: "Custom clinical skin peeling, high-frequency revitalization, and intense hydration facials.",
    fullDesc: "Tailored to your specific skin challenges — from dullness and hyperpigmentation to loss of firmness. We create a personalized regime that restores your luminous, radiant barrier.",
    duration: "60 mins",
    startingPrice: "From £65",
    highlights: ["Personalized skin assessment", "Medical-grade active serums", "Instant luminous clarity"],
  },
];
