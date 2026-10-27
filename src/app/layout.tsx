import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#831843",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://famihairsalon.com"),
  title: {
    default: "Fami Hair & Beauty Salon | Hair, Bridal Makeup, Henna & Aesthetic Treatments",
    template: "%s | Fami Hair & Beauty Salon",
  },
  description:
    "Fami Hair & Beauty Salon delivers luxury hair styling, bespoke bridal make-up, intricate henna artistry, precision eyebrow styling, smooth hair removal, skin rejuvenation, and advanced aesthetic & PRP treatments.",
  keywords: [
    "Fami Hair and Beauty Salon",
    "hair salon",
    "bridal makeup artist",
    "wedding hair and makeup",
    "henna artistry",
    "bridal mehndi design",
    "eyebrow threading and shaping",
    "eyebrow tinting",
    "hair removal and waxing",
    "skin rejuvenation facial",
    "advanced aesthetics",
    "PRP hair treatment",
    "PRP facial vampire treatment",
    "personalized beauty treatments",
    "luxury beauty salon",
  ],
  authors: [{ name: "Fami Hair & Beauty Salon" }],
  creator: "Fami Hair & Beauty Salon",
  publisher: "Fami Hair & Beauty Salon",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Fami Hair & Beauty Salon | Enhancing Your Beauty, Inspiring Your Confidence",
    description:
      "Passionate about professional hair, bridal make-up, henna artistry, eyebrow services, hair removal, rejuvenation, and advanced PRP treatments in a welcoming, luxurious environment.",
    url: "https://famihairsalon.com",
    siteName: "Fami Hair & Beauty Salon",
    images: [
      {
        url: "/images/fami-logo.jpg",
        width: 800,
        height: 800,
        alt: "Fami Hair & Beauty Salon Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fami Hair & Beauty Salon | Enhancing Your Beauty, Inspiring Your Confidence",
    description:
      "Expert hair styling, bespoke bridal makeup, henna art, eyebrow shaping, and advanced aesthetics & PRP treatments.",
    images: ["/images/fami-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/fami-logo.jpg",
    apple: "/images/fami-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const salonStructuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Fami Hair & Beauty Salon",
    slogan: "Enhancing Your Beauty, Inspiring Your Confidence",
    image: "https://famihairsalon.com/images/fami-logo.jpg",
    description:
      "Professional hair care, bridal & occasion make-up, henna artistry, eyebrow services, hair removal, skin rejuvenation, advanced aesthetics, and PRP treatments.",
    telephone: "+44-000-000-0000",
    priceRange: "££",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:30",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon & Aesthetic Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Hair & Styling Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Cut, Styling & Blow-dry" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Color, Balayage & Highlights" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Conditioning & Hair Rejuvenation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Bridal & Occasion Make-Up",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complete Bridal Glamour Package" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Party & Festive Occasion Make-Up" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Bridal Trials & Consultation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Henna Artistry (Mehndi)",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intricate Bridal Henna" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Occasion & Arabic Henna Art" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Brows & Hair Removal",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Precision Eyebrow Threading & Shaping" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eyebrow Tinting & Lamination" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Body & Facial Hair Removal (Waxing)" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Rejuvenation, Aesthetics & PRP",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rejuvenating & Deep Cleansing Facials" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advanced Non-Invasive Aesthetic Treatments" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PRP Hair Regrowth Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PRP Skin Rejuvenation (Vampire Facial)" } },
          ],
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(salonStructuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDFE] font-sans text-slate-800 selection:bg-pink-100 selection:text-pink-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
