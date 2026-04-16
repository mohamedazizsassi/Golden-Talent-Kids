import { MessageCircle, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Countdown from "./Countdown";
import { waLink, INSTAGRAM_URL } from "../lib/whatsapp";
import { fadeUp, stagger } from "../lib/motion";

const MSG = "Bonjour, je souhaite sponsoriser Golden Talents Kids 3.0.";

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const NoteSvg = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 18V5l12-2v13M9 18a3 3 0 11-3-3 3 3 0 013 3zm12-2a3 3 0 11-3-3 3 3 0 013 3z" />
  </svg>
);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-[#2a4bb0] to-brand-ink text-white">
      {/* floating music notes */}
      <motion.div
        className="absolute top-16 left-6 text-brand-gold/70"
        animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [-6, 6, -6] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <NoteSvg className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-8 text-brand-coral/80"
        animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [6, -6, 6] }}
        transition={reduceMotion ? undefined : { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <NoteSvg className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-white/30"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-4, 4, -4] }}
        transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
      >
        <NoteSvg className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>

      {/* glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-72 h-72 sm:-top-40 sm:-left-40 sm:w-96 sm:h-96 rounded-full bg-brand-gold/20 blur-2xl sm:blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-72 h-72 sm:-bottom-40 sm:-right-40 sm:w-96 sm:h-96 rounded-full bg-brand-coral/20 blur-2xl sm:blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-16 sm:pb-24">
        {/* logos row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-4 mb-10"
        >
          <motion.img
            src="/golden%20talent%20kids%20logo.png"
            alt="Golden Talents Kids"
            whileHover={{ scale: 2 }}
            transition={{ duration: 0.35 }}
            className="h-30 sm:h-56 w-auto object-contain"
          />
          <div className="flex items-center gap-2">
            <div className="text-[11px] sm:text-xs text-white/70 text-right leading-tight hidden sm:block">
              En partenariat avec<br />
              <span className="text-white font-medium">Polytechnique Sousse</span>
            </div>
            <img
              src="/logo-poly.png"
              alt="École Polytechnique Sousse"
              className="h-10 sm:h-12 w-auto object-contain bg-white/90 rounded-lg p-1 shadow-sm"
            />
          </div>
        </motion.div>

        <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="show">
          {/* badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-4 py-1.5 text-xs sm:text-sm mb-6"
          >
            <motion.span
              animate={reduceMotion ? undefined : { rotate: [0, 15, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </motion.span>
            <span className="font-medium">3ème édition · 26 avril 2026</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl"
          >
            Sponsorisez <span className="text-brand-gold">Golden Talents Kids 3.0</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed"
          >
            3ème édition du concours de chant &amp; musique pour enfants —
            <span className="font-medium text-white"> 26 avril 2026, École Polytechnique Sousse.</span>
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4">
            <span dir="rtl" className="arabic text-2xl sm:text-3xl text-brand-gold font-bold">
              موهبتك تلمع معنا
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Countdown />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="#packs"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gold text-brand-ink font-semibold px-6 py-4 text-base shadow-gold min-h-[52px]"
            >
              Devenir sponsor
              <motion.svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
            <motion.a
              href={waLink(MSG)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur text-white font-medium px-6 py-4 text-base min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3, color: "#f5b82e" }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition"
          >
            <InstagramIcon className="w-4 h-4" />
            @golden.talents_kids
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
