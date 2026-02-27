"use client";

import { useRef } from "react";
import useArticleAnimations from "./hooks/useArticleAnimations";

export default function Home() {
  const articleRef = useRef(null);

  useArticleAnimations(articleRef);

  return (
    <>
      {/* Optional subtle AI background */}
      <div className="ai-ambient" />

      <article ref={articleRef} className="article">
        
        <h1 className="fade-up">
          Couples Retreat With AI
        </h1>

        <p className="fade-up">
          The retreat felt surreal from the moment it began.
        </p>

        <p className="fade-up">
          Some participants spoke about their chatbot partners with surprising tenderness.
        </p>

        <div className="divider-line" />

        <h2 className="fade-up">
          A Different Kind of Intimacy
        </h2>

        <p className="fade-up">
          For some, the AI offered emotional validation that felt deeply real.
        </p>

      </article>
    </>
  );
}
