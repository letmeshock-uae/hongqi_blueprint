"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useConfigurator } from "@/hooks/use-configurator";
import { formatPrice } from "@/lib/utils";
import { FADE_IN_UP } from "@/lib/motion";
import { ColorPicker } from "./color-picker";
import { TrimSelector } from "./trim-selector";
import { WheelSelector } from "./wheel-selector";
import { SectionHeading } from "@/components/shared/section-heading";
import type { VehicleModel } from "@/types";

interface VibeConfiguratorProps {
  model: VehicleModel;
}

export function VibeConfigurator({ model }: VibeConfiguratorProps) {
  const { selectedColorId, selectedTrimId, selectedWheelId, setColor, setTrim, setWheel } =
    useConfigurator();

  useEffect(() => {
    if (!selectedColorId && model.colors[0]) setColor(model.colors[0].id);
    if (!selectedTrimId && model.trims[0]) setTrim(model.trims[0].id);
    if (!selectedWheelId && model.wheels[0]) setWheel(model.wheels[0].id);
  }, [model, selectedColorId, selectedTrimId, selectedWheelId, setColor, setTrim, setWheel]);

  const trimAddon = model.trims.find((t) => t.id === selectedTrimId)?.priceAddon ?? 0;
  const wheelAddon = model.wheels.find((w) => w.id === selectedWheelId)?.priceAddon ?? 0;
  const totalPrice = model.basePrice + trimAddon + wheelAddon;

  const activeColor = model.colors.find((c) => c.id === selectedColorId);

  return (
    <section id="configurator" className="px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Configure"
          title="Build Your Own"
          description="Personalize every detail to match your vision."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Preview Area */}
          <motion.div
            {...FADE_IN_UP}
            className="glass-card relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl lg:col-span-3"
          >
            {activeColor?.image ? (
              <Image
                src={activeColor.image}
                alt={`${model.name} in ${activeColor.name}`}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center text-6xl font-bold text-tight"
                style={{
                  background: `linear-gradient(135deg, ${activeColor?.hex ?? "#0A0A0A"} 0%, #050505 100%)`,
                }}
              >
                <span className="opacity-20">{model.name}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Controls */}
          <motion.div
            {...FADE_IN_UP}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            <ColorPicker colors={model.colors} />
            <TrimSelector trims={model.trims} />
            <WheelSelector wheels={model.wheels} />

            {/* Price Summary */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-technical mb-2 text-muted">Total Price</p>
              <p className="text-tight text-3xl font-bold text-foreground">
                {formatPrice(totalPrice)}
              </p>
              <p className="mt-1 text-sm text-muted">Starting from</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
