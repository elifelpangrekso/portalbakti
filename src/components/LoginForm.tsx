import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight, HelpCircle, UserPlus } from "lucide-react";

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
  };

  return (
    <div className={cn("bg-card rounded-xl shadow-elegant-lg p-7", className)}>
      {/* Header */}
      <div className="text-center mb-7">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy/5 mb-4">
          <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Portal Login
        </h2>
        <p className="text-muted-foreground text-sm mt-1.5">
          Masuk untuk mengakses layanan
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email / Username
          </Label>
          <Input
            id="email"
            type="text"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 bg-muted/50 border-border focus:border-emerald focus:ring-emerald/20 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 bg-muted/50 border-border focus:border-emerald focus:ring-emerald/20 pr-11 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-emerald focus:ring-emerald/20" />
            <span className="text-muted-foreground text-xs">Ingat saya</span>
          </label>
          <a href="#" className="text-emerald hover:text-emerald-dark transition-colors text-xs font-medium">
            Lupa Password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-navy hover:bg-navy-dark text-white font-medium shadow-elegant transition-all duration-200 group"
        >
          Masuk
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-card px-3 text-xs text-muted-foreground">atau</span>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="space-y-2.5">
        <Button
          variant="outline"
          className="w-full h-10 border-border hover:bg-muted/50 hover:border-navy/20 transition-all text-sm"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Daftar Akun Baru
        </Button>
        <Button
          variant="ghost"
          className="w-full h-10 text-muted-foreground hover:text-foreground text-sm"
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Bantuan
        </Button>
      </div>

      {/* Footer Note */}
      <p className="mt-6 text-center text-[10px] text-muted-foreground leading-relaxed">
        Dengan login, Anda menyetujui{" "}
        <a href="#" className="text-navy hover:underline">
          Syarat & Ketentuan
        </a>{" "}
        yang berlaku
      </p>
    </div>
  );
}