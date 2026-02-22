"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { useConfigurator } from "@/hooks/use-configurator";
import type { VehicleWheel } from "@/types";
import { STAGGER_CONTAINER, STAGGER_ITEM, VIBE_SPRING } from "@/lib/motion";

interface WheelSelectorProps {
  wheels: VehicleWheel[];
}

export function WheelSelector({ wheels }: WheelSelectorProps) {
  const { selectedWheelId, setWheel } = useConfigurator();
  const active = selectedWheelId ?? wheels[0]?.id;

  return (
    <div>
      <p className="text-technical mb-4 text-muted">Wheels</p>
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="initial"
        animate="animate"
        className="grid grid-cols-3 gap-3"
      >
        {wheels.map((wheel) => (
          <motion.button
            key={wheel.id}
            variants={STAGGER_ITEM}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={VIBE_SPRING}
            onClick={() => setWheel(wheel.id)}
            className={cn(
              "glass-card flex flex-col items-center gap-2 rounded-2xl p-4 transition-all",
              active === wheel.id
                ? "border-primary shadow-vibe-glow"
                : "hover:border-glass-stroke-bright"
            )}
          >
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-surface ring-1 ring-glass-stroke/50">
              {wheel.image ? (
                <Image
                  src={wheel.image}
                  alt={wheel.name}
                  fill
                  className="object-cover scale-110"
                />
              ) : (
                <span className="text-2xl">&#9673;</span>
              )}
            </div>
            <span className="text-xs font-medium text-foreground">{wheel.name}</span>
            {wheel.priceAddon > 0 && (
              <span className="text-xs text-muted">+{formatPrice(wheel.priceAddon)}</span>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
