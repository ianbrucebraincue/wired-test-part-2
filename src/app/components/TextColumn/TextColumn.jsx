"use client";

import { useRef } from "react";
import useTextColumnAnimations from "../../hooks/useTextColumnAnimations";

import styles from "./TextColumn.module.css";

export default function TextColumn({title, paragraph}) {
  const textColumnRef = useRef(null);

  useTextColumnAnimations(textColumnRef);

  return (
    <>
      {/* Optional subtle AI background */}
      <div className={styles.aiAmbient} />

      <section ref={textColumnRef} className={styles.textColumn}>
        
        {title && (
          <h3 className={`${styles.fadeUp} ${styles.title}`}>
            {title}
          </h3>
        )}

        {paragraph && (
          <p className={`${styles.fadeUp} ${styles.paragraph}`}>
            {paragraph}
          </p>
        )}
      </section>
    </>
  );
}