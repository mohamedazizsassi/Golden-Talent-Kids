import { Megaphone, Heart, Eye, Store } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const benefits = [
  { icon: Megaphone, title: "Visibilité digitale", desc: "Publicité sur nos réseaux sociaux avant, pendant et après l'événement.", color: "from-brand-coral/20 to-brand-coral/5", iconColor: "text-brand-coral" },
  { icon: Heart,     title: "Valeurs partagées",   desc: "Associez votre marque au développement personnel et artistique des jeunes talents.", color: "from-brand-gold/25 to-brand-gold/5",   iconColor: "text-brand-gold" },
  { icon: Eye,       title: "Logo mis en avant",   desc: "Votre logo affiché tout au long de l'événement — scène, supports et communication.", color: "from-brand-blue/20 to-brand-blue/5",   iconColor: "text-brand-blue" },
  { icon: Store,     title: "Stand dédié",         desc: "Un espace pour présenter vos produits et interagir directement avec notre public.", color: "from-emerald-400/20 to-emerald-400/5", iconColor: "text-emerald-600" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhySponsor() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <motion.div variants={stagger(0.1)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-brand-coral font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-coral" />
            Pourquoi sponsoriser
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight max-w-3xl"
          >
            Ce que vous obtenez<br className="hidden sm:block" /> en nous soutenant
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.1)}
          {...inViewProps}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {benefits.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <motion.article
              key={title}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${color} border border-black/5 p-6 sm:p-7 shadow-soft hover:shadow-gold`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-xl bg-white ${iconColor} grid place-items-center shadow-sm mb-5`}
              >
                <Icon className="w-6 h-6" strokeWidth={2} />
              </motion.div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">{title}</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
