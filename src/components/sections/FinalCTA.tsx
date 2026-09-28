"use client";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const scrollToForm = () =>
    document.getElementById("pre-qualif")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-gradient-to-br from-night-900 via-night-700 to-night-900 text-white py-14 md:py-20 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto text-gold-400" />
        <h2 className="mt-4 text-2xl md:text-4xl font-extrabold leading-tight">
          Ton projet mérite un vrai accompagnement.
        </h2>
        <p className="mt-3 text-white/80 text-sm md:text-base max-w-xl mx-auto">
          En 45 secondes, dis-nous où tu veux aller et avec quel budget. On s'occupe du reste.
        </p>
        <Button
          size="lg"
          variant="gold"
          onClick={scrollToForm}
          className="mt-6 pulse-wa"
        >
          Pré-qualifier mon dossier
          <ArrowDown className="w-5 h-5" />
        </Button>
        <p className="mt-3 text-[11px] text-white/50">
          Aucun paiement en ligne. Aucun engagement. Juste une réponse claire.
        </p>
      </div>
    </section>
  );
}