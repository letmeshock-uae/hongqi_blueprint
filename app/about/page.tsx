"use client";

import { motion } from "framer-motion";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";

const timeline = [
  {
    year: "1958",
    title: "Основание Легенды",
    desc: "Выпуск первого легкового автомобиля класса люкс в Китае, созданного специально для высшего партийного руководства."
  },
  {
    year: "1981",
    title: "Технологический Прорыв",
    desc: "Разработка новых двигателей и платформ, утверждение статуса национального символа автомобилестроения."
  },
  {
    year: "2018",
    title: "Новая Эра",
    desc: "Презентация революционной концепции дизайна и глобальной стратегии развития. Переход на инновационные платформы."
  },
  {
    year: "2022+",
    title: "Электрическое Будущее",
    desc: "Запуск линейки полностью электрических внедорожников премиум-класса и выход на передовые международные рынки."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-20 md:px-8 border-b border-glass-stroke overflow-hidden min-h-[60vh] flex flex-col justify-center">
        {/* SVG background placeholder since image gen quota was reached */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050505" stopOpacity="0" />
              <stop offset="100%" stopColor="#050505" stopOpacity="1" />
            </linearGradient>
            <rect width="100" height="100" fill="url(#fade)" />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Наследие и Будущее</p>
            <h1 className="text-tight text-5xl font-bold text-foreground md:text-7xl mb-6">
              Hongqi: <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Красное Знамя</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Бренд с более чем 60-летней историей, являющийся эталоном премиального автомобилестроения Китая. От автомобилей для государственных лидеров до глобального символа роскоши и передовых технологий.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 bg-surface border-b border-glass-stroke">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div {...FADE_IN_UP} transition={{ delay: 0.1 }} className="glass-card p-10 rounded-3xl">
              <h3 className="text-6xl font-bold text-foreground mb-4 font-mono">1958</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Год основания</p>
              <p className="text-muted text-sm leading-relaxed">Начало производства автомобилей представительского класса в Чанчуне.</p>
            </motion.div>
            <motion.div {...FADE_IN_UP} transition={{ delay: 0.2 }} className="glass-card p-10 rounded-3xl">
              <h3 className="text-6xl font-bold text-foreground mb-4 font-mono">1M+</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Владельцев</p>
              <p className="text-muted text-sm leading-relaxed">Более миллиона состоятельных клиентов, выбравших исключительное качество.</p>
            </motion.div>
            <motion.div {...FADE_IN_UP} transition={{ delay: 0.3 }} className="glass-card p-10 rounded-3xl">
              <h3 className="text-6xl font-bold text-foreground mb-4 font-mono">14</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Стран присутствия</p>
              <p className="text-muted text-sm leading-relaxed">Успешная глобальная экспансия на рынки Европы, Ближнего Востока и Азии.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 md:px-8 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[100px]" />

        <div className="mx-auto max-w-4xl relative z-10">
          <motion.div {...FADE_IN_UP} className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl mb-4">Хронология Успеха</h2>
            <p className="text-muted text-lg">Ключевые вехи в истории Hongqi</p>
          </motion.div>

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {timeline.map((item, i) => (
              <motion.div key={i} variants={STAGGER_ITEM} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                <div className="md:w-1/4 shrink-0">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{item.year}</h3>
                </div>
                <div className="relative pb-12 md:pb-0 md:border-l md:border-glass-stroke md:pl-12 flex-1">
                  <div className="hidden md:block absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors group-hover:shadow-vibe-glow" />
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
