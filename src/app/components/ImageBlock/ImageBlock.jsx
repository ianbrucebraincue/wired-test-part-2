"use client";

import { useRef } from "react";

import Image from "next/image";
import styles from "./ImageBlock.module.css";

import useImageBlockAnimation from "../../hooks/userImageBlockAnimation";

export default function ImageBlock({imageSrc, altText}) {
  const imageRef = useRef(null);
  useImageBlockAnimation(imageRef);

  return (
    <div ref={imageRef} className={styles.chatImageWrapper}>
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className={styles.image}
        />
    </div>
  );
}
