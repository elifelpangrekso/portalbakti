import { cn } from "@/lib/utils";
import { BaktiLogo } from "./BaktiLogo";
import heroBuilding from "@/assets/hero-building.jpg";

interface AnnouncementCardProps {
  className?: string;
}

export function AnnouncementCard({ className }: AnnouncementCardProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-portal", className)}>
      {/* Background Image with Overlay */}
      <div className="relative h-[400px]">
        <img
          src={heroBuilding}
          alt="Gedung Pemerintahan Indonesia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/85 to-navy-light/80" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <BaktiLogo variant="light" />
          
          <div className="space-y-4">
            {/* Decorative Line */}
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <span className="text-gold text-sm font-medium">Pengumuman</span>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-white leading-tight">
              Badan Aksesibilitas Telekomunikasi dan Informasi
            </h2>
            
            <p className="text-white/80 text-sm leading-relaxed">
              Mendukung pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia
            </p>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-white/60 text-xs">
            <span>Kementerian Komunikasi dan Digital</span>
            <span>Rabu, 18 Desember 2024</span>
          </div>
        </div>
      </div>

      {/* Carousel Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}
