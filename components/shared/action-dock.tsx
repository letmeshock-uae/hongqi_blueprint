"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ActionDock() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 md:hidden"
    >
      <div className="glass-card flex items-center gap-3 rounded-3xl px-4 py-3 shadow-vibe-lg">
        <Link
          href="#inquiry"
          className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all active:scale-[0.97]"
        >
          Test Drive
        </Link>
        <Link
          href="#configurator"
          className="rounded-2xl border border-glass-stroke px-5 py-2.5 text-sm font-medium text-foreground transition-all active:scale-[0.97]"
        >
          Configure
        </Link>
      </div>
    </motion.div>
  );
}
