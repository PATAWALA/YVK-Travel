import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "YVK Travel — Ton visa sans stress | Canada, France, Chine",
  description:
    "Agence de voyage et immigration. Pré-qualifie ton dossier en 30 secondes et discute directement sur WhatsApp avec un conseiller YVK Travel.",
  openGraph: {
    title: "YVK Travel — Ton visa sans stress",
    description: "Canada, France, Chine, Dubaï. Accompagnement A→Z.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1e4a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}