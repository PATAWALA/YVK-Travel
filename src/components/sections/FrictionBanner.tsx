"use client";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export function FrictionBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-night-700 via-night-700 to-gold-500 text-white text-xs md:text-sm py-2.5 px-4 text-center font-medium"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
        <Plane className="w-4 h-4 flex-shrink-0 text-gold-400" />
        <span>
          <strong>Ton visa, sans stress.</strong> Pré-qualifie ton dossier en 45 secondes — un conseiller YVK te recontacte.
        </span>
      </div>
    </motion.div>
  );
}