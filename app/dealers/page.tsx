"use client";

import { motion } from "framer-motion";
import { VibeButton } from "@/components/shared/vibe-button";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { useState } from "react";

const DEALERS = [
  {
    city: "Москва",
    name: "Авилон Hongqi",
    address: "Волгоградский проспект, 41/1",
    phone: "+7 495 730-11-11",
    hours: "Ежедневно 9:00 - 21:40",
    features: ["Продажа", "Сервис", "Trade-In", "Кредитование"]
  },
  {
    city: "Москва",
    name: "Панавто Hongqi",
    address: "50-й км МКАД, внешняя сторона",
    phone: "+7 495 790-77-77",
    hours: "Ежедневно 9:00 - 21:00",
    features: ["Продажа", "Сервис", "Trade-In", "Тест-драйв"]
  },
  {
    city: "Санкт-Петербург",
    name: "Автодом Hongqi Пулково",
    address: "Пулковское шоссе, 14АС",
    phone: "+7 812 500-50-50",
    hours: "Ежедневно 9:00 - 21:00",
    features: ["Продажа", "Сервис", "Кузовной ремонт"]
  },
  {
    city: "Казань",
    name: "ТТС Hongqi Казань",
    address: "Проспект Победы, 194",
    phone: "+7 843 200-00-00",
    hours: "Ежедневно 8:00 - 20:00",
    features: ["Продажа", "Сервис", "Кредитование"]
  }
];

export default function DealersPage() {
  const [cityFilter, setCityFilter] = useState("Все города");

  const cities = ["Все города", ...Array.from(new Set(DEALERS.map(d => d.city)))];

  const filteredDealers = cityFilter === "Все города"
    ? DEALERS
    : DEALERS.filter(d => d.city === cityFilter);

  return (
    <>
      <section className="relative px-6 pt-32 pb-12 md:px-8 border-b border-glass-stroke overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Сеть дилеров</p>
            <h1 className="text-tight text-4xl font-bold text-foreground md:text-6xl">
              Официальные <span className="text-muted">Центры</span>
            </h1>
          </motion.div>
          <motion.div {...FADE_IN_UP} transition={{ delay: 0.1 }}>
            <div className="flex bg-glass-bg border border-glass-stroke rounded-xl overflow-hidden p-1">
              <button className="px-6 py-2 rounded-lg bg-white/10 text-foreground font-medium text-sm">Список</button>
              <button className="px-6 py-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 font-medium text-sm transition-colors">Карта</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-8 bg-surface border-b border-glass-stroke">
        <div className="mx-auto max-w-7xl flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setCityFilter(city)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cityFilter === city
                  ? "bg-primary text-background border border-primary"
                  : "bg-transparent border border-glass-stroke text-muted hover:text-foreground hover:border-glass-stroke-bright"
                }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:py-20 md:px-8 bg-surface min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredDealers.map((dealer, index) => (
              <motion.div key={index} variants={STAGGER_ITEM} className="glass-card p-8 rounded-3xl flex flex-col h-full group transition-colors hover:border-primary/50 hover:shadow-vibe-glow">
                <div className="flex-1">
                  <div className="mb-6">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">{dealer.city}</p>
                    <h2 className="text-2xl font-bold text-foreground">{dealer.name}</h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 text-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-sm leading-relaxed">{dealer.address}</span>
                    </div>

                    <div className="flex items-center gap-4 text-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <a href={`tel:${dealer.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium hover:text-primary transition-colors">{dealer.phone}</a>
                    </div>

                    <div className="flex items-start gap-4 text-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-sm">{dealer.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {dealer.features.map(f => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full border border-glass-stroke bg-white/5 text-muted">{f}</span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <VibeButton variant="primary" className="w-full h-10 text-xs sm:text-sm px-2">Запись в сервис</VibeButton>
                  <VibeButton variant="glass" className="w-full h-10 text-xs sm:text-sm px-2 group-hover:bg-white/5">Маршрут</VibeButton>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
