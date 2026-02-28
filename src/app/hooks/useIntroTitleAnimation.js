"use client";

import { useEffect } from "react";
import { gsap } from "../lib/gsap";

export default function useIntroTitleAnimation(sectionRef, titleRef, heartRef) {
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !heartRef.current) return;

    const phrases = [
      "My Couples Retreat",
      "With 3 AI Chatbots",
      "And the Humans Who Love Them"
    ];

    const titleEl = titleRef.current;
    const heart = heartRef.current;

    const ctx = gsap.context(() => {

      // Ensure section can contain absolute heart
      gsap.set(sectionRef.current, { position: "relative" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        }
      });

      phrases.forEach((phrase, index) => {

        // TYPE
        tl.to({}, {
          duration: phrase.length * 0.05,
          onUpdate: function () {
            const progress = this.progress();
            const length = Math.floor(progress * phrase.length);
            titleEl.textContent = phrase.slice(0, length);
          }
        });

        tl.to({}, { duration: 0.5 });

        // Only delete first two phrases
        if (index < phrases.length - 1) {
          tl.to({}, {
            duration: phrase.length * 0.03,
            onUpdate: function () {
              const progress = this.progress();
              const length =
                phrase.length - Math.floor(progress * phrase.length);
              titleEl.textContent = phrase.slice(0, length);
            }
          });
        }
      });

      // ❤️ Animate heart in
      tl.to(heart, {
        opacity: 0.15,
        scale: 1.6,
        duration: 1,
        ease: "power2.out"
      });

      // Fade title + heart out together
      tl.to([titleEl, heart], {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef, heartRef]);
}