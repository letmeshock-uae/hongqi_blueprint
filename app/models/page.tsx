"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { models } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { VibeButton } from "@/components/shared/vibe-button";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";

export default function ModelsPage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-20 md:px-8 border-b border-glass-stroke overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Каталог</p>
            <h1 className="text-tight text-5xl font-bold text-foreground md:text-7xl">
              Модельный <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Ряд</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Исследуйте исключительную линейку автомобилей Hongqi. От премиальных седанов до передовых электрических внедорожников.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 bg-surface">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2"
          >
            {models.map((model) => (
              <motion.div key={model.id} variants={STAGGER_ITEM} className="group flex flex-col glass-card overflow-hidden rounded-3xl border border-glass-stroke shadow-vibe-sm transition-all duration-500 hover:border-primary/50 hover:shadow-vibe-lg">

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
                  <Image
                    src={model.heroImage}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-background/50 backdrop-blur-md border border-glass-stroke px-3 py-1 text-xs font-semibold text-foreground">
                      {model.series} Series
                    </span>
                    {(model.specs.find(s => s.category === "Performance")?.items.find(i => i.label.includes("Power"))?.value.includes("kW") || false) && (
                      <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                        Электро
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-foreground text-tight mb-2 group-hover:text-primary transition-colors">{model.name}</h2>
                    <p className="text-sm text-muted line-clamp-2">{model.tagline}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-glass-stroke my-auto">
                    <div>
                      <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">Ускорение 0-100</p>
                      <p className="text-lg font-bold text-foreground">
                        {model.specs.find(s => s.category === "Performance")?.items.find(i => i.label === "0-100 km/h")?.value || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">Мощность</p>
                      <p className="text-lg font-bold text-foreground line-clamp-1">
                        {model.specs.find(s => s.category === "Performance")?.items.find(i => i.label.includes("Power"))?.value || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-muted mb-1 text-technical">От</p>
                      <p className="text-2xl font-bold text-foreground">{formatPrice(model.basePrice)}</p>
                    </div>
                    <Link href={`/models/${model.slug}`}>
                      <VibeButton variant="primary">Обзор модели</VibeButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
