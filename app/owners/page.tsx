"use client";

import { motion } from "framer-motion";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";

const privileges = [
  {
    title: "Официальная Гарантия",
    desc: "Мы уверены в качестве бензиновых и электрических автомобилей Hongqi. На все новые официально приобретенные автомобили распространяется гарантия 5 лет или 150 000 км пробега.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "Помощь на дороге",
    desc: "Программа круглосуточной поддержки 24/7. Включает бесплатную эвакуацию до ближайшего дилера, техническую помощь на месте, запуск АКБ и подвоз топлива.",
    icon: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2v6h6"
  },
  {
    title: "Официальный Сервис",
    desc: "Техническое обслуживание по высочайшим стандартам бренда. Использование исключительно оригинальных запчастей и сертифицированное диагностическое оборудование.",
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a2 2 0 0 1-2.83-2.83l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.66 3.66z"
  },
  {
    title: "Hongqi Клуб",
    desc: "Закрытое сообщество владельцев. Доступ к эксклюзивным мероприятиям бренда, консьерж-сервису и специальным предложениям от партнеров.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"
  }
];

export default function OwnersPage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-20 md:px-8 border-b border-glass-stroke overflow-hidden bg-background">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Владельцам</p>
            <h1 className="text-tight text-4xl font-bold text-foreground md:text-6xl mb-6">
              Премиальный <br />Сервис
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Приобретая автомобиль Hongqi, вы становитесь частью закрытого клуба, где ваш комфорт и спокойствие стоят на первом месте. Наслаждайтесь каждой поездкой, остальное мы берем на себя.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Служба Поддержки</h3>
            <p className="text-muted text-sm mb-6">Круглосуточная горячая линия для клиентов в России</p>
            <a href="tel:88005112711" className="inline-block text-3xl font-bold text-primary tracking-tight transition-all hover:text-primary-light">
              8 800 511-27-11
            </a>
            <p className="text-muted text-sm mt-4">hongqi-info@hongqi.ru</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 bg-surface">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {privileges.map((item) => (
              <motion.div key={item.title} variants={STAGGER_ITEM} className="glass-card p-10 rounded-3xl group transition-colors hover:border-primary/30 hover:bg-surface/80">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-foreground transition-transform group-hover:scale-110 group-hover:text-primary group-hover:bg-primary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
