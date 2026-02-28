"use client";

import { useEffect } from "react";
import { gsap } from "../lib/gsap";
import styles from "../components/TextColumn/TextColumn.module.css";

export default function useTextColumnAnimations(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      
      // Fade + rise animation
      gsap.utils.toArray(`.${styles.fadeUp}`).forEach((el) => {

        // Create intro tween (paused initially)
        const introTween = gsap.fromTo(
          el,
          { 
            y: 30,
            opacity: 0 
          },
          { 
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            paused: true
          }
        );

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",

          // Scroll down into view
          onEnter: () => introTween.play(),

          // Scroll back down into view from above
          onEnterBack: () => introTween.play(),

          // Scroll up past it (fade out faster)
          onLeaveBack: () => {
            gsap.to(el, {
              y: 15,               // smaller drop on exit
              opacity: 0,
              duration: 0.3,       // 👈 faster fade out
              ease: "power1.in"
            });
          }
        });

      });

      // Divider line draw
      gsap.utils.toArray(`.${styles.dividerLine}`).forEach((el) => {
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