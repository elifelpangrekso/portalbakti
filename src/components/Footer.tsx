import { cn } from "@/lib/utils";
import { BaktiLogo } from "./BaktiLogo";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-navy text-white", className)}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-5">
            <BaktiLogo variant="light" />
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Badan Aksesibilitas Telekomunikasi dan Informasi mendukung pemerataan akses digital di seluruh Indonesia untuk mewujudkan masyarakat yang terhubung dan berdaya.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald/80 flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/70 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Tautan</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Layanan", "Program", "Publikasi", "Karir"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald shrink-0" />
                <span>Jl. Medan Merdeka Barat No.9, Jakarta Pusat 10110</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-emerald shrink-0" />
                <span>(021) 3452841</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-emerald shrink-0" />
                <span>info@baktikomdigi.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2024 BAKTI - Kementerian Komunikasi dan Digital
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-emerald-light transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-emerald-light transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}