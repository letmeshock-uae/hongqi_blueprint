import { create } from "zustand";
import type { ConfiguratorState } from "@/types";

export const useConfigurator = create<ConfiguratorState>((set) => ({
  selectedColorId: null,
  selectedTrimId: null,
  selectedWheelId: null,
  setColor: (id) => set({ selectedColorId: id }),
  setTrim: (id) => set({ selectedTrimId: id }),
  setWheel: (id) => set({ selectedWheelId: id }),
  reset: () => set({ selectedColorId: null, selectedTrimId: null, selectedWheelId: null }),
}));
