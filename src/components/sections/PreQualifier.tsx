import { PreQualifierWidget } from "@/components/widgets/PreQualifierWidget";

export function PreQualifier() {
  return (
    <section id="pre-qualif" className="bg-gradient-to-b from-white to-night-50 py-14 md:py-20 px-5">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-block text-xs font-bold tracking-wider text-gold-500 bg-gold-400/10 px-3 py-1 rounded-full">
          3 CLICS • 30 SECONDES
        </span>
        <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-night-900">
          Arrête d'envoyer « C'est combien ? »
        </h2>
        <p className="mt-2 text-night-500 text-sm md:text-base">
          Réponds à 3 questions. On te renvoie un message WhatsApp clair, chiffré et personnalisé.
        </p>
      </div>
      <PreQualifierWidget />
    </section>
  );
}