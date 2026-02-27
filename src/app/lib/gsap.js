import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Prevent SSR execution
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };