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
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}>
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
