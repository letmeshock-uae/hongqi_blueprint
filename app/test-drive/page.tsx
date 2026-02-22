import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запись на тест-драйв | Hongqi",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="glass-card max-w-2xl rounded-3xl p-12 relative z-10 border border-glass-stroke shadow-vibe-lg">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-tight">Запись на тест-драйв</h1>
        <p className="text-muted leading-relaxed">Эта страница находится в стадии разработки. Скоро здесь появится подробная информация, отражающая премиальный опыт бренда Hongqi.</p>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-12 rounded-full bg-primary/50"></div>
        </div>
      </div>
    </div>
  );
}
