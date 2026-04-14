import { Music } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <motion.div variants={stagger(0.12)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-brand-coral font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-coral" />
            À propos
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight max-w-3xl"
          >
            C'est quoi <span className="text-brand-blue">Golden Talents Kids</span> ?
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-brand-ink/75 leading-relaxed max-w-2xl"
            >
              Golden Talents Kids 3.0 est un <strong className="text-brand-ink">concours de chant et de musique dédié aux enfants</strong>,
              mettant à l'honneur la jeunesse, le talent et la passion musicale. Fort du succès des
              deux premières éditions, cette 3ème édition introduit une{" "}
              <strong className="text-brand-blue">nouvelle catégorie instrumentale</strong> pour offrir aux enfants
              un espace d'expression artistique plus diversifié.
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="hidden md:flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand-gold to-[#f59e0b] p-8 shadow-gold min-w-[200px]"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Music className="w-12 h-12 text-brand-ink mb-3" strokeWidth={1.5} />
              </motion.div>
              <div className="text-5xl font-bold text-brand-ink leading-none">40</div>
              <div className="text-sm font-medium text-brand-ink/80 mt-1">candidats attendus</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
