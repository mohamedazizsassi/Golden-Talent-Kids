import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const items = [
  { t: "09h00", label: "Accueil" },
  { t: "09h30", label: "Mot d'ouverture" },
  { t: "09h40", label: "Choral d'ouverture" },
  { t: "09h50", label: "Performance des anciens gagnants" },
  { t: "10h05", label: "1ère session", highlight: true },
  { t: "11h05", label: "Pause café" },
  { t: "11h40", label: "2ème session", highlight: true },
  { t: "13h00", label: "Animation musicale" },
  { t: "13h15", label: "Délibération du jury" },
  { t: "13h25", label: "Remise des prix", highlight: true },
  { t: "13h30", label: "Séance photos" },
  { t: "14h00", label: "Clôture" },
];

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Schedule() {
  return (
    <section className="bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
           style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <motion.div variants={stagger(0.1)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-brand-gold font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-gold" />
            Programme
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Le déroulé de la journée
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-white/70 max-w-xl">
            Dimanche 26 avril 2026 — École Polytechnique Sousse.
          </motion.p>
        </motion.div>

        <motion.ol
          variants={stagger(0.05, 0.1)}
          {...inViewProps}
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-12 pl-6 sm:pl-8 border-l-2 border-white/10"
        >
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-gold/40 to-transparent"
            aria-hidden="true"
          />
          {items.map((it, i) => (
            <motion.li key={i} variants={itemVariant} className="relative pb-6 last:pb-0">
              <motion.span
                whileHover={{ scale: 1.4 }}
                className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full ring-4 ring-brand-ink ${
                  it.highlight ? "bg-brand-gold" : "bg-white/40"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-5">
                <div className={`tabular-nums text-sm sm:text-base font-bold min-w-[64px] ${
                  it.highlight ? "text-brand-gold" : "text-white/60"
                }`}>
                  <Clock className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                  {it.t}
                </div>
                <div className={`text-base sm:text-lg font-medium ${
                  it.highlight ? "text-white" : "text-white/80"
                }`}>
                  {it.label}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
