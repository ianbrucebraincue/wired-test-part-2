"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger} from "../lib/gsap";
import { randomChar } from "../utils/helpers";

export default function useScrambleText(
  ref,
  text,
  options = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const randomString = Array.from({ length: text.length }, () =>
      randomChar()
    ).join("");

    el.textContent = randomString;

    const ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: el,
        start: options.start || "top 80%",
        // once: options.once ?? true,

        onEnter: () => {
          gsap.to(el, {
            scrambleText: {
              text,
              chars: options.chars || "upperAndLowerCase",
              // revealDelay: options.revealDelay ?? 0.2,
              revealDelay: 0,
              tweenLength: true
            },
            duration: options.duration || 2.5,
            ease: options.ease || "power2.out",
            overwrite: "auto"
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            scrambleText: randomString,
            duration: 1.5
          });
        }
      });

    }, ref);

    return () => ctx.revert();

  }, [ref, text]);
}