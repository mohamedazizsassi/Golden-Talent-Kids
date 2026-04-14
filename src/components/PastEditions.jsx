import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn, inViewProps } from "../lib/motion";

const editions = [
  {
    title: "Golden Voice Kids 1.0",
    year: "1ère édition",
    images: ["/1-0-1.jpg", "/1-0-2.jpg"],
  },
  {
    title: "Golden Voice Kids 2.0",
    year: "2ème édition",
    images: ["/2-0-1.jpg", "/2-0-2.jpg"],
  },
];

function Photo({ src, alt }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-gold/20 group cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-brand-blue/40 pointer-events-none">
        <Camera className="w-10 h-10" strokeWidth={1.5} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}

export default function PastEditions() {
  return (
    <section className="bg-gradient-to-b from-brand-cream to-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <motion.div variants={stagger(0.1)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-brand-coral font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-brand-coral" />
            Rétrospective
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight max-w-3xl"
          >
            Les éditions précédentes
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-brand-ink/70 max-w-2xl"
          >
            Deux éditions réussies, des centaines de familles, et une passion musicale grandissante.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-10">
          {editions.map((e) => (
            <motion.article
              key={e.title}
              variants={stagger(0.1)}
              {...inViewProps}
              className="group"
            >
              <div className="grid grid-cols-2 gap-3">
                {e.images.map((src, i) => (
                  <Photo key={src} src={src} alt={`${e.title} — photo ${i + 1}`} />
                ))}
              </div>
              <motion.div
                variants={fadeUp}
                className="mt-5 flex items-baseline justify-between"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">{e.title}</h3>
                <span className="text-sm text-brand-coral font-semibold">{e.year}</span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
