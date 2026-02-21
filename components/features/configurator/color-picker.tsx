"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useConfigurator } from "@/hooks/use-configurator";
import type { VehicleColor } from "@/types";
import { STAGGER_CONTAINER, STAGGER_ITEM, VIBE_SPRING } from "@/lib/motion";

interface ColorPickerProps {
  colors: VehicleColor[];
}

export function ColorPicker({ colors }: ColorPickerProps) {
  const { selectedColorId, setColor } = useConfigurator();
  const active = selectedColorId ?? colors[0]?.id;

  return (
    <div>
      <p className="text-technical mb-4 text-muted">Exterior Color</p>
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-3"
      >
        {colors.map((color) => (
          <motion.button
            key={color.id}
            variants={STAGGER_ITEM}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={VIBE_SPRING}
            onClick={() => setColor(color.id)}
            className={cn(
              "group relative h-10 w-10 rounded-full border-2 transition-all",
              active === color.id
                ? "border-primary shadow-vibe-glow"
                : "border-glass-stroke hover:border-glass-stroke-bright"
            )}
            style={{ backgroundColor: color.hex }}
            aria-label={color.name}
          >
            {active === color.id && (
              <motion.div
                layoutId="color-ring"
                className="absolute -inset-1 rounded-full border-2 border-primary"
                transition={VIBE_SPRING}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
      <p className="mt-3 text-sm text-muted">
        {colors.find((c) => c.id === active)?.name ?? ""}
      </p>
    </div>
  );
}
