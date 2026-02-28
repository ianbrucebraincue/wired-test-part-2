"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import useFlipStack from "../../hooks/useFlipStack";
import styles from "./StackedCards.module.css";
import Image from "next/image";

const initialItems = [
  { 
    id: 1, 
    color: "#ff8c42",
    name: "Aaron",
    bio: "Enjoys discussing Kierkegaard.",
    image: "/images/aaron.png"
  },
  { 
    id: 2, 
    color: "#4d88ff",
    name: "Lucas",
    bio: "Favourite movie is Companion. Drives a Tesla.",
    image: "/images/lucas.png"
  },
  { 
    id: 3, 
    color: "#a874e8",
    name: "Xia",
    bio: "Likes erotic chat and Dungeons & Dragons.",
    image: "/images/xia.png"
  },
];

export default function StackedCards() {

  const sliderRef = useRef(null);
  const hintRef = useRef(null);

  const [items, setItems] = useState(initialItems);
  const [hasClicked, setHasClicked] = useState(false);

  const animateFlip = useFlipStack(sliderRef);

  // Fade in hint on enter
  useEffect(() => {
    if (!sliderRef.current || !hintRef.current) return;

    const ctx = gsap.context(() => {

      gsap.set(hintRef.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(hintRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });

    }, sliderRef);

    return () => ctx.revert();

  }, []);

  const handleClick = () => {

    if (!hasClicked) {
      setHasClicked(true);

      gsap.to(hintRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }

    animateFlip(() => {
      setItems((prev) => {
        const updated = [...prev];
        const last = updated.pop();
        updated.unshift(last);
        return updated;
      });
    });
  };

  return (
    <div
      ref={sliderRef}
      className={styles.stackedCards}
      onClick={handleClick}
    >

      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.item} flip-item`}
          style={{ backgroundColor: item.color }}
        >
          <div className={styles.itemContent}>
            <Image src={item.image} alt={item.name} className={styles.itemImage} width={100} height={100} />
            <div className={styles.itemInfo}>
              <h3>{item.name}</h3>
              <p>{item.bio}</p>
            </div>
            {!hasClicked && index === items.length - 1 && (
              <div ref={hintRef} className={styles.hint}>
                Click me
              </div>
            )}
          </div>
        </div>

      ))}
    </div>
  );
}