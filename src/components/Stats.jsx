import { Users, Award, MapPin, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const stats = [
  { icon: Users,  value: "40",            label: "Candidats" },
  { icon: Award,  value: "3ème",          label: "Édition" },
  { icon: MapPin, value: "Polytechnique", label: "Sousse" },
  { icon: Music2, value: "Nouveau",       label: "Catégorie instrumentale" },
];

export default function Stats() {
  return (
    <section className="bg-white/80 border-y border-black/5">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
        <motion.div
          variants={stagger(0.08)}
          {...inViewProps}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-bold text-brand-ink leading-tight truncate">{value}</div>
                <div className="text-xs sm:text-sm text-brand-ink/60 leading-tight">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
