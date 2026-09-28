import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "22900000000"; // ⚠️ Remplacer

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Validation téléphone Afrique de l'Ouest (BJ, CI, SN, TG, BF, ML, NE, GN...)
export function isValidPhone(phone: string) {
  const cleaned = phone.replace(/[\s\-().]/g, "");
  return /^(\+?\d{8,15})$/.test(cleaned);
}

export function isValidName(name: string) {
  return name.trim().length >= 2;
}