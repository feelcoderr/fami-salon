// ============================================================
// FAMI HAIR & BEAUTY SALON — Complete Services Data
// All pricing, durations, and category metadata in one place
// ============================================================

export interface ServiceItem {
  name: string;
  duration?: string;
  price: string;
  note?: string;
}

export interface ServiceTable {
  title: string;
  items: ServiceItem[];
  note?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon: string; // Lucide icon name
  image: string;
  tables: ServiceTable[];
}

export const serviceCategories: ServiceCategory[] = [
  // ─────────────────────────────────────────────────────
  // 1. HAIR SERVICES
  // ─────────────────────────────────────────────────────
  {
    slug: "hair",
    title: "Hair Services",
    shortTitle: "Hair",
    description:
      "Expert cuts, colour, highlights, balayage, bridal hairstyling, and luxury hair treatments for all hair types.",
    metaDescription:
      "Professional hair services at Fami Salon: precision cuts, full head colour, highlights, balayage, ombre, bridal hairstyles, blow dry, and deep conditioning treatments.",
    icon: "Scissors",
    image: "/images/services/service-hair.jpg",
    tables: [
      {
        title: "Hair Services",
        items: [
          {
            name: "Cap Full Head",
            duration: "1 hr 30 min",
            price: "£75.00 onwards",
          },
          {
            name: "Root Colour (Unisex – Salon Colour)",
            duration: "1 hr 30 min",
            price: "£35.00 onwards",
          },
          {
            name: "Root Colour (Customer Colour – Unisex)",
            duration: "1 hr 30 min",
            price: "£25.00 onwards",
          },
          {
            name: "Full Head Colour (Short Hair – Unisex)",
            duration: "1 hr 45 min",
            price: "£55.00 onwards",
          },
          {
            name: "Full Head Colour (Long Hair)",
            duration: "2 hrs",
            price: "£75.00 onwards",
          },
          {
            name: "Half Head Highlights",
            duration: "2 hrs",
            price: "£120.00 onwards",
          },
          {
            name: "Full Head Highlights (Short Hair)",
            duration: "3 hrs",
            price: "£100.00 onwards",
          },
          {
            name: "Full Head Highlights (Long Hair)",
            duration: "5 hrs",
            price: "£120.00 onwards",
          },
          {
            name: "Balayage",
            duration: "1 hr 30 min",
            price: "£100.00 onwards",
          },
          { name: "Ombre", duration: "1 hr 30 min", price: "£100.00 onwards" },
          {
            name: "Wash, Cut, Blow Dry (Short Hair)",
            duration: "1 hr 35 min",
            price: "£40.00 onwards",
          },
          {
            name: "Wash, Cut, Blow Dry (Long Hair)",
            duration: "1 hr 45 min",
            price: "£45.00 onwards",
          },
          { name: "Wash and Cut", duration: "30 min", price: "£30.00 onwards" },
          { name: "Dry Straight Trim", duration: "20 min", price: "£25.00" },
          { name: "Dry Style Trim", duration: "30 min", price: "£30.00" },
          { name: "Wash and Blow Dry", duration: "45 min", price: "£45.00" },
          { name: "Blow Dry", duration: "45 min", price: "£35.00 onwards" },
          {
            name: "Hairstyle",
            duration: "1 hr 30 min",
            price: "£50.00 onwards",
          },
          {
            name: "Bridal Hairstyle",
            duration: "1 hr 45 min",
            price: "£120.00 onwards",
          },
          {
            name: "Hair Treatment (Unisex)",
            duration: "30 min",
            price: "£45.00",
          },
          {
            name: "Hair Treatment (Unisex) – 5 Sessions",
            duration: "30 min each",
            price: "£200.00",
          },
          { name: "Child Cut", duration: "—", price: "£25.00 onwards" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 2. FACIALS & SKIN CARE
  // ─────────────────────────────────────────────────────
  {
    slug: "facials",
    title: "Facials & Skin Care",
    shortTitle: "Facials",
    description:
      "Deep cleansing facials, gold facials, diamond facials, carbon facials, dermaplane, bleach, and full body polishing.",
    metaDescription:
      "Professional facial treatments at Fami Salon: deep cleansing, gold, herbal, acne, lifting, skin whitening, diamond, carbon, dermaplaning, bleach, and body polishing.",
    icon: "Sparkles",
    image: "/images/services/service-facials.jpg",
    tables: [
      {
        title: "Facials",
        items: [
          {
            name: "Deep Cleansing Mini Facial (Unisex)",
            duration: "30 min",
            price: "£35.00",
          },
          {
            name: "Deep Cleansing (Unisex)",
            duration: "45 min",
            price: "£45.00",
          },
          {
            name: "Exfoliating Facial (Unisex)",
            duration: "45 min",
            price: "£45.00",
          },
          { name: "Gold Facial (Unisex)", duration: "30 min", price: "£45.00" },
          {
            name: "Herbal Facial (Unisex)",
            duration: "30 min",
            price: "£45.00",
          },
          {
            name: "Aromatherapy Facial (Unisex)",
            duration: "30 min",
            price: "£45.00",
          },
          {
            name: "Eye Treatment Facial (Unisex)",
            duration: "30 min",
            price: "£35.00",
          },
          { name: "Acne Facial (Unisex)", duration: "1 hr", price: "£55.00" },
          {
            name: "Lifting Facial (Unisex)",
            duration: "1 hr",
            price: "£55.00",
          },
          {
            name: "Skin Whitening Facial (Unisex)",
            duration: "45 min",
            price: "£55.00",
          },
          {
            name: "Diamond Facial (Unisex)",
            duration: "45 min",
            price: "£55.00",
          },
          {
            name: "Microdermabrasion Facial (Unisex)",
            duration: "1 hr",
            price: "£60.00",
          },
          { name: "Acid Peeling (Unisex)", duration: "1 hr", price: "£80.00" },
          { name: "Derma Roller (Unisex)", duration: "1 hr", price: "£75.00" },
          {
            name: "BB Glow Facial (Unisex)",
            duration: "1 hr",
            price: "£75.00",
          },
          {
            name: "Carbon Facial (Unisex)",
            duration: "1 hr",
            price: "£120.00",
          },
          { name: "Dermaplaning (Unisex)", duration: "1 hr", price: "£65.00" },
        ],
      },
      {
        title: "Bleach",
        items: [
          { name: "Upper Lip and Chin", duration: "15 min", price: "£10.00" },
          { name: "Stomach", duration: "15 min", price: "£15.00" },
          {
            name: "Full Face and Neck (Unisex)",
            duration: "30 min",
            price: "£15.00",
          },
          {
            name: "Full Body (Women Only)",
            duration: "30 min",
            price: "£40.00",
          },
          { name: "Full Arms (Unisex)", duration: "20 min", price: "£12.00" },
          {
            name: "Back and Front (Unisex)",
            duration: "30 min",
            price: "£20.00",
          },
        ],
      },
      {
        title: "Face & Body Polishing",
        items: [
          { name: "Back Polish (Unisex)", duration: "30 min", price: "£30.00" },
          {
            name: "Full Arms Polish (Unisex)",
            duration: "30 min",
            price: "£25.00",
          },
          { name: "Face Polish (Unisex)", duration: "20 min", price: "£20.00" },
          {
            name: "Full Face Polish and Facial (Unisex)",
            duration: "1 hr 15 min",
            price: "£55.00",
          },
          {
            name: "Full Body Polish (Women Only)",
            duration: "1 hr",
            price: "£100.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 3. NAILS
  // ─────────────────────────────────────────────────────
  {
    slug: "nails",
    title: "Nails",
    shortTitle: "Nails",
    description:
      "Manicure, pedicure, shellac, acrylic extensions, gel nails, dipping powder, and spa treatments for hands and feet.",
    metaDescription:
      "Nail services at Fami Salon: manicure, pedicure, spa pedicure with paraffin wax, shellac, acrylic extensions, gel extensions, dipping powder, and nail polish.",
    icon: "Hand",
    image: "/images/services/service-nails.jpg",
    tables: [
      {
        title: "Nail Services",
        items: [
          { name: "Manicure (Women)", duration: "45 min", price: "£22.00" },
          { name: "Pedicure (Women)", duration: "45 min", price: "£25.00" },
          {
            name: "Spa Pedicure with Paraffin Wax (Women)",
            duration: "1 hr",
            price: "£30.00",
          },
          {
            name: "Nail Polish for Hands",
            duration: "20 min",
            price: "£10.00",
          },
          { name: "Nail Polish for Feet", duration: "20 min", price: "£12.00" },
          {
            name: "Nail Polish for Hands and Feet",
            duration: "40 min",
            price: "£15.00",
          },
          { name: "Shellac Hands", duration: "30 min", price: "£20.00" },
          { name: "Shellac Feet", duration: "30 min", price: "£20.00" },
          {
            name: "Shellac Hand and Feet",
            duration: "1 hr 30 min",
            price: "£40.00",
          },
          {
            name: "Acrylic Nail Extension",
            duration: "1 hr 30 min",
            price: "£45.00 onwards",
          },
          {
            name: "Gel Nail Extension",
            duration: "1 hr 30 min",
            price: "£30.00 onwards",
          },
          {
            name: "Acrylic Nail Extension with Shellac",
            duration: "2 hrs",
            price: "£55.00 onwards",
          },
          {
            name: "Gel Nail Extension with Shellac",
            duration: "2 hrs",
            price: "£40.00 onwards",
          },
          {
            name: "Dipping Powder",
            duration: "2 hrs",
            price: "£45.00 onwards",
          },
          {
            name: "Shellac Removal for Hands",
            duration: "20 min",
            price: "£15.00",
          },
          {
            name: "Shellac Removal for Feet",
            duration: "20 min",
            price: "£15.00",
          },
          {
            name: "Shellac Removal for Hands and Feet",
            duration: "35 min",
            price: "£25.00",
          },
        ],
      },
      {
        title: "Nail Packages",
        items: [
          {
            name: "Shellac Hand and Feet – 4 Sessions",
            duration: "1 hr 30 min each",
            price: "£120.00",
          },
          {
            name: "Spa Pedicure with Paraffin Wax – 5 Sessions",
            duration: "1 hr each",
            price: "£125.00",
          },
          {
            name: "Pedicure – 5 Sessions",
            duration: "45 min each",
            price: "£100.00",
          },
          {
            name: "Manicure – 3 Sessions",
            duration: "45 min each",
            price: "£50.00",
          },
        ],
      },
      {
        title: "Men's Nail Services",
        items: [
          { name: "Pedicure for Men", duration: "45 min", price: "£30.00" },
          { name: "Manicure for Men", duration: "45 min", price: "£25.00" },
          {
            name: "Spa Pedicure with Paraffin Wax for Men",
            duration: "45 min",
            price: "£35.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 4. THREADING & WAXING
  // ─────────────────────────────────────────────────────
  {
    slug: "threading-waxing",
    title: "Threading & Waxing",
    shortTitle: "Threading & Waxing",
    description:
      "Precision eyebrow threading, full face threading, and professional waxing for face and body.",
    metaDescription:
      "Threading and waxing services at Fami Salon: eyebrow threading, full face threading, body waxing, bikini waxing, Hollywood waxing, and Brazilian waxing.",
    icon: "Flame",
    image: "/images/services/service-waxing.jpg",
    tables: [
      {
        title: "Threading",
        items: [
          { name: "Eyebrows", duration: "15 min", price: "£5.00" },
          { name: "Eyebrows for Men", duration: "—", price: "£6.00" },
          { name: "Upper Lips", duration: "5 min", price: "£4.00" },
          { name: "Forehead (Unisex)", duration: "10 min", price: "£4.00" },
          { name: "Chin (Unisex)", duration: "10 min", price: "£4.00" },
          { name: "Sides (Unisex)", duration: "15 min", price: "£8.00" },
          { name: "Neck (Unisex)", duration: "15 min", price: "£7.00" },
          {
            name: "Full Face (Eyebrows Excluded)",
            duration: "25 min",
            price: "£20.00",
          },
          {
            name: "Full Face (Eyebrows Included)",
            duration: "30 min",
            price: "£25.00",
          },
        ],
      },
      {
        title: "Waxing",
        items: [
          { name: "Eyebrows", duration: "15 min", price: "£6.00" },
          { name: "Eyebrows for Men", duration: "—", price: "£7.00" },
          { name: "Upper Lips", duration: "10 min", price: "£5.00" },
          { name: "Chin", duration: "10 min", price: "£5.00" },
          { name: "Neck", duration: "15 min", price: "£5.00" },
          { name: "Sideburns", duration: "15 min", price: "£8.00" },
          {
            name: "Full Face (Eyebrows Excluded)",
            duration: "20 min",
            price: "£20.00",
          },
          {
            name: "Full Face (Eyebrows Included)",
            duration: "30 min",
            price: "£25.00",
          },
          {
            name: "Bikini Line (Women Only)",
            duration: "15 min",
            price: "£10.00",
          },
          {
            name: "Underarms (Women Only)",
            duration: "15 min",
            price: "£10.00",
          },
          { name: "Stomach (Women Only)", duration: "15 min", price: "£15.00" },
          { name: "Back (Unisex)", duration: "20 min", price: "£20.00" },
          {
            name: "Front (Face Not Included) (Unisex)",
            duration: "20 min",
            price: "£20.00",
          },
          { name: "Half Arms (Unisex)", duration: "15 min", price: "£15.00" },
          { name: "Full Arms (Unisex)", duration: "25 min", price: "£20.00" },
          {
            name: "Half Legs (Women Only)",
            duration: "20 min",
            price: "£20.00",
          },
          {
            name: "Full Legs (Women Only)",
            duration: "30 min",
            price: "£30.00",
          },
          {
            name: "Full Body (Legs, Arms, Underarms, Bikini)",
            duration: "—",
            price: "£55.00",
          },
          {
            name: "Full Body (Arms, Underarms, Front, Back, Legs)",
            duration: "—",
            price: "£70.00",
          },
          {
            name: "Full Body (Arms, Underarms, Front, Back, Legs, Hollywood, Buttock)",
            duration: "—",
            price: "£140.00",
          },
          {
            name: "Hollywood Waxing (Women)",
            duration: "Up to 40 min",
            price: "£45.00",
          },
          {
            name: "Brazilian Waxing (Women)",
            duration: "Up to 45 min",
            price: "£35.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 5. EYELASH EXTENSIONS & BROWS
  // ─────────────────────────────────────────────────────
  {
    slug: "eyelash-extensions",
    title: "Eyelash Extensions & Brows",
    shortTitle: "Lashes & Brows",
    description:
      "Individual, hybrid, and 3D volume lash extensions, lash and brow tinting, brow lamination, and piercing.",
    metaDescription:
      "Eyelash extensions at Fami Salon: individual, hybrid, 3D volume lash sets, lash tinting, brow tinting, brow lamination, henna brows, and ear/nose piercing.",
    icon: "Eye",
    image: "/images/services/service-lashes.jpg",
    tables: [
      {
        title: "Eyelash Extensions",
        items: [
          {
            name: "Individual Eyelash Extension – Full Set",
            duration: "2 hrs 30 min",
            price: "£45.00",
          },
          {
            name: "Hybrid Eyelash Extension",
            duration: "2 hrs 30 min",
            price: "£55.00",
          },
          {
            name: "3D Volume Eyelash Extension",
            duration: "3 hrs 30 min",
            price: "£70.00",
          },
          {
            name: "Eyelash Extensions – Removal",
            duration: "30 min",
            price: "£20.00",
          },
          { name: "Refill", duration: "1 hr 30 min", price: "£25.00 onwards" },
        ],
      },
      {
        title: "Eyelash & Eyebrow Tint",
        items: [
          { name: "Eyebrow Tint", duration: "20 min", price: "£7.00" },
          { name: "Eyelash Tint", duration: "20 min", price: "£7.00" },
          { name: "Lash and Brow Tint", duration: "30 min", price: "£12.00" },
          { name: "Brow Lamination", duration: "35 min", price: "£30.00" },
          { name: "Henna Brows", duration: "20 min", price: "£15.00" },
        ],
      },
      {
        title: "Piercing",
        items: [
          { name: "Ear Piercing", duration: "—", price: "£20.00" },
          { name: "Nose Piercing", duration: "—", price: "£15.00" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 6. MASSAGES & MAKE-UP
  // ─────────────────────────────────────────────────────
  {
    slug: "massages-makeup",
    title: "Massages & Make-Up",
    shortTitle: "Massage & Makeup",
    description:
      "Full body massage, hot stone, aromatherapy, deep tissue, Indian head massage, and professional bridal and party make-up.",
    metaDescription:
      "Massage and make-up services at Fami Salon: full body, hot stone, aromatherapy, bamboo, cupping, lymphatic drainage, deep tissue massage, party and bridal makeup.",
    icon: "Heart",
    image: "/images/services/service-massages.jpg",
    tables: [
      {
        title: "Massages",
        items: [
          {
            name: "Full Body Massage (Head Excluded, Women)",
            duration: "1 hr",
            price: "£55.00",
          },
          {
            name: "Full Body Massage (Head Included, Women)",
            duration: "75 min",
            price: "£65.00",
          },
          {
            name: "Face and Neck (Women)",
            duration: "25 min",
            price: "£25.00",
          },
          { name: "Foot Massage (Women)", duration: "20 min", price: "£20.00" },
          {
            name: "Back and Neck (Women)",
            duration: "30 min",
            price: "£30.00",
          },
          {
            name: "Indian Head Massage (Women)",
            duration: "30 min",
            price: "£35.00",
          },
          {
            name: "Aromatherapy Massage (Women)",
            duration: "1 hr",
            price: "£65.00",
          },
          {
            name: "Hot Stone Massage (Women)",
            duration: "1 hr",
            price: "£65.00",
          },
          {
            name: "Warm Bamboo Massage (Women)",
            duration: "1 hr",
            price: "£70.00",
          },
          { name: "Dry Cupping (Women)", duration: "1 hr", price: "£45.00" },
          {
            name: "Lymphatic Drainage Body (Women)",
            duration: "1 hr",
            price: "£65.00",
          },
          { name: "Deep Tissue Massage", duration: "—", price: "£65.00" },
        ],
      },
      {
        title: "Make-Up",
        items: [
          {
            name: "Party Makeup (Eyelashes £10 Extra)",
            duration: "2 hrs",
            price: "£80.00 onwards",
          },
          {
            name: "Party Makeup with Hairstyle (Eyelashes £10 Extra)",
            duration: "3 hrs",
            price: "£150.00 onwards",
          },
          {
            name: "Evening Party Makeup (Eyelashes £10 Extra)",
            duration: "2 hrs",
            price: "£90.00 onwards",
          },
          {
            name: "Bridal Makeup Only (Eyelashes £10 Extra)",
            duration: "3 hrs",
            price: "£250.00 onwards",
          },
        ],
        note: "Make-up prices are subject to change after final consultation with the makeup artist. Terms and conditions apply.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 7. HENNA ARTISTRY (MEHNDI)
  // ─────────────────────────────────────────────────────
  {
    slug: "henna",
    title: "Henna Artistry (Mehndi)",
    shortTitle: "Henna Artistry",
    description:
      "Expert 100% organic natural henna designs, bespoke bridal mehndi, festive party henna, and Arabic & Indian motifs.",
    metaDescription:
      "Henna and bridal mehndi artistry at Fami Salon: intricate bridal henna packages, party mehndi, Arabic and traditional motifs using 100% organic natural henna.",
    icon: "Flower2",
    image: "/images/services/henna.jpg",
    tables: [
      {
        title: "Bridal Henna Packages",
        items: [
          {
            name: "Signature Bridal Henna (Both Hands to Elbows & Feet)",
            duration: "4 - 5 hrs",
            price: "£180.00 onwards",
          },
          {
            name: "Deluxe Full Bridal Mehndi (Hands, Arms to Elbows & Full Feet/Ankles)",
            duration: "5 - 6 hrs",
            price: "£250.00 onwards",
          },
          {
            name: "Minimalist Bridal Mehndi (Hands to Wrists & Feet Bands)",
            duration: "2.5 - 3 hrs",
            price: "£120.00 onwards",
          },
          {
            name: "Bridal Henna Consultation & Trial Pattern",
            duration: "45 min",
            price: "£35.00",
          },
        ],
        note: "Bridal appointments include fresh organic natural henna cones with aftercare lemon-sugar sealant and post-treatment stain guide.",
      },
      {
        title: "Occasional, Party & Guest Henna",
        items: [
          {
            name: "Single Side Hand Design (Simple Arabic / Floral)",
            duration: "15 min",
            price: "£10.00 onwards",
          },
          {
            name: "Both Sides Hand Design (Palm & Back of Hand)",
            duration: "30 min",
            price: "£20.00 onwards",
          },
          {
            name: "Hands Up to Wrist (Both Sides - Intricate Pattern)",
            duration: "45 min",
            price: "£35.00 onwards",
          },
          {
            name: "Forearm Extension (Up to Elbows - Per Arm)",
            duration: "30 min",
            price: "£25.00 onwards",
          },
          {
            name: "Feet Henna (Top of Feet & Ankles)",
            duration: "30 min",
            price: "£25.00 onwards",
          },
          {
            name: "Party / Sangeet Group Booking (Per Hour)",
            duration: "1 hr",
            price: "£65.00 / hr",
          },
        ],
      },
      {
        title: "Henna Brows & Tinting",
        items: [
          {
            name: "Henna Brow Sculpting & Tint",
            duration: "20 min",
            price: "£15.00",
          },
          {
            name: "Henna Brows + Precision Threading Combo",
            duration: "35 min",
            price: "£18.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 7. LASER HAIR REMOVAL
  // ─────────────────────────────────────────────────────
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    shortTitle: "Laser",
    description:
      "Advanced IPL and SHR laser hair removal for face and body with per-session and 6-session package pricing.",
    metaDescription:
      "Laser hair removal at Fami Salon: IPL and SHR technology for face, arms, legs, underarms, bikini, and full body with affordable per-session and package pricing.",
    icon: "Zap",
    image: "/images/services/service-laser.jpg",
    tables: [
      {
        title: "Laser Hair Removal - IPL",
        items: [
          {
            name: "Full Face (Unisex)",
            duration: "15 min",
            price: "£50.00 / 6 for £250.00",
          },
          {
            name: "Upper Lip (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Chin (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Neck (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Ear (Unisex)",
            duration: "15 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Sideburns (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Jaw Line (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Cheeks (Unisex)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Nipples (Women Only)",
            duration: "10 min",
            price: "£20.00 / 6 for £99.00",
          },
          {
            name: "Under Arms (Unisex)",
            duration: "15 min",
            price: "£40.00 / 6 for £220.00",
          },
          {
            name: "Half Arms (Unisex)",
            duration: "20 min",
            price: "£55.00 / 6 for £299.00",
          },
          {
            name: "Full Arms (Unisex)",
            duration: "30 min",
            price: "£75.00 / 6 for £399.00",
          },
          {
            name: "Front (Unisex – Face Not Included)",
            duration: "25 min",
            price: "£70.00 / 6 for £399.00",
          },
          {
            name: "Back (Unisex)",
            duration: "25 min",
            price: "£70.00 / 6 for £399.00",
          },
          {
            name: "Bikini (Women Only)",
            duration: "15 min",
            price: "£50.00 / 6 for £249.00",
          },
          {
            name: "Tummy Line (Women Only)",
            duration: "10 min",
            price: "£35.00 / 6 for £180.00",
          },
          {
            name: "Half Legs (Women Only)",
            duration: "20 min",
            price: "£60.00 / 6 for £349.00",
          },
          {
            name: "Full Legs (Women Only)",
            duration: "30 min",
            price: "£99.00 / 6 for £449.00",
          },
          {
            name: "Full Face and Neck (Unisex)",
            duration: "20 min",
            price: "£70.00 / 6 for £379.00",
          },
          {
            name: "Face / Underarms / Bikini (Women)",
            duration: "30 min",
            price: "£140.00 / 6 for £779.00",
          },
          {
            name: "Bikini / Underarms (Women)",
            duration: "30 min",
            price: "£90.00 / 6 for £399.00",
          },
          {
            name: "Half Arms / Underarms (Unisex)",
            duration: "30 min",
            price: "£95.00 / 6 for £579.00",
          },
          {
            name: "Full Arms / Underarms (Unisex)",
            duration: "35 min",
            price: "£125.00 / 6 for £539.00",
          },
        ],
      },
      {
        title: "Laser Hair Removal — SHR",
        items: [
          {
            name: "Full Face (Unisex)",
            duration: "15 min",
            price: "£60.00 / 6 for £270.00",
          },
          {
            name: "Upper Lip (Unisex)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Chin (Unisex)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Sideburns (Unisex)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Ear (Unisex)",
            duration: "15 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Jaw Line (Unisex)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Cheeks (Unisex)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Nipples (Women Only)",
            duration: "10 min",
            price: "£30.00 / 6 for £199.00",
          },
          {
            name: "Under Arms (Unisex)",
            duration: "15 min",
            price: "£50.00 / 6 for £240.00",
          },
          {
            name: "Half Arms (Unisex)",
            duration: "20 min",
            price: "£65.00 / 6 for £339.00",
          },
          {
            name: "Full Arms (Unisex)",
            duration: "30 min",
            price: "£85.00 / 6 for £449.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 8. MICRONEEDLING, RF & PRP
  // ─────────────────────────────────────────────────────
  {
    slug: "microneedling-prp",
    title: "Microneedling, RF & PRP",
    shortTitle: "Microneedling & PRP",
    description:
      "BB Glow, acid peeling, dermaplaning, microneedling derma roller, radiofrequency face and body, and Platelet Rich Plasma (PRP) treatments.",
    metaDescription:
      "Advanced skin treatments at Fami Salon: microneedling, radiofrequency face and body, PRP vampire facial, PRP hair loss treatment, BB Glow, and acid peeling.",
    icon: "Activity",
    image: "/images/services/service-microneedling.jpg",
    tables: [
      {
        title: "Microneedling",
        items: [
          {
            name: "BB Glow Facial (Unisex)",
            duration: "1 hr",
            price: "£65.00",
          },
          { name: "Acid Peeling (Unisex)", duration: "1 hr", price: "£55.00" },
          { name: "Dermaplaning (Unisex)", duration: "1 hr", price: "£65.00" },
          {
            name: "Microneedling – Dermaroller (Unisex)",
            duration: "1 hr",
            price: "£85.00",
          },
        ],
      },
      {
        title: "Radio Frequency Microneedling",
        items: [
          { name: "1 Face Treatment", duration: "—", price: "£120.00" },
          { name: "2 Face Treatments", duration: "—", price: "£200.00" },
          { name: "3 Face Treatments", duration: "—", price: "£290.00" },
          { name: "6 Face Treatments", duration: "—", price: "£500.00" },
        ],
      },
      {
        title: "Radiofrequency Treatment",
        items: [
          { name: "1 RF Face Treatment", duration: "—", price: "£70.00" },
          { name: "3 RF Face Treatments", duration: "—", price: "£150.00" },
          { name: "6 RF Face Treatments", duration: "—", price: "£280.00" },
          { name: "1 RF Body Treatment", duration: "—", price: "£120.00" },
          { name: "3 RF Body Treatments", duration: "—", price: "£290.00" },
          {
            name: "6 RF Body Treatments (Per Area)",
            duration: "—",
            price: "£500.00",
          },
        ],
      },
      {
        title: "Platelet Rich Plasma (PRP)",
        items: [
          {
            name: "PRP Hair Loss Treatment (Unisex)",
            duration: "—",
            price: "£350.00",
          },
          {
            name: "PRP Vampire Facial (Unisex)",
            duration: "—",
            price: "£200.00",
          },
          {
            name: "PRP Hair Loss – 4 Sessions",
            duration: "—",
            price: "£1,000.00",
          },
          {
            name: "PRP Hair Loss + Mesotherapy – 4 Sessions",
            duration: "—",
            price: "£1,400.00",
          },
          {
            name: "PRP Vampire Facial – 4 Sessions",
            duration: "—",
            price: "£700.00",
          },
          {
            name: "PRP Vampire Facial + Mesotherapy – 4 Sessions",
            duration: "—",
            price: "£900.00",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 9. MICRODERMABRASION, HYDRA FACIAL & BIOREPEEL
  // ─────────────────────────────────────────────────────
  {
    slug: "microdermabrasion-hydrafacial",
    title: "Microdermabrasion, Hydra Facial & BioRepeel",
    shortTitle: "Hydra Facial",
    description:
      "Professional microdermabrasion for face and body, luxury Hydra Facials with LED, and advanced BioRepeel chemical peel treatments.",
    metaDescription:
      "Microdermabrasion, Hydra Facial, and BioRepeel at Fami Salon: tester facials, course packages, hydra facial with LED, and BioRepeel for face, neck, and body.",
    icon: "Droplets",
    image: "/images/services/service-hydrafacial.jpg",
    tables: [
      {
        title: "Microdermabrasion for Face",
        items: [
          { name: "Tester Facial (Unisex)", duration: "1 hr", price: "£50.00" },
          {
            name: "3 Course of Facials (Unisex)",
            duration: "1 hr each",
            price: "£120.00",
          },
          {
            name: "6 Course of Facials (Unisex)",
            duration: "1 hr each",
            price: "£220.00",
          },
        ],
      },
      {
        title: "Microdermabrasion for Body",
        items: [
          {
            name: "Elbows / Knees / Ankles / Hands",
            duration: "20 min each",
            price: "£20.00",
          },
          {
            name: "Front / Back of Neck",
            duration: "30 min each",
            price: "£30.00",
          },
        ],
      },
      {
        title: "Hydra Facial",
        items: [
          { name: "Hydra Facial", duration: "45 min", price: "£125.00" },
          {
            name: "Hydra Facial with LED",
            duration: "55 min",
            price: "£155.00",
          },
          {
            name: "Hydra Facial – 6 Sessions",
            duration: "—",
            price: "£699.99",
          },
          {
            name: "Hydra Facial with LED – 6 Sessions",
            duration: "—",
            price: "£899.99",
          },
        ],
      },
      {
        title: "BioRepeel",
        items: [
          { name: "Full Face", duration: "—", price: "£99.00" },
          { name: "Face and Neck Area", duration: "—", price: "£100.00" },
          {
            name: "Full Face, Neck, Décolletage Area",
            duration: "—",
            price: "£120.00",
          },
          { name: "Tummy Area", duration: "—", price: "£99.00" },
          { name: "Hands", duration: "—", price: "£90.00" },
          { name: "Underarms", duration: "—", price: "£99.99" },
          { name: "Kneecaps", duration: "—", price: "£50.00" },
          { name: "Elbows", duration: "—", price: "£50.00" },
          { name: "Back and Shoulder", duration: "—", price: "£110.00" },
        ],
      },
      {
        title: "BioRepeel Packages",
        items: [
          { name: "Full Face – 4 Sessions", duration: "—", price: "£350.00" },
          {
            name: "Face and Neck Area – 4 Sessions",
            duration: "—",
            price: "£399.00",
          },
          {
            name: "Full Face, Neck, Décolletage – 4 Sessions",
            duration: "—",
            price: "£450.00",
          },
          { name: "Tummy Area – 4 Sessions", duration: "—", price: "£350.00" },
        ],
      },
    ],
  },
];

// Helper: get a category by slug
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.slug === slug);
}

// Helper: get all slugs for static generation
export function getAllServiceSlugs(): string[] {
  return serviceCategories.map((s) => s.slug);
}
