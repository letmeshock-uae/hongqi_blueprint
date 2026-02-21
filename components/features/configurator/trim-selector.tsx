"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { useConfigurator } from "@/hooks/use-configurator";
import type { VehicleTrim } from "@/types";
import { STAGGER_CONTAINER, STAGGER_ITEM, VIBE_SPRING } from "@/lib/motion";

interface TrimSelectorProps {
  trims: VehicleTrim[];
}

export function TrimSelector({ trims }: TrimSelectorProps) {
  const { selectedTrimId, setTrim } = useConfigurator();
  const active = selectedTrimId ?? trims[0]?.id;

  return (
    <div>
      <p className="text-technical mb-4 text-muted">Trim Level</p>
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-3"
      >
        {trims.map((trim) => (
          <motion.button
            key={trim.id}
            variants={STAGGER_ITEM}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={VIBE_SPRING}
            onClick={() => setTrim(trim.id)}
            className={cn(
              "glass-card rounded-2xl p-4 text-left transition-all",
              active === trim.id
                ? "border-primary shadow-vibe-glow"
                : "hover:border-glass-stroke-bright"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">{trim.name}</span>
              {trim.priceAddon > 0 && (
                <span className="text-sm text-muted">
                  +{formatPrice(trim.priceAddon)}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted">{trim.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
