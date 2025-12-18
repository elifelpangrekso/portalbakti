import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Program Akses Internet untuk Daerah Terpencil Diperluas ke 500 Desa Baru",
    url: "#",
  },
  {
    id: "2",
    title: "BAKTI Luncurkan Inisiatif Literasi Digital untuk Masyarakat Pedesaan",
    url: "#",
  },
  {
    id: "3",
    title: "Infrastruktur Telekomunikasi di Wilayah 3T Ditingkatkan Secara Signifikan",
    url: "#",
  },
  {
    id: "4",
    title: "Kerjasama BAKTI dengan Operator Seluler untuk Perluasan Jaringan 4G",
    url: "#",
  },
  {
    id: "5",
    title: "Workshop Pengembangan Kapasitas Digital untuk UMKM di Daerah Tertinggal",
    url: "#",
  },
  {
    id: "6",
    title: "Pencapaian Target Akses Internet Desa pada Semester Pertama 2024",
    url: "#",
  },
  {
    id: "7",
    title: "Program Bantuan Perangkat untuk Sekolah di Wilayah Perbatasan",
    url: "#",
  },
  {
    id: "8",
    title: "Evaluasi Program Palapa Ring: Konektivitas Nasional Semakin Merata",
    url: "#",
  },
];

interface NewsListProps {
  className?: string;
}

export function NewsList({ className }: NewsListProps) {
  return (
    <div className={cn("bg-card rounded-xl shadow-card p-6", className)}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gold rounded-full" />
        <h3 className="text-xl font-display font-bold text-foreground">
          BAKTI Terkini
        </h3>
      </div>

      {/* News List */}
      <div className="space-y-1">
        {newsItems.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            className={cn(
              "block py-3 px-4 rounded-lg transition-all duration-200 group",
              "hover:bg-secondary hover:shadow-sm",
              "animate-fade-in"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 group-hover:bg-gold transition-colors" />
              <p className="text-sm text-foreground leading-relaxed group-hover:text-navy transition-colors flex-1">
                {item.title}
              </p>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <a
          href="#"
          className="text-sm text-navy font-medium hover:text-gold transition-colors flex items-center gap-2"
        >
          Lihat Semua Berita
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
