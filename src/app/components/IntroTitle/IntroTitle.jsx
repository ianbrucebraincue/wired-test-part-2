'use client';

import { useRef } from "react";
import useIntroTitleAnimation from "../../hooks/useIntroTitleAnimation";
import styles from "./IntroTitle.module.css";

export default function IntroTitle() {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const heartRef = useRef(null);

  useIntroTitleAnimation(introRef, titleRef, heartRef);

  return (
    <>
      <div className={styles.dividerContainer}>
        <div className={styles.dividerWrapper}>
          <div className={`${styles.dividerLine} ${styles.pulse}`} />
        </div>
      </div>

      <div className={styles.aiAmbient} />
      
      <section ref={introRef} className={styles.intro}>
        <div className={styles.dividerWrapper}>
          <div className={`${styles.dividerLine} ${styles.pulse}`} />
        </div>

        <div ref={heartRef} className={styles.heart}>❤️</div>

        <h1 ref={titleRef} className={styles.typewriter} />
      </section>
    </>
  );
}