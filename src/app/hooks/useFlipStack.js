"use client";

import { useCallback } from "react";
import { gsap, Flip } from "../lib/gsap";

export default function useFlipStack(containerRef) {

  const animateFlip = useCallback((updateLayout) => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {

      const state = Flip.getState(
        containerRef.current.querySelectorAll(".flip-item")
      );

      // Perform layout change (React state update)
      updateLayout();

      requestAnimationFrame(() => {
        Flip.from(state, {
          duration: 0.6,
          ease: "sine.inOut",
          absolute: true,

          onEnter: (elements) =>
            gsap.from(elements, {
              yPercent: 20,
              opacity: 0,
              duration: 0.3,
              ease: "expo.out"
            }),

          onLeave: (elements) =>
            gsap.to(elements, {
              yPercent: 5,
              xPercent: -5,
              opacity: 0,
              duration: 0.3,
              ease: "expo.out"
            })
        });
      });

    }, containerRef);

  }, [containerRef]);

  return animateFlip;
}