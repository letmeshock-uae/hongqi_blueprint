import type { VehicleModel } from "@/types";

export const models: VehicleModel[] = [
  {
    id: "h9",
    slug: "h9",
    name: "Hongqi H9",
    series: "H",
    basePrice: 5780000,
    tagline: "The Art of Presidential Luxury",
    heroImage: "/images/h9-hero.jpg",
    colors: [
      { id: "c1", name: "Obsidian Black", hex: "#0A0A0A", image: "/images/h9-black.jpg" },
      { id: "c2", name: "Imperial Red", hex: "#8C0000", image: "/images/h9-red.jpg" },
      { id: "c3", name: "Moonlight Silver", hex: "#C0C0C0", image: "/images/h9-silver.jpg" },
      { id: "c4", name: "Pearl White", hex: "#F5F5F0", image: "/images/h9-white.jpg" },
    ],
    trims: [
      { id: "t1", name: "Comfort", priceAddon: 0, description: "Refined luxury for everyday excellence" },
      { id: "t2", name: "Exclusive", priceAddon: 650000, description: "Elevated craftsmanship and premium materials" },
      { id: "t3", name: "Flagship", priceAddon: 1400000, description: "The pinnacle of Hongqi engineering" },
    ],
    wheels: [
      { id: "w1", name: '19" Classic', image: "/images/wheel-classic.jpg", priceAddon: 0 },
      { id: "w2", name: '20" Sport', image: "/images/wheel-sport.jpg", priceAddon: 150000 },
      { id: "w3", name: '21" Premium', image: "/images/wheel-premium.jpg", priceAddon: 280000 },
    ],
    specs: [
      {
        category: "Performance",
        items: [
          { label: "Engine", value: "3.0L V6 Supercharged" },
          { label: "Power", value: "283 hp / 400 Nm" },
          { label: "0-100 km/h", value: "7.9 s" },
          { label: "Top Speed", value: "200 km/h" },
        ],
      },
      {
        category: "Dimensions",
        items: [
          { label: "Length", value: "5,137 mm" },
          { label: "Width", value: "1,904 mm" },
          { label: "Height", value: "1,493 mm" },
          { label: "Wheelbase", value: "3,060 mm" },
        ],
      },
      {
        category: "Comfort",
        items: [
          { label: "Seats", value: "Nappa Leather, Heated & Ventilated" },
          { label: "Infotainment", value: '12.6" Dual Screens' },
          { label: "Sound System", value: "Bose 16-Speaker Premium" },
          { label: "Climate", value: "4-Zone Automatic" },
        ],
      },
    ],
    gallery: [
      { id: "g1", src: "/images/h9-gallery-1.jpg", alt: "H9 Front View", type: "image" },
      { id: "g2", src: "/images/h9-gallery-2.jpg", alt: "H9 Interior", type: "image" },
      { id: "g3", src: "/images/h9-gallery-3.jpg", alt: "H9 Side Profile", type: "image" },
      { id: "g4", src: "/images/h9-gallery-4.jpg", alt: "H9 Rear View", type: "image" },
    ],
  },
  {
    id: "e-hs9",
    slug: "e-hs9",
    name: "Hongqi E-HS9",
    series: "E",
    basePrice: 6490000,
    tagline: "Electric Grandeur. Redefined.",
    heroImage: "/images/ehs9-hero.jpg",
    colors: [
      { id: "c1", name: "Quantum Black", hex: "#050505", image: "/images/ehs9-black.jpg" },
      { id: "c2", name: "Dynasty Gold", hex: "#B8860B", image: "/images/ehs9-gold.jpg" },
      { id: "c3", name: "Arctic White", hex: "#FAFAFA", image: "/images/ehs9-white.jpg" },
    ],
    trims: [
      { id: "t1", name: "Standard Range", priceAddon: 0, description: "460 km range, dual motor AWD" },
      { id: "t2", name: "Long Range", priceAddon: 900000, description: "690 km range, enhanced battery" },
    ],
    wheels: [
      { id: "w1", name: '21" Aero', image: "/images/wheel-aero.jpg", priceAddon: 0 },
      { id: "w2", name: '22" Executive', image: "/images/wheel-exec.jpg", priceAddon: 220000 },
    ],
    specs: [
      {
        category: "Performance",
        items: [
          { label: "Powertrain", value: "Dual Motor AWD" },
          { label: "Power", value: "405 kW (551 hp)" },
          { label: "0-100 km/h", value: "4.9 s" },
          { label: "Top Speed", value: "200 km/h" },
        ],
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery", value: "120 kWh" },
          { label: "Range (NEDC)", value: "690 km" },
          { label: "Charging (DC)", value: "30 min (10-80%)" },
          { label: "Charging (AC)", value: "10 hours (0-100%)" },
        ],
      },
      {
        category: "Dimensions",
        items: [
          { label: "Length", value: "5,209 mm" },
          { label: "Width", value: "2,010 mm" },
          { label: "Height", value: "1,731 mm" },
          { label: "Wheelbase", value: "3,110 mm" },
        ],
      },
    ],
    gallery: [
      { id: "g1", src: "/images/ehs9-gallery-1.jpg", alt: "E-HS9 Front View", type: "image" },
      { id: "g2", src: "/images/ehs9-gallery-2.jpg", alt: "E-HS9 Interior", type: "image" },
      { id: "g3", src: "/images/ehs9-gallery-3.jpg", alt: "E-HS9 Side Profile", type: "image" },
    ],
  },
];

export function getModelBySlug(slug: string): VehicleModel | undefined {
  return models.find((m) => m.slug === slug);
}

export function getAllModelSlugs(): string[] {
  return models.map((m) => m.slug);
}
