"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { getModelBySlug } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { FADE_IN_UP } from "@/lib/motion";
import { VibeConfigurator } from "@/components/features/configurator/vibe-configurator";
import { SpecsAccordion } from "@/components/features/specs/specs-accordion";
import { MediaParallax } from "@/components/features/gallery/media-parallax";
import { LeadModal } from "@/components/features/lead-modal";

export default function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const model = getModelBySlug(slug);

  if (!model) {
    notFound();
  }

  return (
    <>
      {/* Model Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden px-6 pb-16 md:px-8 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={model.heroImage}
            alt={`${model.name} Hero`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <p className="text-technical mb-3 text-primary">
            {model.series} Series
          </p>
          <h1 className="text-tight text-5xl font-bold text-foreground md:text-7xl">
            {model.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{model.tagline}</p>
          <div className="mt-6 flex items-center gap-6">
            <div>
              <p className="text-xs text-muted">Starting from</p>
              <p className="text-2xl font-bold text-foreground">
                {formatPrice(model.basePrice)}
              </p>
            </div>
            <div className="h-8 w-px bg-glass-stroke" />
            <div>
              <p className="text-xs text-muted">Colors</p>
              <div className="mt-1 flex gap-1.5">
                {model.colors.map((c) => (
                  <div
                    key={c.id}
                    className="h-4 w-4 rounded-full border border-glass-stroke"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Configurator */}
      <VibeConfigurator model={model} />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-glass-stroke to-transparent" />
      </div>

      {/* Specs */}
      <SpecsAccordion specs={model.specs} />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-glass-stroke to-transparent" />
      </div>

      {/* Gallery */}
      <MediaParallax items={model.gallery} />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-glass-stroke to-transparent" />
      </div>

      {/* Lead Form */}
      <LeadModal modelId={model.id} modelName={model.name} />
    </>
  );
}
