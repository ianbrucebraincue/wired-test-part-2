"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function useChatImageAnimation(imageRef) {
  useEffect(() => {
    if (!imageRef.current) return;

    const el = imageRef.current;

    const ctx = gsap.context(() => {

      // Initial hidden state
      gsap.set(el, {
        opacity: 0,
        y: 40,
        scale: 0.96
      });

      ScrollTrigger.create({
        trigger: el,

        // 👇 Wait until image is almost fully visible
        start: "top 70%", 
        // Top of element hits 70% of viewport height

        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,   // 👈 faster
            ease: "power3.out",
            overwrite: "auto"
          });
        },

        onEnterBack: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto"
          });
        },

        onLeaveBack: () => {
          gsap.to(el, {
            opacity: 0,
            y: 20,
            scale: 0.98,
            duration: 0.2,
            ease: "power2.in",
            overwrite: "auto"
          });
        }

      });

    }, imageRef);

    return () => ctx.revert();

  }, [imageRef]);
}