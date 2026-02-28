"use client";

import { useRef } from "react";
import useTextColumnAnimations from "../../hooks/useTextColumnAnimations";
import useTextColumnFloodAnimation from "../../hooks/useTextColumnFloodAnimation";

import styles from "../TextColumn/TextColumn.module.css";

export default function TextColumn({title, paragraph}) {
  const textColumnRef = useRef(null);
  const floodRef = useRef(null);

  useTextColumnAnimations(textColumnRef);
  useTextColumnFloodAnimation(floodRef);

  const titleRef = !paragraph ? floodRef : null;

  return (
    <>
      {/* Optional subtle AI background */}
      <div className={styles.aiAmbient} />

      <section ref={textColumnRef} className={`${styles.textColumn} ${styles.textColumnFlood}`}>
        
        {title && (
          <h3 ref={titleRef} className={`${styles.fadeUp} ${styles.title}`}>
            {title}
          </h3>
        )}

        {paragraph && (
          <p ref={floodRef} className={`${styles.fadeUp} ${styles.paragraph}`}>
            {paragraph}
          </p>
        )}
      </section>
    </>
  );
}