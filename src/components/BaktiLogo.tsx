import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function BaktiLogo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Logo Icon - Refined geometric */}
      <div className="relative">
        <div className="w-11 h-11 gradient-navy rounded-lg flex items-center justify-center shadow-elegant">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified elegant grid */}
            <rect x="4" y="4" width="8" height="8" rx="1.5" fill="white" />
            <rect x="14" y="4" width="8" height="8" rx="1.5" fill="white" opacity="0.7" />
            <rect x="4" y="14" width="8" height="8" rx="1.5" fill="white" opacity="0.7" />
            <rect x="14" y="14" width="8" height="8" rx="1.5" fill="hsl(160, 60%, 45%)" />
            <rect x="24" y="14" width="4" height="8" rx="1" fill="white" opacity="0.5" />
            <rect x="14" y="24" width="8" height="4" rx="1" fill="white" opacity="0.5" />
          </svg>
        </div>
        {/* Subtle accent line */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald rounded-full" />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={cn("text-xl font-bold tracking-wide font-display", textColor)}>
          BAKTI
          <span className="text-emerald">.</span>
        </span>
        <span className={cn("text-[10px] font-medium tracking-widest uppercase", subColor)}>
          Kementerian Komdigi
        </span>
      </div>
    </div>
  );
}