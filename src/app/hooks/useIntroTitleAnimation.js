"use client";

import { useEffect } from "react";
import { gsap } from "../lib/gsap";

export default function useIntroTitleAnimation(sectionRef, titleRef) {
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const phrases = [
      "My Couples Retreat",
      "With 3 AI Chatbots",
      "And the Humans Who Love Them"
    ];

    const titleEl = titleRef.current;

    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        }
      });

      phrases.forEach((phrase) => {

        // TYPE
        tl.to({}, {
          duration: phrase.length * 0.05,
          onUpdate: function () {
            const progress = this.progress();
            const length = Math.floor(progress * phrase.length);
            titleEl.textContent = phrase.slice(0, length);
          }
        });

        // PAUSE
        tl.to({}, { duration: 0.5 });

        // DELETE
        tl.to({}, {
          duration: phrase.length * 0.03,
          onUpdate: function () {
            const progress = this.progress();
            const length = phrase.length - Math.floor(progress * phrase.length);
            titleEl.textContent = phrase.slice(0, length);
          }
        });

      });

    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef]);
}