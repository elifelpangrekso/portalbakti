import { cn } from "@/lib/utils";

interface DecorativePatternsProps {
  className?: string;
}

export function DecorativePatterns({ className }: DecorativePatternsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Top Right Accent */}
      <div className="absolute -top-20 -right-20 w-80 h-80">
        <div className="absolute inset-0 bg-emerald/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--emerald))" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom Left Accent */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96">
        <div className="absolute inset-0 bg-navy/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle line accents */}
      <svg className="absolute top-20 right-10 w-32 h-32 opacity-10" viewBox="0 0 100 100">
        <line x1="0" y1="25" x2="100" y2="25" stroke="hsl(var(--navy))" strokeWidth="1" />
        <line x1="0" y1="50" x2="80" y2="50" stroke="hsl(var(--emerald))" strokeWidth="1" />
        <line x1="0" y1="75" x2="60" y2="75" stroke="hsl(var(--navy))" strokeWidth="0.5" />
      </svg>

      {/* Corner accent */}
      <div className="absolute bottom-10 left-10 opacity-20">
        <div className="w-16 h-16 border-l-2 border-b-2 border-emerald" />
      </div>
    </div>
  );
}