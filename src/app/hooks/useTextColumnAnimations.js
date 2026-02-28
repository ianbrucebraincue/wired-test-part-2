"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import styles from "../components/TextColumn/TextColumn.module.css";

export default function useTextColumnAnimations(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      
      // Fade + rise animation
      gsap.utils.toArray(`.${styles.fadeUp}`).forEach((el) => {
        // Set initial hidden state once
        gsap.set(el, { y: 30, opacity: 0 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
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

      // Divider line draw
      // gsap.utils.toArray(`.${styles.dividerLine}`).forEach((el) => {
      //   gsap.from(el, {
      //     scaleX: 0,
      //     transformOrigin: "left center",
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top 90%",
      //     },
      //   });
      // });

    }, ref);

    return () => ctx.revert();
  }, [ref]);
}