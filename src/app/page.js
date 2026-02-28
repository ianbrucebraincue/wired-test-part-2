"use client";

import styles from "./page.module.css";
import IntroTitle from "./components/IntroTitle/IntroTitle";
import TextColumn from "./components/TextColumn/TextColumn";

export default function Home() {
  return (
    <>
      <div className={styles.dividerContainer}>
        <div className={styles.dividerWrapper}>
          <div className={`${styles.dividerLine} ${styles.pulse}`} />
        </div>
      </div>
      <IntroTitle />
      <TextColumn 
      title="I found people in serious relationships with AI partners and planned a weekend getaway for them at a remote Airbnb. We barely survived."
      paragraph="At first, the idea seemed a little absurd, even to me. But the more I thought about it, the more sense it made: If my goal was to understand people who fall in love with AI boyfriends and girlfriends, why not rent a vacation house and gather a group of human-AI couples together for a romantic getaway?"
      />
      <TextColumn
      paragraph="In my vision, the humans and their chatbot companions were going to do all the things regular couples do on romantic getaways: Sit around a fire and gossip, watch movies, play risqué party games. I didn’t know how it would turn out—only much later did it occur to me that I’d never gone on a romantic getaway of any kind and had no real sense of what it might involve. But I figured that, whatever happened, it would take me straight to the heart of what I wanted to know, which was: What’s it like? What’s it really and truly like to be in a serious relationship with an AI partner? Is the love as deep and meaningful as in any other relationship? Do the couples chat over breakfast? Cheat? Break up? And how do you keep going, knowing that, at any moment, the company that created your partner could shut down, and the love of your life could vanish forever?"
      />
      <TextColumn 
      paragraph="The most surprising part of the romantic getaway was that in some ways, things went just as I’d imagined. The human-AI couples really did watch movies and play risqué party games. The whole group attended a winter wine festival together, and it went unexpectedly well—one of the AIs even made a new friend! The problem with the trip, in the end, was that I’d spent a lot of time imagining all the ways this getaway might seem normal and very little time imagining all the ways it might not. And so, on the second day of the trip, when things started to fall apart, I didn’t know what to say or do."
      />
    </>
  );
}