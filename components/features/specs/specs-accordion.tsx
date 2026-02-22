"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FADE_IN_UP, VIBE_SPRING } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SpecCategory } from "@/types";

interface SpecsAccordionProps {
  specs: SpecCategory[];
}

export function SpecsAccordion({ specs }: SpecsAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Specifications"
          title="Technical Excellence"
          description="Engineering precision meets uncompromising luxury."
        />

        <motion.div {...FADE_IN_UP} className="flex flex-col gap-3">
          {specs.map((category, index) => (
            <div
              key={category.category}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-foreground">
                  {category.category}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={VIBE_SPRING}
                  className="text-muted"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="border-t border-glass-stroke px-6 pb-6 pt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <div
                            key={item.label}
                            className={cn(
                              "flex items-center justify-between rounded-xl bg-surface p-4"
                            )}
                          >
                            <span className="text-sm text-muted">
                              {item.label}
                            </span>
                            <span className="text-sm font-medium text-foreground">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
