"use client";

import { motion } from "framer-motion";
import { FADE_IN_UP } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div {...FADE_IN_UP} className="mb-12 md:mb-16">
      <p className="text-technical mb-3 text-primary">{label}</p>
      <h2 className="text-tight text-3xl font-bold text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
      )}
    </motion.div>
  );
}
