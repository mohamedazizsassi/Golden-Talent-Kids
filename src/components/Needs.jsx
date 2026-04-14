import { Speaker, Gift, Palette, ClipboardList, Coffee, Camera, Music } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const needs = [
  { icon: Speaker,       label: "Matériel de scène" },
  { icon: Gift,          label: "Cadeaux" },
  { icon: Palette,       label: "Décoration" },
  { icon: ClipboardList, label: "Éléments d'organisation" },
  { icon: Coffee,        label: "Pause café" },
  { icon: Camera,        label: "Photographe" },
  { icon: Music,         label: "Organiste ou Band" },
];

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Needs() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <motion.div variants={stagger(0.1)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-brand-coral font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-coral" />
            Budget &amp; besoins
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight max-w-3xl"
          >
            Ce que votre sponsoring finance
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-brand-ink/70 max-w-2xl"
          >
            Un budget global de <strong className="text-brand-ink">3 000 DT + cadeaux</strong> —
            chaque contribution soutient directement ces éléments essentiels.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.06, 0.1)}
          {...inViewProps}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {needs.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={itemVariant}
              whileHover={{ y: -4, borderColor: "#f5b82e" }}
              className="rounded-2xl bg-white border border-black/5 p-5 flex flex-col items-start gap-3 hover:shadow-soft transition"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-blue grid place-items-center"
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
              </motion.div>
              <span className="text-sm sm:text-base font-medium text-brand-ink">{label}</span>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-gradient-to-br from-brand-blue to-brand-ink text-white p-5 flex flex-col justify-center col-span-2 sm:col-span-1"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold tabular-nums text-brand-gold"
            >
              3000 DT
            </motion.div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Budget global + cadeaux</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
