"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { VibeButton } from "@/components/shared/vibe-button";
import { models } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-technical mb-6 text-primary">
            The New Standard of Luxury
          </p>
          <h1 className="text-tight text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
            Born to
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Command
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl">
            Experience the fusion of heritage craftsmanship and future-forward
            innovation. Hongqi redefines what a luxury automobile can be.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/models/h9">
              <VibeButton variant="primary" size="lg">
                Explore Models
              </VibeButton>
            </Link>
            <Link href="#models">
              <VibeButton variant="glass" size="lg">
                View Lineup
              </VibeButton>
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs">Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Model Lineup */}
      <section id="models" className="px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary">The Lineup</p>
            <h2 className="text-tight text-3xl font-bold text-foreground md:text-5xl">
              Choose Your Icon
            </h2>
          </motion.div>

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {models.map((model) => (
              <motion.div key={model.id} variants={STAGGER_ITEM}>
                <Link href={`/models/${model.slug}`} className="group block">
                  <div className="glass-card overflow-hidden rounded-3xl transition-all duration-500 hover:border-glass-stroke-bright hover:shadow-vibe-lg">
                    {/* Placeholder hero image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
                      <div
                        className="flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${model.colors[0]?.hex ?? "#0A0A0A"} 0%, #050505 100%)`,
                        }}
                      >
                        <span className="text-4xl font-bold text-tight text-white/10 md:text-6xl">
                          {model.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-technical text-primary">
                            {model.series} Series
                          </p>
                          <h3 className="mt-1 text-2xl font-bold text-tight text-foreground">
                            {model.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted">
                            {model.tagline}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted">Starting from</p>
                          <p className="text-lg font-bold text-foreground">
                            {formatPrice(model.basePrice)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                        <span>Configure & Explore</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: "Heritage",
                description:
                  "Over 60 years of Chinese automotive excellence, serving heads of state and industry leaders worldwide.",
                icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
              },
              {
                title: "Innovation",
                description:
                  "Cutting-edge electric powertrains, autonomous driving capabilities, and connected vehicle technology.",
                icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
              },
              {
                title: "Craftsmanship",
                description:
                  "Hand-stitched Nappa leather, precision-machined controls, and bespoke finish options.",
                icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={STAGGER_ITEM}
                className="glass-card rounded-3xl p-8 md:p-10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
