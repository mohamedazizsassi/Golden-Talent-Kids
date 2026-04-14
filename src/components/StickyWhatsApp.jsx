import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { waLink } from "../lib/whatsapp";

const MSG = "Bonjour, je souhaite en savoir plus sur le sponsoring de Golden Talents Kids 3.0.";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > 400);
  });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink(MSG)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter sur WhatsApp"
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50"
        >
          <span className="relative flex w-14 h-14 sm:w-16 sm:h-16">
            {!reduceMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[#25D366]"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            {!reduceMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[#25D366]"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
              />
            )}
            <span className="relative flex w-full h-full rounded-full bg-[#25D366] items-center justify-center shadow-xl ring-4 ring-white/80">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" />
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
