import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


// Prevent SSR execution
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip, ScrambleTextPlugin);
}

export { gsap, ScrollTrigger, Flip, ScrambleTextPlugin };