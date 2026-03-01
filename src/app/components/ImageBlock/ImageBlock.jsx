"use client";

import { useRef, useMemo } from "react";

import Image from "next/image";
import styles from "./ImageBlock.module.css";

// import useImageBlockAnimation from "../../hooks/userImageBlockAnimation";
import usePixelReveal from "../../hooks/usePixelReveal";

export default function ImageBlock({
  imageSrc, 
  altText = "",
  columns = 16,
  rows = 12,
  duration = 1,
  delay = 0,
}) {
  const wrapperRef = useRef(null);
  const pixelRefs = useRef([]);

  // Generate correct number of pixels
  const totalPixels = columns * rows;

  const pixels = useMemo(() => {
    return Array.from({ length: totalPixels });
  }, [totalPixels]);

  usePixelReveal({
    wrapperRef,
    pixelRefs,
    duration,
    delay,
  });

  return (
    <div
      className={styles.imageWrapper}
      ref={wrapperRef}
    >
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className={styles.image}
      />

      <div className={styles.pixelContainer}>
        {pixels.map((_, i) => (
          <div
            key={i}
            ref={(el) => (pixelRefs.current[i] = el)}
          />
        ))}
      </div>
      
    </div>
  );
}
