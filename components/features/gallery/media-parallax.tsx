"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import type { MediaItem } from "@/types";

interface MediaParallaxProps {
  items: MediaItem[];
}

export function MediaParallax({ items }: MediaParallaxProps) {
  return (
    <section className="px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Every Angle, Perfected"
          description="Explore the craftsmanship from every perspective."
        />

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={STAGGER_ITEM}
              className={`group glass-card overflow-hidden rounded-3xl ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-surface transition-transform duration-700 group-hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-2 text-muted">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-30"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                      <span className="text-xs opacity-50">{item.alt}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
