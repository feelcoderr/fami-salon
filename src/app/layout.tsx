import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1a237e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://famihairandbeautysalon.co.uk"),
  title: {
    default:
      "Fami Hair & Beauty Salon | Professional Hair, Bridal Makeup, Henna & Aesthetic Treatments",
    template: "%s | Fami Hair & Beauty Salon",
  },
  description:
    "Fami Hair & Beauty Salon at 79 Belgrave Rd, Ilford offers professional hair styling, bridal make-up, henna artistry, eyebrow services, hair removal, skin rejuvenation, and advanced PRP treatments.",
  keywords: [
    "hair salon Ilford",
    "beauty salon Ilford",
    "bridal makeup Ilford",
    "henna artistry",
    "bridal mehndi",
    "eyebrow threading",
    "hair removal",
    "PRP treatment",
    "skin rejuvenation",
    "hydra facial",
    "advanced aesthetics",
  ],
  openGraph: {
    title: "Fami Hair & Beauty Salon",
    description:
      "Professional hair, bridal make-up, henna artistry, and advanced aesthetic treatments at 79 Belgrave Rd, Ilford.",
    url: "https://famihairandbeautysalon.co.uk",
    siteName: "Fami Hair & Beauty Salon",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
