export interface VehicleModel {
  id: string;
  slug: string;
  name: string;
  series: "H" | "HS" | "E" | "L";
  basePrice: number;
  tagline: string;
  heroImage: string;
  heroVideo?: string;
  colors: VehicleColor[];
  trims: VehicleTrim[];
  wheels: VehicleWheel[];
  specs: SpecCategory[];
  gallery: MediaItem[];
}

export interface VehicleColor {
  id: string;
  name: string;
  hex: string;
  image: string;
}

export interface VehicleTrim {
  id: string;
  name: string;
  priceAddon: number;
  description: string;
}

export interface VehicleWheel {
  id: string;
  name: string;
  image: string;
  priceAddon: number;
}

export interface SpecCategory {
  category: string;
  items: SpecItem[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface MediaItem {
  id: string;
  src: string;
  alt: string;
  type: "image" | "video";
}

export interface Inquiry {
  name: string;
  phone: string;
  preferredDealer?: string;
  modelId: string;
  message?: string;
}

export interface ConfiguratorState {
  selectedColorId: string | null;
  selectedTrimId: string | null;
  selectedWheelId: string | null;
  setColor: (id: string) => void;
  setTrim: (id: string) => void;
  setWheel: (id: string) => void;
  reset: () => void;
}
