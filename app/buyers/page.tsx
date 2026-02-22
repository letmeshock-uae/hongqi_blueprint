"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VibeButton } from "@/components/shared/vibe-button";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";

const services = [
  {
    title: "Финансовые программы",
    desc: "Индивидуальные условия кредитования и лизинга от банков-партнеров. Ставка от 0,01% на срок до 7 лет с минимальным первоначальным взносом.",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  },
  {
    title: "Программа Trade-In",
    desc: "Обменяйте свой текущий автомобиль на новый Hongqi с дополнительной выгодой до 500 000 ₽. Быстрая и справедливая оценка.",
    icon: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
  },
  {
    title: "Корпоративным клиентам",
    desc: "Специализированные решения для бизнес-парков. Эксклюзивные квоты, персональный менеджер и приоритетное сервисное обслуживание.",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }
];

export default function BuyersPage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-20 md:px-8 border-b border-glass-stroke overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div {...FADE_IN_UP} className="max-w-3xl">
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Программы покупки</p>
            <h1 className="text-tight text-4xl font-bold text-foreground md:text-6xl mb-6">
              Ваш путь к <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Hongqi</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Мы предлагаем эксклюзивные финансовые инструменты и привилегии, чтобы процесс приобретения вашего нового автомобиля был таким же безупречным, как и само вождение.
            </p>
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
            className="grid gap-8 md:grid-cols-3"
          >
            {services.map((item) => (
              <motion.div key={item.title} variants={STAGGER_ITEM} className="glass-card p-10 rounded-3xl transition-transform duration-500 hover:-translate-y-2 hover:border-primary/50 group">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{item.desc}</p>
                <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-primary uppercase tracking-wider group-hover:gap-2 transition-all">
                  Узнать подробности
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 p-10 md:p-16 glass-card rounded-3xl border border-glass-stroke text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-surface to-primary/5"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Готовы сделать следующий шаг?</h2>
              <p className="text-muted">Заполните форму, и наш персональный менеджер свяжется с вами для обсуждения индивидуальных условий приобретения.</p>
            </div>
            <div className="flex w-full md:w-auto shrink-0">
              <Link href="#contact" className="w-full">
                <VibeButton variant="primary" size="lg" className="w-full md:w-auto">Получить предложение</VibeButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
