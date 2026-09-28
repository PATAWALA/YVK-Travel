import { Phone, MapPin } from "lucide-react";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-night-900 text-white/70 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-extrabold text-lg">YVK Travel</h3>
            <p className="mt-2 text-sm">
              Agence de voyage & immigration. Accompagnement de A à Z pour concrétiser
              ton projet à l'international.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Nous contacter</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="hover:text-white transition-colors"
                >
                  WhatsApp direct
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                Cotonou • Bénin
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Suivez-nous</h4>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@yvktravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-center text-white/50">
          © {new Date().getFullYear()} YVK Travel. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}