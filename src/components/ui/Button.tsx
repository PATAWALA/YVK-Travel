"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "wa" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-night-700 text-white hover:bg-night-900 shadow-lg shadow-night-700/20",
  wa: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/30",
  ghost: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur",
  gold: "bg-gradient-to-r from-gold-400 to-gold-500 text-night-900 hover:brightness-105 shadow-lg shadow-gold-500/30",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-base md:text-lg",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";