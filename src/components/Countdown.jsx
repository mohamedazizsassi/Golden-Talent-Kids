import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET = new Date("2026-04-26T09:00:00");

function diff(target) {
  const t = target.getTime() - Date.now();
  if (t <= 0) return null;
  const d = Math.floor(t / 86400000);
  const h = Math.floor((t % 86400000) / 3600000);
  const m = Math.floor((t % 3600000) / 60000);
  const s = Math.floor((t % 60000) / 1000);
  return { d, h, m, s };
}

const pad = (n) => String(n).padStart(2, "0");

function Digit({ value }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ y: "60%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-60%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="inline-block"
      >
        {pad(value)}
      </motion.span>
    </AnimatePresence>
  );
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="tabular-nums min-w-[3.5rem] sm:min-w-[4.5rem] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-3 sm:px-5 sm:py-4 text-3xl sm:text-5xl font-bold text-white shadow-soft">
        <Digit value={value} />
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-white/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [t, setT] = useState(() => diff(TARGET));

  useEffect(() => {
    const id = setInterval(() => setT(diff(TARGET)), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-brand-ink font-semibold shadow-gold"
      >
        L'événement a lieu aujourd'hui&nbsp;!
      </motion.div>
    );
  }

  return (
    <div
      className="flex items-center gap-2 sm:gap-4"
      role="timer"
      aria-label="Compte à rebours jusqu'à l'événement"
    >
      <Unit value={t.d} label="Jours" />
      <span className="text-white/40 text-2xl sm:text-3xl font-light">:</span>
      <Unit value={t.h} label="Heures" />
      <span className="text-white/40 text-2xl sm:text-3xl font-light">:</span>
      <Unit value={t.m} label="Min" />
      <span className="text-white/40 text-2xl sm:text-3xl font-light">:</span>
      <Unit value={t.s} label="Sec" />
    </div>
  );
}
