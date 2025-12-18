import { DecorativePatterns } from "@/components/DecorativePatterns";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { NewsList } from "@/components/NewsList";
import { LoginForm } from "@/components/LoginForm";
import { Footer } from "@/components/Footer";
import { BaktiLogo } from "@/components/BaktiLogo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <BaktiLogo />
          <nav className="hidden md:flex items-center gap-8">
            {["Beranda", "Layanan", "Publikasi", "Kontak"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:block">
              baktikomdigi.id
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <DecorativePatterns />
        
        <div className="container py-8 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column - Announcement */}
            <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-gold rounded-full" />
                Pengumuman BAKTI
              </h2>
              <AnnouncementCard />
            </div>

            {/* Middle Column - News List */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <NewsList />
            </div>

            {/* Right Column - Login Form */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <LoginForm />
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Layanan Digital",
                description: "Akses layanan telekomunikasi untuk daerah tertinggal, terdepan, dan terluar",
                icon: "📡",
              },
              {
                title: "Infrastruktur",
                description: "Pembangunan infrastruktur telekomunikasi merata di seluruh Indonesia",
                icon: "🏗️",
              },
              {
                title: "Literasi Digital",
                description: "Program peningkatan literasi digital untuk masyarakat Indonesia",
                icon: "📚",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-portal transition-shadow animate-fade-in"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
