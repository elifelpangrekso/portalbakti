import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Program Akses Internet untuk Daerah Terpencil Diperluas ke 500 Desa Baru",
    date: "18 Des 2024",
    category: "Program",
    url: "#",
  },
  {
    id: "2",
    title: "BAKTI Luncurkan Inisiatif Literasi Digital untuk Masyarakat Pedesaan",
    date: "17 Des 2024",
    category: "Edukasi",
    url: "#",
  },
  {
    id: "3",
    title: "Infrastruktur Telekomunikasi di Wilayah 3T Ditingkatkan Secara Signifikan",
    date: "16 Des 2024",
    category: "Infrastruktur",
    url: "#",
  },
  {
    id: "4",
    title: "Kerjasama BAKTI dengan Operator Seluler untuk Perluasan Jaringan 4G",
    date: "15 Des 2024",
    category: "Kemitraan",
    url: "#",
  },
  {
    id: "5",
    title: "Workshop Pengembangan Kapasitas Digital untuk UMKM di Daerah Tertinggal",
    date: "14 Des 2024",
    category: "Pelatihan",
    url: "#",
  },
];

interface NewsListProps {
  className?: string;
}

export function NewsList({ className }: NewsListProps) {
  return (
    <div className={cn("bg-card rounded-xl shadow-elegant p-7", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-7 bg-emerald rounded-full" />
          <h3 className="text-xl font-display font-semibold text-foreground">
            Berita Terkini
          </h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {newsItems.length} artikel
        </span>
      </div>

      {/* News List */}
      <div className="space-y-1">
        {newsItems.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            className={cn(
              "block py-4 px-4 -mx-4 rounded-lg transition-all duration-300 group",
              "hover:bg-secondary/70",
              "animate-fade-in"
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-navy/5 text-navy text-[10px] font-medium rounded">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-relaxed group-hover:text-navy transition-colors">
                  {item.title}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-emerald transition-all mt-1" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-border">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-navy font-medium hover:text-emerald transition-colors group"
        >
          Lihat Semua Berita
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}