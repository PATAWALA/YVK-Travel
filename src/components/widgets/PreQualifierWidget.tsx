"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Check, Send, Lock, Phone, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { destinations } from "@/data/destinations";
import { visaTypes, budgetRanges } from "@/data/visa-options";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, isValidPhone, isValidName } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3 | 4;

const STEPS = ["Destination", "Visa", "Budget", "Coordonnées", "Envoi"];

export function PreQualifierWidget() {
  const [step, setStep] = useState<Step>(0);
  const [destination, setDestination] = useState("");
  const [visa, setVisa] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validateContact = () => {
    const errs: typeof errors = {};
    if (!isValidName(name)) errs.name = "Indique ton nom complet (min. 2 caractères)";
    if (!isValidPhone(phone)) errs.phone = "Numéro invalide (ex : +229 97 00 00 00)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const canNext =
    (step === 0 && destination) ||
    (step === 1 && visa) ||
    (step === 2 && budget) ||
    (step === 3 && name && phone);

  const handleNext = () => {
    if (step === 3 && !validateContact()) return;
    setStep((s) => (s + 1) as Step);
  };

  const reset = () => {
    setStep(0);
    setDestination("");
    setVisa("");
    setBudget("");
    setName("");
    setPhone("");
    setErrors({});
  };

  const message = `Bonjour YVK Travel 👋

📋 *Nouveau dossier pré-qualifié*

👤 Nom : ${name}
📱 Téléphone : ${phone}

🌍 Destination : ${destination}
🛂 Type de visa : ${visa}
💰 Budget : ${budget}

Merci de me recontacter pour la suite.`;

  const sendWA = () => {
    window.open(buildWhatsAppLink(message), "_blank");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-2xl shadow-night-900/10 border border-night-100 overflow-hidden">
      {/* Header + progression */}
      <div className="bg-night-900 px-5 pt-5 pb-4 text-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/70">
            Étape {step + 1} / {STEPS.length}
          </span>
          <span className="text-xs font-semibold text-gold-400 flex items-center gap-1">
            <Lock className="w-3 h-3" /> ~45 secondes
          </span>
        </div>
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                i <= step ? "bg-gold-400" : "bg-white/15"
              }`}
            />
          ))}
        </div>
        <h3 className="mt-4 text-lg md:text-xl font-bold">
          Pré-qualifie ton dossier en 4 étapes
        </h3>
      </div>

      <div className="p-5">
        <AnimatePresence mode="wait">
          {/* ÉTAPE 0 — Destination */}
          {step === 0 && (
            <StepWrap key="s0">
              <StepLabel>Quelle destination t'intéresse ?</StepLabel>
              <div className="grid grid-cols-2 gap-2.5">
                {destinations.map((d) => (
                  <Pick
                    key={d.id}
                    active={destination === d.country}
                    onClick={() => setDestination(d.country)}
                    title={`${d.flag} ${d.country}`}
                    subtitle={d.tagline}
                  />
                ))}
              </div>
            </StepWrap>
          )}

          {/* ÉTAPE 1 — Visa */}
          {step === 1 && (
            <StepWrap key="s1">
              <StepLabel>Quel type de visa vises-tu ?</StepLabel>
              <div className="grid grid-cols-1 gap-2.5">
                {visaTypes.map((v) => (
                  <Pick
                    key={v.id}
                    active={visa === v.label}
                    onClick={() => setVisa(v.label)}
                    title={`${v.icon} ${v.label}`}
                    subtitle={v.description}
                    horizontal
                  />
                ))}
              </div>
            </StepWrap>
          )}

          {/* ÉTAPE 2 — Budget */}
          {step === 2 && (
            <StepWrap key="s2">
              <StepLabel>Quel est ton budget approximatif ?</StepLabel>
              <div className="grid grid-cols-1 gap-2.5">
                {budgetRanges.map((b) => (
                  <Pick
                    key={b.id}
                    active={budget === b.label}
                    onClick={() => setBudget(b.label)}
                    title={b.label}
                    subtitle={b.hint}
                    horizontal
                  />
                ))}
              </div>
            </StepWrap>
          )}

          {/* ÉTAPE 3 — Coordonnées (NOUVEAU) */}
          {step === 3 && (
            <StepWrap key="s3">
              <StepLabel>Tes coordonnées pour être recontacté(e)</StepLabel>

              <div className="space-y-3">
                <Field
                  icon={<User className="w-4 h-4" />}
                  label="Nom complet"
                  placeholder="Ex : Abdoulaye Diallo"
                  value={name}
                  onChange={(v) => setName(v)}
                  error={errors.name}
                  type="text"
                />
                <Field
                  icon={<Phone className="w-4 h-4" />}
                  label="Numéro WhatsApp"
                  placeholder="Ex : +229 97 00 00 00"
                  value={phone}
                  onChange={(v) => setPhone(v)}
                  error={errors.phone}
                  type="tel"
                />
              </div>

              <p className="mt-3 text-[11px] text-night-500 leading-relaxed">
                🔒 Tes informations servent uniquement à préparer ton dossier. Aucun
                spam, aucune revente. Un conseiller YVK te répond personnellement.
              </p>
            </StepWrap>
          )}

          {/* ÉTAPE 4 — Récapitulatif + envoi WhatsApp */}
          {step === 4 && (
            <StepWrap key="s4">
              <StepLabel>Vérifie ton dossier avant envoi</StepLabel>
              <div className="rounded-2xl bg-night-50 p-4 space-y-2 text-sm">
                <Row label="👤 Nom" value={name} />
                <Row label="📱 Téléphone" value={phone} />
                <Row label="🌍 Destination" value={destination} />
                <Row label="🛂 Visa" value={visa} />
                <Row label="💰 Budget" value={budget} />
              </div>

              <p className="text-xs text-night-500 mt-3">
                En cliquant ci-dessous, tu seras redirigé(e) vers WhatsApp avec ton
                dossier pré-rempli. Le conseiller YVK recevra tout d'un coup — pas de
                ping-pong.
              </p>

              <Button
                variant="wa"
                size="lg"
                className="w-full mt-4 pulse-wa"
                onClick={sendWA}
              >
                <FaWhatsapp className="w-5 h-5" />
                Envoyer mon dossier sur WhatsApp
              </Button>

              <button
                onClick={reset}
                className="w-full text-center text-xs text-night-500 mt-3 hover:text-night-700 transition-colors"
              >
                ← Modifier mes réponses
              </button>
            </StepWrap>
          )}
        </AnimatePresence>

        {step < 4 && (
          <div className="mt-5 flex items-center gap-2">
            {step > 0 && (
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep((s) => (s - 1) as Step)}
                className="!bg-night-100 !text-night-700 shadow-none hover:!bg-night-100/70"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </Button>
            )}
            <Button
              variant="primary"
              size="md"
              disabled={!canNext}
              onClick={handleNext}
              className="flex-1"
            >
              Continuer
              <Check className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- sous-composants ---------- */

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-night-900 mb-3">{children}</p>;
}

function Pick({
  active,
  onClick,
  title,
  subtitle,
  horizontal,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  horizontal?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-2xl border-2 p-3 transition-all active:scale-[0.98] ${
        active
          ? "border-[#25D366] bg-[#25D366]/5 shadow-md shadow-[#25D366]/10"
          : "border-night-100 hover:border-night-500/40 bg-white"
      }`}
    >
      <div className={`flex ${horizontal ? "items-center justify-between" : "flex-col"} gap-1`}>
        <p className="font-semibold text-sm text-night-900">{title}</p>
        {subtitle && <p className="text-[11px] text-night-500">{subtitle}</p>}
        {active && (
          <span className="bg-[#25D366] text-white rounded-full p-0.5">
            <Check className="w-3 h-3" />
          </span>
        )}
      </div>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-night-500 text-xs">{label}</span>
      <span className="font-semibold text-night-900 text-right text-sm truncate">
        {value || "—"}
      </span>
    </div>
  );
}

function Field({
  icon,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-night-700 mb-1.5">{label}</label>
      <div
        className={`flex items-center gap-2 rounded-2xl border-2 bg-white px-3 py-2.5 transition-colors ${
          error
            ? "border-red-400 focus-within:border-red-500"
            : "border-night-100 focus-within:border-night-500"
        }`}
      >
        <span className="text-night-500">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm outline-none text-night-900 placeholder:text-night-500/50"
        />
      </div>
      {error && <p className="mt-1 text-[11px] text-red-500 font-medium">{error}</p>}
    </div>
  );
}