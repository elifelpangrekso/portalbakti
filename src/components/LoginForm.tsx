import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn, HelpCircle, UserPlus } from "lucide-react";

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login attempt:", { email });
  };

  return (
    <div className={cn("bg-card rounded-xl shadow-portal p-8", className)}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 mb-4">
          <LogIn className="w-8 h-8 text-navy" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Login Portal
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Silahkan login untuk mengakses layanan
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
            placeholder="Masukkan email atau username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary/50 border-border focus:border-navy focus:ring-navy/20"
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
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-secondary/50 border-border focus:border-navy focus:ring-navy/20 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-navy focus:ring-navy/20" />
            <span className="text-muted-foreground">Ingat saya</span>
          </label>
          <a href="#" className="text-navy hover:text-gold transition-colors font-medium">
            Lupa Password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-navy hover:bg-navy-dark text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <LogIn className="w-5 h-5 mr-2" />
          Masuk
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-card px-4 text-sm text-muted-foreground">atau</span>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full h-11 border-border hover:bg-secondary hover:border-navy/30 transition-all"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Daftar Akun Baru
        </Button>
        <Button
          variant="ghost"
          className="w-full h-11 text-muted-foreground hover:text-foreground"
        >
          <HelpCircle className="w-5 h-5 mr-2" />
          Bantuan
        </Button>
      </div>

      {/* Footer Note */}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Dengan login, Anda menyetujui{" "}
        <a href="#" className="text-navy hover:underline">
          Syarat & Ketentuan
        </a>{" "}
        yang berlaku
      </p>
    </div>
  );
}
