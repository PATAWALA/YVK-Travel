"use client";
import { motion } from "framer-motion";
import { Clock, TrendingUp, MousePointerClick } from "lucide-react";
import { destinations } from "@/data/destinations";

export function Destinations() {
  const handleSelect = (country: string) => {
    // 1. Envoie l'événement au widget
    window.dispatchEvent(
      new CustomEvent("yvk:preselect-destination", { detail: country })
    );
    // 2. Scroll vers le formulaire
    document.getElementById("pre-qualif")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-wider text-night-500 bg-night-50 px-3 py-1 rounded-full">
            NOS DESTINATIONS PHARES
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-night-900">
            Choisis ta prochaine destination
          </h2>
          <p className="mt-2 text-night-500 text-sm md:text-base max-w-xl mx-auto">
            Clique sur une destination pour pré-remplir ta demande et discuter avec un
            conseiller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((d, i) => (
            <motion.button
              key={d.id}
              type="button"
              onClick={() => handleSelect(d.country)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg shadow-night-900/5 hover:shadow-2xl hover:shadow-night-900/15 transition-all active:scale-[0.98] text-left"
            >
              <div className="relative h-56 md:h-64">
                <img
                  src={d.image}
                  alt={d.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/40 to-transparent" />

                {d.popular && (
                  <span className="absolute top-3 right-3 bg-gold-400 text-night-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ⭐ POPULAIRE
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{d.flag}</span>
                    <h3 className="text-xl font-extrabold">{d.country}</h3>
                  </div>
                  <p className="text-xs text-white/80 mb-3">{d.tagline}</p>

                  <div className="flex items-center gap-3 text-[11px] text-white/90">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {d.delay}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#25D366]" /> {d.successRate}
                    </span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-400 group-hover:gap-2 transition-all">
                    <MousePointerClick className="w-3.5 h-3.5" />
                    Pré-remplir ma demande
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}