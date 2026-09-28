"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { href: "#pre-qualif", label: "Pré-qualification" },
  { href: "#destinations", label: "Destinations" },
  { href: "#garanties", label: "Pourquoi nous" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-night-900/95 backdrop-blur-md shadow-lg shadow-night-900/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 active:scale-95 transition-transform"
            aria-label="YVK Travel - Accueil"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden bg-white ring-2 ring-gold-400/40">
              <Image
                src="/logo.jpg"
                alt="YVK Travel"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-white font-extrabold text-sm md:text-base leading-none tracking-tight">
                YVK <span className="text-gold-400">Travel</span>
              </p>
              <p className="text-[10px] md:text-[11px] text-white/60 leading-none mt-0.5">
                Voyage & Immigration
              </p>
            </div>
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-3.5 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button
              size="sm"
              variant="gold"
              onClick={() => scrollTo("#pre-qualif")}
            >
              Pré-qualifier
              <ArrowDown className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-night-900/70 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-sm bg-night-900 text-white p-5 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white ring-2 ring-gold-400/40">
                    <Image
                      src="/logo.jpg"
                      alt="YVK Travel"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-sm leading-none">
                      YVK <span className="text-gold-400">Travel</span>
                    </p>
                    <p className="text-[10px] text-white/60 mt-0.5">
                      Voyage & Immigration
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center active:scale-95"
                  aria-label="Fermer le menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5">
                {LINKS.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    onClick={() => scrollTo(l.href)}
                    className="text-left px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <Button
                  size="lg"
                  variant="gold"
                  className="w-full"
                  onClick={() => scrollTo("#pre-qualif")}
                >
                  Pré-qualifier mon dossier
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <p className="mt-3 text-[11px] text-white/50 text-center leading-relaxed">
                  Un conseiller YVK te répond personnellement après validation.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}