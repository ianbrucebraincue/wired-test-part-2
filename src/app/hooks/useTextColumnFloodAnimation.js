"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function useTextColumnFloodAnimation(ref) {

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const originalText = el.textContent;

    if (!originalText) return;

    const trimmed = originalText.trim();
    if (!trimmed.length) return;

    const lastChar = trimmed.slice(-1);

    const ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: el,

        // 👇 Element must be fully inside viewport
        start: "bottom bottom-=80",

        // Scroll distance scales with viewport
        end: () => `+=${window.innerHeight * 1.4}`,

        scrub: 0.5,
        invalidateOnRefresh: true,

        onUpdate: (self) => {

          const styles = getComputedStyle(el);

          const fontSize = parseFloat(styles.fontSize);
          const lineHeight = parseFloat(styles.lineHeight);

          const computedLineHeight = isNaN(lineHeight)
            ? fontSize * 1.2
            : lineHeight;

          const linesInViewport = Math.floor(
            window.innerHeight / computedLineHeight
          );

          const avgCharWidth = fontSize * 0.55;

          const charsPerLine = Math.floor(
            el.clientWidth / avgCharWidth
          );

          const maxChars = linesInViewport * charsPerLine;

          const charCount = Math.floor(self.progress * maxChars);

          el.textContent = originalText + (lastChar).repeat(charCount);
          
        }
      });

    }, ref);

    return () => ctx.revert();

  }, [ref]);
}