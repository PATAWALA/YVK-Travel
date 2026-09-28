"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Plane, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const scrollToForm = () =>
    document.getElementById("pre-qualif")?.scrollIntoView({ behavior: "smooth" });

  const scrollToDestinations = () =>
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-night-900 via-night-700 to-night-900 text-white pt-16 md:pt-18">
      {/* Décor radial */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D4A24C 0, transparent 40%), radial-gradient(circle at 80% 60%, #25D366 0, transparent 45%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 pt-10 pb-14 md:pt-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-xs backdrop-blur"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>+2 300 dossiers traités avec succès</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Ton visa.
          <br />
          <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
            Sans stress. Sans arnaque.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-white/80 max-w-xl"
        >
          YVK Travel accompagne les candidats africains vers le{" "}
          <strong className="text-white">Canada, la France, la Chine et Dubaï</strong>{" "}
          — dossier, rendez-vous, entretien. Zéro perte de temps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex flex-col sm:flex-row gap-3"
        >
          <Button
            size="lg"
            variant="gold"
            onClick={scrollToForm}
            className="pulse-wa w-full sm:w-auto"
          >
            Pré-qualifier mon dossier
            <ArrowDown className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={scrollToDestinations}
            className="w-full sm:w-auto"
          >
            Voir les destinations
          </Button>
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          {[
            { icon: ShieldCheck, label: "94% de réussite" },
            { icon: Plane, label: "18+ destinations" },
            { icon: Sparkles, label: "Accompagnement A→Z" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-xl py-3 backdrop-blur"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 mx-auto text-gold-400" />
              <p className="mt-1.5 text-[11px] md:text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}