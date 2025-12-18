import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function BaktiLogo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const accentColor = "text-gold";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-12 h-12 gradient-navy rounded-lg flex items-center justify-center shadow-portal">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid pattern representing digital connectivity */}
            <rect x="4" y="4" width="10" height="10" rx="2" fill="white" />
            <rect x="15" y="4" width="10" height="10" rx="2" fill="white" opacity="0.8" />
            <rect x="26" y="4" width="10" height="10" rx="2" fill="white" opacity="0.6" />
            <rect x="4" y="15" width="10" height="10" rx="2" fill="white" opacity="0.8" />
            <rect x="15" y="15" width="10" height="10" rx="2" fill="hsl(40, 95%, 55%)" />
            <rect x="26" y="15" width="10" height="10" rx="2" fill="white" opacity="0.8" />
            <rect x="4" y="26" width="10" height="10" rx="2" fill="white" opacity="0.6" />
            <rect x="15" y="26" width="10" height="10" rx="2" fill="white" opacity="0.8" />
            <rect x="26" y="26" width="10" height="10" rx="2" fill="white" />
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={cn("text-2xl font-bold tracking-tight font-display", textColor)}>
          BAKTI<span className={accentColor}>.</span>
        </span>
        <span className={cn("text-xs font-medium tracking-wide uppercase", variant === "light" ? "text-white/80" : "text-muted-foreground")}>
          Kementerian Komdigi
        </span>
      </div>
    </div>
  );
}
