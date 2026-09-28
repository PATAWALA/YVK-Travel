"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("pre-qualif")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm"
        >
          <div className="bg-white border-t border-night-100 md:border md:rounded-2xl md:shadow-2xl md:shadow-night-900/15 p-3 md:p-4">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gold-400/15 items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-gold-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-bold text-night-900 truncate">
                  Prêt à décoller ?
                </p>
                <p className="text-[10px] md:text-xs text-night-500 truncate">
                  Pré-qualification en 45 secondes
                </p>
              </div>
              <button
                onClick={handleClick}
                className="pulse-wa bg-gradient-to-r from-gold-400 to-gold-500 hover:brightness-105 text-night-900 font-semibold rounded-full px-4 py-2.5 text-sm flex items-center gap-2 active:scale-95 transition-all flex-shrink-0"
              >
                <ArrowDown className="w-4 h-4" />
                <span className="hidden sm:inline">Commencer</span>
                <span className="sm:hidden">Go</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}