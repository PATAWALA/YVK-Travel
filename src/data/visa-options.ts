export type VisaType = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

export type BudgetRange = {
  id: string;
  label: string;
  hint: string;
};

export const visaTypes: VisaType[] = [
  {
    id: "etudes",
    label: "Visa Études",
    icon: "🎓",
    description: "Université, Master, BTS",
  },
  {
    id: "travail",
    label: "Visa Travail",
    icon: "💼",
    description: "Contrat & permis de travail",
  },
  {
    id: "tourisme",
    label: "Visa Tourisme",
    icon: "✈️",
    description: "Séjour & vacances",
  },
  {
    id: "resident",
    label: "Résidence Permanente",
    icon: "🏡",
    description: "Installation définitive",
  },
  {
    id: "business",
    label: "Visa Affaires",
    icon: "📈",
    description: "Commerce & investissement",
  },
  {
    id: "famille",
    label: "Regroupement familial",
    icon: "👨‍👩‍👧",
    description: "Rejoindre un proche",
  },
];

export const budgetRanges: BudgetRange[] = [
  {
    id: "b1",
    label: "Moins de 500 000 FCFA",
    hint: "Budget serré",
  },
  {
    id: "b2",
    label: "500 000 – 1 500 000 FCFA",
    hint: "Standard",
  },
  {
    id: "b3",
    label: "1 500 000 – 3 000 000 FCFA",
    hint: "Confortable",
  },
  {
    id: "b4",
    label: "Plus de 3 000 000 FCFA",
    hint: "Premium",
  },
];