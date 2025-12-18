import { DecorativePatterns } from "@/components/DecorativePatterns";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { NewsList } from "@/components/NewsList";
import { LoginForm } from "@/components/LoginForm";
import { Footer } from "@/components/Footer";
import { BaktiLogo } from "@/components/BaktiLogo";
import { Globe, Building2, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <BaktiLogo />
          <nav className="hidden md:flex items-center gap-8">
            {["Beranda", "Layanan", "Program", "Publikasi", "Kontak"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors ${
                  i === 0 ? "text-navy" : "text-muted-foreground hover:text-navy"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:block font-medium">
              ID | EN
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <DecorativePatterns />
        
        <div className="container py-10 lg:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Left Column - Announcement */}
            <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: "0ms" }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-0.5 bg-emerald rounded-full" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Pengumuman
                </span>
              </div>
              <AnnouncementCard />
            </div>

            {/* Middle Column - News List */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <NewsList />
            </div>

            {/* Right Column - Login Form */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <LoginForm />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-navy rounded-full" />
                <div>
                  <h2 className="text-2xl font-display font-semibold text-foreground">
                    Layanan Unggulan
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mendukung konektivitas digital Indonesia
                  </p>
                </div>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-sm text-navy font-medium hover:text-emerald transition-colors group">
                Lihat semua
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Akses Digital",
                  description: "Program pemerataan akses internet untuk daerah tertinggal, terdepan, dan terluar",
                  icon: Globe,
                  accent: "emerald",
                },
                {
                  title: "Infrastruktur",
                  description: "Pembangunan infrastruktur telekomunikasi modern dan merata di seluruh nusantara",
                  icon: Building2,
                  accent: "navy",
                },
                {
                  title: "Literasi Digital",
                  description: "Peningkatan kapasitas dan literasi digital untuk masyarakat Indonesia",
                  icon: Users,
                  accent: "gold",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-xl p-6 shadow-elegant hover-lift border border-transparent hover:border-emerald/20 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                    item.accent === "emerald" ? "bg-emerald/10" :
                    item.accent === "navy" ? "bg-navy/10" : "bg-gold/10"
                  }`}>
                    <item.icon className={`w-6 h-6 ${
                      item.accent === "emerald" ? "text-emerald" :
                      item.accent === "navy" ? "text-navy" : "text-gold"
                    }`} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-navy group-hover:text-emerald transition-colors"
                  >
                    Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-elegant rounded-2xl p-10 relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "12.500+", label: "Desa Terjangkau" },
                { value: "34", label: "Provinsi" },
                { value: "150K+", label: "BTS Terbangun" },
                { value: "95%", label: "Cakupan 4G" },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;