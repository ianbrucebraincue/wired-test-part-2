"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import styles from "../components/FadeUp/FadeUp.module.css";

export default function useFadeUp(ref, startPercent = "50%") {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      
      // Fade + rise animation
      gsap.utils.toArray(`.${styles.fadeUp}`).forEach((el) => {
        // Set initial hidden state once
        gsap.set(el, { y: 30, opacity: 0 });

        ScrollTrigger.create({
          trigger: el,
          start: `top ${startPercent}`,
          onEnter: () => {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              overwrite: "auto"
            });
          },
          onEnterBack: () => {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              overwrite: "auto"
            });
          },
          onLeaveBack: () => {
            gsap.to(el, {
              y: 15,
              opacity: 0,
              duration: 0.3,
              ease: "power1.in",
              overwrite: "auto"
            });
          }
        }); // End ScrollTrigger.create
      }); // End fade + rise animation

    }, ref);

    return () => ctx.revert();
  }, [ref, startPercent]);
}