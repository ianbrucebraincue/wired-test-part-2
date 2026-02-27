"use client";

import { useEffect } from "react";
import { gsap } from "../lib/gsap";
import styles from "../page.module.css";

export default function useArticleAnimations(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      
      // Fade + rise animation
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Divider line draw
      gsap.utils.toArray(".divider-line").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

    }, ref);

    return () => ctx.revert();
  }, [ref]);
}