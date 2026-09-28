"use client";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, TrendingUp, FileCheck, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Zéro arnaque", desc: "Devis chiffré, écrit, avant tout paiement." },
  { icon: UserCheck, title: "Conseiller dédié", desc: "Un seul interlocuteur du début à la fin." },
  { icon: TrendingUp, title: "94% de réussite", desc: "Taux vérifié sur +2 300 dossiers traités." },
  { icon: FileCheck, title: "Dossier clé en main", desc: "On monte tout, tu ne remplis rien seul." },
  { icon: Clock, title: "Support 7j/7", desc: "WhatsApp disponible à chaque étape." },
];

export function Guarantees() {
  return (
    <section className="py-14 md:py-20 px-5 bg-night-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-wider text-gold-500 bg-gold-400/10 px-3 py-1 rounded-full">
            POURQUOI NOUS FAIRE CONFIANCE
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-night-900">
            +2 300 candidats accompagnés
          </h2>
          <p className="mt-2 text-night-500 text-sm md:text-base max-w-xl mx-auto">
            Un accompagnement humain, transparent et structuré — du premier message jusqu'au visa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-5 border border-night-100 shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-gold-400/15 flex items-center justify-center mb-3">
                <it.icon className="w-5 h-5 text-gold-500" />
              </div>
              <h3 className="font-bold text-night-900 text-sm md:text-base">{it.title}</h3>
              <p className="mt-1 text-xs md:text-sm text-night-500">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}