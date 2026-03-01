"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePixelReveal({
  wrapperRef,
  pixelRefs,
  duration = 1,
  delay = 0,
  start = "top 80%",
}) {
  useEffect(() => {
    if (!wrapperRef.current || !pixelRefs.current.length) return;

    const ctx = gsap.context(() => {
      // Ensure starting state
      gsap.set(pixelRefs.current, { opacity: 1 });

      const animation = gsap.to(pixelRefs.current, {
        opacity: 0,
        duration: 0.15,
        delay,
        stagger: {
          amount: duration,
          from: "random",
        },
        ease: "power2.out",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start,
        animation,
        toggleActions: "play reverse play reverse",
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, [wrapperRef, pixelRefs, duration, delay, start]);
}