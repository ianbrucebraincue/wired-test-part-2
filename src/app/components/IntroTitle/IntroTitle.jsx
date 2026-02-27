import { useRef } from "react";
import useIntroTitleAnimation from "../../hooks/useIntroTitleAnimation";
import styles from "./IntroTitle.module.css";

export default function IntroTitle() {
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useIntroTitleAnimation(introRef, titleRef);

  return (
    <>
      <section ref={introRef} className={styles.intro}>
        <div className={`${styles.dividerLine} ${styles.pulse}`} />
        <h1 ref={titleRef} className={styles.typewriter}/>
      </section>

      <article className="article">
        <p>Article content starts here...</p>
      </article>
    </>
  );
}