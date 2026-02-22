"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { VibeButton } from "@/components/shared/vibe-button";
import { models } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main-hero.jpg"
            alt="Hongqi Hero"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-technical mb-6 text-primary tracking-widest uppercase">
            Новый стандарт роскоши
          </p>
          <h1 className="text-tight text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
            Рожденный
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Управлять
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl">
            Оцените слияние исторического мастерства и передовых инноваций. Hongqi переопределяет представление о роскошном автомобиле.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/models/h9">
              <VibeButton variant="primary" size="lg">
                В каталог
              </VibeButton>
            </Link>
            <Link href="#models">
              <VibeButton variant="glass" size="lg">
                Модельный ряд
              </VibeButton>
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs">Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Promotional Banner */}
      <section className="border-y border-glass-stroke bg-surface py-12 px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
              Специальное предложение
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Выгода до 1 000 000 ₽ на Hongqi H9</h2>
            <p className="mt-2 text-muted">При сдаче автомобиля в Trade-In и оформлении кредита до 31 августа.</p>
          </div>
          <Link href="#test-drive">
            <VibeButton variant="primary" className="whitespace-nowrap">
              Узнать подробности
            </VibeButton>
          </Link>
        </div>
      </section>

      {/* Model Lineup */}
      <section id="models" className="px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...FADE_IN_UP}>
            <p className="text-technical mb-3 text-primary uppercase tracking-widest">Модельный ряд</p>
            <h2 className="text-tight text-3xl font-bold text-foreground md:text-5xl">
              Выберите свою икону
            </h2>
          </motion.div>

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {models.map((model) => (
              <motion.div key={model.id} variants={STAGGER_ITEM}>
                <Link href={`/models/${model.slug}`} className="group block">
                  <div className="glass-card overflow-hidden rounded-3xl transition-all duration-500 hover:border-glass-stroke-bright hover:shadow-vibe-lg">
                    {/* Model hero image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface z-0">
                      <Image
                        src={model.heroImage}
                        alt={model.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-technical text-primary">
                            {model.series} Series
                          </p>
                          <h3 className="mt-1 text-2xl font-bold text-tight text-foreground">
                            {model.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted">
                            {model.tagline}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted">Starting from</p>
                          <p className="text-lg font-bold text-foreground">
                            {formatPrice(model.basePrice)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                        <span>Сконфигурировать</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Brand / Heritage */}
      <section className="relative px-6 py-24 md:px-8 md:py-32 overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_IN_UP}
            >
              <p className="text-technical mb-3 text-primary uppercase tracking-widest">Наследие</p>
              <h2 className="text-tight text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Более 60 лет<br />совершенства
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Основанный в 1958 году, бренд Hongqi изначально создавался исключительно для высшего руководства Китая и правительственных чиновников.
                Сегодня Hongqi открывает двери в мир бескомпромиссной роскоши для самых взыскательных клиентов по всему миру, объединяя богатое историческое наследие с передовыми технологиями будущего.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-foreground">1958</p>
                  <p className="mt-2 text-sm text-muted">Год основания бренда</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground">1M+</p>
                  <p className="mt-2 text-sm text-muted">Владельцев по всему миру</p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <VibeButton variant="glass">История Hongqi</VibeButton>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-square w-full lg:aspect-[4/5] overflow-hidden rounded-3xl"
            >
              {/* Fallback pattern instead of image since gen limit reached */}
              <div className="absolute inset-0 bg-surface flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/20">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-glass-stroke rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: "Превосходство",
                description: "Более 60 лет опыта в создании автомобилей для первых лиц государства. Бескомпромиссное качество в каждой детали.",
                icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
              },
              {
                title: "Инновации",
                description: "Передовые электрические силовые установки, технологии автономного вождения и передовые системы связи на борту.",
                icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
              },
              {
                title: "Мастерство",
                description: "Сшитая вручную кожа Nappa, точнейшая обработка элементов управления и возможности персональной отделки.",
                icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={STAGGER_ITEM}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-3xl p-8 md:p-10 transition-colors hover:border-primary/30 hover:bg-surface/80"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
