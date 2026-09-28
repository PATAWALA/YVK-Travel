"use client";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function FrictionBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white text-xs md:text-sm py-2.5 px-4 text-center font-medium"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span>
          <strong>70% des candidats YVK se perdent</strong> dans les commentaires TikTok —
          perdez plus aucun prospect qualifié.
        </span>
      </div>
    </motion.div>
  );
}