import { cn } from "@/lib/utils";

interface DecorativePatternsProps {
  className?: string;
  position?: "top-right" | "bottom-left" | "both";
}

export function DecorativePatterns({ className, position = "both" }: DecorativePatternsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Top Right Decorations */}
      {(position === "top-right" || position === "both") && (
        <div className="absolute top-0 right-0">
          {/* Large Gold Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/20 animate-float" />
          {/* Blue Ring */}
          <div className="absolute top-12 right-32 w-40 h-40 rounded-full border-4 border-navy-light/30" />
          {/* Small Accent Circle */}
          <div className="absolute top-48 right-8 w-20 h-20 rounded-full bg-navy/10" />
          {/* Decorative Lines */}
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-20" viewBox="0 0 100 100">
            <line x1="0" y1="20" x2="80" y2="20" stroke="hsl(215, 60%, 25%)" strokeWidth="2" />
            <line x1="0" y1="35" x2="60" y2="35" stroke="hsl(40, 95%, 55%)" strokeWidth="2" />
            <line x1="0" y1="50" x2="40" y2="50" stroke="hsl(215, 60%, 25%)" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* Bottom Left Decorations */}
      {(position === "bottom-left" || position === "both") && (
        <div className="absolute bottom-0 left-0">
          {/* Large Blue Circle */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-navy/10" />
          {/* Gold Ring */}
          <div className="absolute bottom-20 left-24 w-32 h-32 rounded-full border-4 border-gold/40" />
          {/* Decorative Dots */}
          <div className="absolute bottom-40 left-8 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-navy/20" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
