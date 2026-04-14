import { Check, Sparkles, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { waLink } from "../lib/whatsapp";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const MSG1 = "Bonjour, je suis intéressé(e) par le Pack 1 (350 DT) pour Golden Talents Kids 3.0.";
const MSG2 = "Bonjour, je suis intéressé(e) par le Pack 2 (600 DT) pour Golden Talents Kids 3.0.";

const pack1 = [
  "Visibilité sur les badges",
  "Cartes de visite + Flyers",
  "Mention sur les réseaux sociaux",
  "Projection de logo",
  "Stand publicitaire",
  "Intervention sur scène",
];

const pack2Extra = [
  "Tous les avantages du Pack 1",
  "Stand personnalisé",
  "Présentation de vos produits ou services",
  "Interaction directe avec le public",
  "Mention spéciale lors des annonces sur scène",
];

const featureVariant = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function Feature({ children, highlight }) {
  return (
    <motion.li variants={featureVariant} className="flex items-start gap-3">
      <motion.span
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.4 }}
        className={`shrink-0 mt-0.5 w-5 h-5 rounded-full grid place-items-center ${highlight ? "bg-brand-gold text-brand-ink" : "bg-brand-blue/10 text-brand-blue"
          }`}
      >
        <Check className="w-3 h-3" strokeWidth={3} />
      </motion.span>
      <span className={`text-sm sm:text-base ${highlight ? "text-brand-ink" : "text-brand-ink/80"}`}>
        {children}
      </span>
    </motion.li>
  );
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Packs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="packs" className="bg-gradient-to-b from-white to-brand-cream scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <motion.div
          variants={stagger(0.1)}
          {...inViewProps}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-brand-coral font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-coral" />
            Nos offres
            <span className="h-px w-8 bg-brand-coral" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight"
          >
            Choisissez votre pack sponsor
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-brand-ink/70 max-w-xl mx-auto"
          >
            Deux formules pensées pour donner à votre marque la visibilité qu'elle mérite.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.15, 0.1)}
          {...inViewProps}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto"
        >
          {/* Pack 1 */}
          <motion.article
            variants={cardVariant}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative rounded-3xl bg-white border border-black/5 p-7 sm:p-8 shadow-soft flex flex-col"
          >
            <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Pack 1</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-bold text-brand-ink tabular-nums">350</span>
              <span className="text-xl font-semibold text-brand-ink/60">DT</span>
            </div>
            <p className="mt-2 text-sm text-brand-ink/60">Visibilité essentielle</p>

            <motion.ul
              variants={stagger(0.05, 0.2)}
              {...inViewProps}
              className="mt-7 space-y-3 flex-1"
            >
              {pack1.map((f) => <Feature key={f}>{f}</Feature>)}
            </motion.ul>

            <motion.a
              href={waLink(MSG1)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-ink text-white font-semibold px-6 py-4 min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5" />
              Choisir le Pack 1
            </motion.a>
          </motion.article>

          {/* Pack 2 — Recommended */}
          <motion.article
            variants={cardVariant}
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={reduceMotion ? undefined : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            whileHover={{ scale: 1.08 }}
            className="relative rounded-3xl bg-gradient-to-br from-brand-blue to-[#2a4bb0] text-white border border-brand-gold ring-4 ring-brand-gold/50 md:scale-105 p-7 sm:p-8 shadow-gold flex flex-col"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.4 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-gold text-brand-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow"
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.span>
              Recommandé
            </motion.div>

            <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Pack 2</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-bold tabular-nums">600</span>
              <span className="text-xl font-semibold text-white/70">DT</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Visibilité premium + interaction</p>

            <motion.ul
              variants={stagger(0.05, 0.3)}
              {...inViewProps}
              className="mt-7 space-y-3 flex-1"
            >
              {pack2Extra.map((f, i) => (
                <motion.li key={f} variants={featureVariant} className="flex items-start gap-3">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-gold text-brand-ink grid place-items-center"
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </motion.span>
                  <span className={`text-sm sm:text-base ${i === 0 ? "font-semibold text-brand-gold" : "text-white/90"}`}>
                    {f}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href={waLink(MSG2)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 25px 50px -12px rgba(245,184,46,0.7)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gold text-brand-ink font-bold px-6 py-4 min-h-[52px] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Choisir le Pack 2
            </motion.a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
