import { MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { waLink, INSTAGRAM_URL } from "../lib/whatsapp";
import { fadeUp, stagger, inViewProps } from "../lib/motion";

const MSG = "Bonjour, je souhaite sponsoriser Golden Talents Kids 3.0.";

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-blue to-brand-ink text-white">
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 py-20 sm:py-28 text-center">
        <motion.div variants={stagger(0.12)} {...inViewProps}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-4 py-1.5 text-xs mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 text-brand-coral" fill="currentColor" />
            </motion.span>
            <span className="font-medium">Rejoignez l'aventure</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            Prêt à{" "}
            <motion.span
              className="text-brand-gold inline-block"
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            >
              collaborer
            </motion.span>{" "}
            ?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Nous vous remercions sincèrement pour l'intérêt que vous portez à notre événement.
            Contactez-nous dès maintenant pour discuter de votre partenariat.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.a
              href={waLink(MSG)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gold text-brand-ink font-bold px-8 py-5 text-base sm:text-lg shadow-gold min-h-[56px]"
            >
              <MessageCircle className="w-5 h-5" />
              Contacter sur WhatsApp
            </motion.a>
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3, backgroundColor: "rgba(255,255,255,0.18)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold px-8 py-5 text-base sm:text-lg min-h-[56px]"
            >
              <InstagramIcon className="w-5 h-5" />
              @golden.talents_kids
            </motion.a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-10 text-sm text-white/50">
            +216 52 270 881 · École Polytechnique Sousse · 26 avril 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
