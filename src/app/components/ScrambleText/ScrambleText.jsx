"use client";

import { useRef, useState, useEffect } from "react";
import useScrambleText from "../../hooks/useScrambleText";
import styles from "./ScrambleText.module.css";

export default function ScrambleText({ text }) {

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent = text;
    }
  }, [text]);

  useScrambleText (
    textRef,
    text,
    {
      start: "top 75%",
      duration: 2.5
    }
  );

  return (
    <div className={styles.wrapper}>
      <h3 ref={textRef} className={styles.text}/>
    </div>
  );
}