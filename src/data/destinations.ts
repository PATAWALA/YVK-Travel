export type Destination = {
  id: string;
  country: string;
  flag: string;
  tagline: string;
  delay: string;
  successRate: string;
  image: string;
  popular?: boolean;
};

export const destinations: Destination[] = [
  { id: "canada", country: "Canada", flag: "🇨🇦", tagline: "Résidence permanente & Études", delay: "6–12 mois", successRate: "94%", image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=800", popular: true },
  { id: "france", country: "France", flag: "🇫🇷", tagline: "Études supérieures & Schengen", delay: "2–4 mois", successRate: "91%", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", popular: true },
  { id: "chine", country: "Chine", flag: "🇨🇳", tagline: "Bourses & Commerce international", delay: "1–3 mois", successRate: "96%", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800" },
  { id: "dubai", country: "Dubaï", flag: "🇦🇪", tagline: "Business & Tourisme premium", delay: "2–6 semaines", successRate: "97%", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800" },
  { id: "turquie", country: "Turquie", flag: "🇹🇷", tagline: "Tourisme & transit", delay: "1–4 semaines", successRate: "95%", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800" },
  { id: "maroc", country: "Maroc", flag: "🇲🇦", tagline: "Résidence & Affaires", delay: "2–3 mois", successRate: "92%", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800" },
];