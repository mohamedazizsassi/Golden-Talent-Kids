import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import PastEditions from "./components/PastEditions";
import Schedule from "./components/Schedule";
import WhySponsor from "./components/WhySponsor";
import Packs from "./components/Packs";
import Needs from "./components/Needs";
import FinalCTA from "./components/FinalCTA";
import StickyWhatsApp from "./components/StickyWhatsApp";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();

    if (mq.addEventListener) {
      mq.addEventListener("change", update);
    } else {
      mq.addListener(update);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update);
      } else {
        mq.removeListener(update);
      }
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion={isMobile ? "always" : "user"}
      transition={isMobile ? { type: "tween", duration: 0.2 } : { type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}
    >
      <Hero />
      <Stats />
      <About />
      <PastEditions />
      <Schedule />
      <WhySponsor />
      <Packs />
      <Needs />
      <FinalCTA />
      <StickyWhatsApp />
    </MotionConfig>
  );
}
