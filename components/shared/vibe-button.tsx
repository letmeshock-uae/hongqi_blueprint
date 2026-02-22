"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VibeButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function VibeButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: VibeButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300",
        // Sizes
        size === "sm" && "rounded-xl px-4 py-2 text-sm",
        size === "md" && "rounded-2xl px-6 py-3 text-sm",
        size === "lg" && "rounded-2xl px-8 py-4 text-base",
        // Variants
        variant === "primary" &&
        "bg-primary text-background hover:bg-primary-light shadow-vibe-glow gold-shimmer",
        variant === "glass" &&
        "glass-card text-foreground hover:border-glass-stroke-bright hover:shadow-vibe-glow",
        variant === "ghost" &&
        "text-muted hover:text-foreground hover:bg-white/5",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
