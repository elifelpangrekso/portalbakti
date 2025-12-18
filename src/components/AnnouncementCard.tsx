import { cn } from "@/lib/utils";
import { BaktiLogo } from "./BaktiLogo";
import { ArrowRight } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

interface AnnouncementCardProps {
  className?: string;
}

export function AnnouncementCard({ className }: AnnouncementCardProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-elegant-lg group", className)}>
      {/* Background Image with Elegant Overlay */}
      <div className="relative h-[420px]">
        <img
          src={heroBuilding}
          alt="Gedung Pemerintahan Indonesia"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Refined gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/80 to-navy/40" />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald/20 rotate-45" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <div className="flex items-start justify-between">
            <BaktiLogo variant="light" />
            <span className="px-3 py-1 bg-emerald/90 text-white text-xs font-medium rounded-full">
              Pengumuman
            </span>
          </div>
          
          <div className="space-y-5">
            <div className="w-12 h-0.5 bg-emerald rounded-full" />
            
            <h2 className="text-2xl font-display font-semibold text-white leading-tight">
              Badan Aksesibilitas Telekomunikasi dan Informasi
            </h2>
            
            <p className="text-white/75 text-sm leading-relaxed max-w-md">
              Mendukung pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia
            </p>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-emerald-light text-sm font-medium hover:gap-3 transition-all"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-white/50 text-xs border-t border-white/10 pt-4">
            <span>Kementerian Komunikasi dan Digital</span>
            <span>18 Desember 2024</span>
          </div>
        </div>
      </div>

      {/* Carousel Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-6 h-1 rounded-full bg-emerald" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
      </div>
    </div>
  );
}