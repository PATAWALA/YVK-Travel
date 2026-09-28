"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { label: "Point de départ", before: "Tu ne sais pas par où commencer", after: "Un conseiller dédié dès le 1er message" },
  { label: "Transparence", before: "« C'est combien ? » sans réponse claire", after: "Devis chiffré, écrit, avant tout paiement" },
  { label: "Dossier", before: "Tu remplis tout seul, tu galères", after: "Monté étape par étape par YVK" },
  { label: "Procédures", before: "Rendez-vous, entretien : tu gères seul", after: "YVK gère tout de A à Z" },
  { label: "Suivi", before: "Tu relances 10 fois sans réponse", after: "Un seul interlocuteur, du début à la fin" },
  { label: "Résultat", before: "Tu abandonnes ton projet", after: "Tu prends ton avion ✈️" },
];

export function ComparisonTable() {
  return (
    <section className="bg-night-900 text-white py-14 md:py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            <span className="text-white/40">Avant.</span>{" "}
            <span className="text-gold-400">Après YVK Travel.</span>
          </h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Ce que change un accompagnement sérieux, du premier message au visa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Avant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-bold text-sm md:text-base text-white/80">Sans accompagnement</h3>
            </div>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.label} className="text-xs md:text-sm">
                  <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-wide mb-0.5">{r.label}</p>
                  <p className="text-white/70">{r.before}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Après */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-b from-[#25D366]/15 to-[#25D366]/5 border border-[#25D366]/40 p-4 md:p-6 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
              AVEC YVK TRAVEL
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/25 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#25D366]" />
              </div>
              <h3 className="font-bold text-sm md:text-base">Avec YVK Travel</h3>
            </div>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.label} className="text-xs md:text-sm">
                  <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-wide mb-0.5">{r.label}</p>
                  <p className="font-semibold text-white">{r.after}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}