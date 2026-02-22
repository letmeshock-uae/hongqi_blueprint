"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { VibeButton } from "@/components/shared/vibe-button";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { models } from "@/lib/data";

const IN_STOCK = [
  {
    id: "stock-1",
    modelId: "h9",
    trim: "Executive Premium",
    year: 2024,
    color: "Imperial Red",
    interior: "Black Nappa",
    vin: "LZF**********1298",
    price: 6150000,
  },
  {
    id: "stock-2",
    modelId: "h9",
    trim: "Elegance Base",
    year: 2024,
    color: "Obsidian Black",
    interior: "Brown Leather",
    vin: "LZF**********4492",
    price: 5800000,
  },
  {
    id: "stock-3",
    modelId: "e-hs9",
    trim: "Flagship AWD",
    year: 2024,
    color: "Glacier White",
    interior: "White Leather",
    vin: "WH1**********9382",
    price: 8990000,
  },
  {
    id: "stock-4",
    modelId: "e-hs9",
    trim: "Premium RWD",
    year: 2024,
    color: "Emerald Green",
    interior: "Black Nappa",
    vin: "WH1**********2115",
    price: 7500000,
  }
];

export default function AvailablePage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-20 md:px-8 border-b border-glass-stroke overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div {...FADE_IN_UP}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-technical mb-3 text-primary uppercase tracking-widest">Автомобили в наличии</p>
                <h1 className="text-tight text-4xl font-bold text-foreground md:text-6xl">
                  Готовы к <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Выдаче</span>
                </h1>
              </div>
              <div className="flex gap-4">
                <select className="bg-glass-bg border border-glass-stroke rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary outline-none">
                  <option value="">Все модели</option>
                  <option value="h9">H9</option>
                  <option value="e-hs9">E-HS9</option>
                </select>
                <VibeButton variant="glass" className="h-[46px]">Сортировка</VibeButton>
              </div>
            </div>
          </motion.div>

          {/* Filters / Navigation */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none border-b border-glass-stroke">
            <button className="px-4 py-2 border-b-2 border-primary text-foreground font-medium whitespace-nowrap">Все авто ({IN_STOCK.length})</button>
            <button className="px-4 py-2 border-b-2 border-transparent text-muted hover:text-foreground whitespace-nowrap">Седаны (2)</button>
            <button className="px-4 py-2 border-b-2 border-transparent text-muted hover:text-foreground whitespace-nowrap">Кроссоверы (2)</button>
            <button className="px-4 py-2 border-b-2 border-transparent text-muted hover:text-foreground whitespace-nowrap">Электро (2)</button>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-8 bg-surface min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {IN_STOCK.map((item) => {
              const modelData = models.find(m => m.id === item.modelId);
              if (!modelData) return null;

              return (
                <motion.div key={item.id} variants={STAGGER_ITEM} className="glass-card overflow-hidden rounded-2xl flex flex-col md:flex-row transition-all hover:border-primary/50 group">
                  <div className="relative w-full md:w-80 h-48 md:h-auto overflow-hidden bg-background">
                    <Image
                      src={modelData.heroImage}
                      alt={modelData.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{modelData.name} <span className="text-muted font-normal text-lg">{item.trim}</span></h3>
                        <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">В наличии</span>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div>
                          <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">Год выпуска</p>
                          <p className="text-sm font-medium text-foreground">{item.year}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">Цвет кузова</p>
                          <p className="text-sm font-medium text-foreground flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full border border-glass-stroke" style={{ background: item.color.includes('Red') ? '#8C0000' : item.color.includes('White') ? '#FFFFFF' : item.color.includes('Green') ? '#1C352D' : '#0A0A0A' }} />
                            {item.color}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">Интерьер</p>
                          <p className="text-sm font-medium text-foreground">{item.interior}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted mb-1 uppercase tracking-widest text-technical">VIN</p>
                          <p className="text-sm font-medium font-mono text-muted">{item.vin}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-glass-stroke pt-6 mt-6">
                      <div className="mb-4 sm:mb-0 text-center sm:text-left">
                        <p className="text-2xl font-bold text-foreground">{formatPrice(item.price)}</p>
                        <p className="text-xs text-muted mt-1">Возможна покупка в кредит и Trade-In</p>
                      </div>
                      <div className="flex gap-4 w-full sm:w-auto">
                        <Link href="#reserve" className="flex-1 sm:flex-none">
                          <VibeButton variant="primary" className="w-full">Забронировать</VibeButton>
                        </Link>
                        <Link href="#dealer" className="flex-1 sm:flex-none">
                          <VibeButton variant="glass" className="w-full">Дилер</VibeButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
