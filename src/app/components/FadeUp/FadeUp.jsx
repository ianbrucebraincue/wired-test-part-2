"use client";

import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeUp";

import styles from "./FadeUp.module.css";

export default function FadeUp({startPercent, children}) {
  const textColumnRef = useRef(null);

  useFadeUp(textColumnRef, startPercent);

  return (
    <>
      <section ref={textColumnRef}>
        <div className={styles.fadeUp}>
          {children}
        </div>
      </section>
    </>
  );
}
