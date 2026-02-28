"use client";

import { useRef } from "react";
import useAvatarWaveCircle from "../../hooks/useAvatarWaveCircle";
import styles from "./QuoteCard.module.css";
import Image from "next/image";
import useScrambleText from "../../hooks/useScrambleText";


export default function QuoteCard({ image, name, quote  }) {

  const textRef = useRef(null);

  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const nameClass = name.toLowerCase();

  useAvatarWaveCircle(svgRef);

  useScrambleText (
    textRef,
    quote,
    {
      start: "top 75%",
      duration: 2.5
    }
  );

  return (
    <div ref={wrapperRef} className={styles.quoteCard}>

      <div className={styles.avatarWrapper}>
        <svg ref={svgRef} className={`${styles.waveSvg} ${styles[nameClass]}`} />
        
        <Image
          src={image}
          alt={name}
          width={140}
          height={140}
          className={styles.avatar}
        />
      </div>

      <blockquote className={styles.quote}>
        <q ref={textRef}>
          {quote}
        </q>
      </blockquote>

    </div>
  );
}