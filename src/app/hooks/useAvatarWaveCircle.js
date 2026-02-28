"use client";

import { useEffect } from "react";
import { gsap } from "../lib/gsap";

export default function useAvatarWaveCircle(svgRef) {

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;

    const count = 13;
    const cycleDuration = 3;
    const animateCount = 7;
    const y = 12;
    const dy = -5.18;
    const r = 70; // smaller for avatar scale
    const center = 90;

    function getPath(dy) {
      return `M-38.824,0C-19.505,-5.177 -19.993,${dy} 0,${dy} C 19.993,${dy} 19.506,-5.177 38.824,0`;
    }

    const svgNS = "http://www.w3.org/2000/svg";

    const ctx = gsap.context(() => {

      for (let i = 0; i < count * 2; i++) {

        const path = document.createElementNS(svgNS, "path");

        path.setAttribute("d", getPath(dy));

        path.setAttribute(
          "transform",
          `translate(${center}, ${center}) rotate(${360/count * Math.floor(i/2)}) translate(0, ${-r - dy})`
        );

        svg.appendChild(path);

        const tl = gsap.timeline({
          delay: cycleDuration / count * Math.floor(i / 2),
          repeat: -1,
          repeatDelay: cycleDuration * (count - animateCount) / count
        });

        tl.to(path, {
          duration: (cycleDuration * (animateCount / count) / 2),
          attr: {
            d: getPath((i % 4 === 0 || i % 4 === 3) ? y : -y + dy)
          },
          ease: "none"
        });

        tl.to(path, {
          duration: (cycleDuration * (animateCount / count) / 2),
          attr: { d: getPath(dy) },
          ease: "none"
        });
      }

    }, svgRef);

    return () => ctx.revert();

  }, [svgRef]);
}