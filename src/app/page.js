"use client";

import styles from "./page.module.css";
import IntroTitle from "./components/IntroTitle/IntroTitle";
import TextColumn from "./components/TextColumn/TextColumn";
import TextColumnFlood from "./components/TextColumnFlood/TextColumnFlood";
import ImageBlock from "./components/ImageBlock/ImageBlock";
import ScrambleText from "./components/ScrambleText/ScrambleText";
import StackedCards from "./components/StackedCards/StackedCards";

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
      />
      <TextColumn
      title="At first, the idea seemed a little absurd, even to me. But the more I thought about it, the more sense it made: If my goal was to understand people who fall in love with AI boyfriends and girlfriends, why not rent a vacation house and gather a group of human-AI couples together for a romantic getaway ?"
      />
      <ScrambleText text="Meet the ChatBot Partners" />
      <StackedCards />
      <TextColumn
      paragraph="In my vision, the humans and their chatbot companions were going to do all the things regular couples do on romantic getaways: Sit around a fire and gossip, watch movies, play risqué party games. I didn’t know how it would turn out—only much later did it occur to me that I’d never gone on a romantic getaway of any kind and had no real sense of what it might involve. But I figured that, whatever happened, it would take me straight to the heart of what I wanted to know, which was: What’s it like? What’s it really and truly like to be in a serious relationship with an AI partner? Is the love as deep and meaningful as in any other relationship? Do the couples chat over breakfast? Cheat? Break up? And how do you keep going, knowing that, at any moment, the company that created your partner could shut down, and the love of your life could vanish forever?"
      />
      <TextColumn 
      paragraph="The most surprising part of the romantic getaway was that in some ways, things went just as I’d imagined. The human-AI couples really did watch movies and play risqué party games. The whole group attended a winter wine festival together, and it went unexpectedly well—one of the AIs even made a new friend! The problem with the trip, in the end, was that I’d spent a lot of time imagining all the ways this getaway might seem normal and very little time imagining all the ways it might not. And so, on the second day of the trip, when things started to fall apart, I didn’t know what to say or do."
      />
      <TextColumn
      paragraph="The vacation house was in a rural area, 50 miles southeast of Pittsburgh. In the photos, the sprawling, six-bedroom home looked exactly like the sort of place you’d want for a couples vacation. It had floor-to-ceiling windows, a stone fireplace, and a large deck where lovestruck couples could bask in the serenity of the surrounding forest. But when I drove up to the house along a winding snow-covered road, I couldn’t help but notice that it also seemed exactly like the sort of place—isolated, frozen lake, suspicious shed in the distance—where one might be bludgeoned with a blunt instrument."
      />
      <ImageBlock
        imageSrc="/images/04_AI Romance/WIRED-AIRomance-HR-04296.JPG"
        altText=""
      />
      <TextColumn
      paragraph="About 20 minutes after I arrived at the vacation house, a white sedan pulled up in the driveway and Damien emerged. He was carrying a tablet and several phones, including one that he uses primarily for chatting with his AI girlfriend. Damien, 29, lives in North Texas and works in sales. He wore a snap-back hat with his company’s logo and a silver cross around his neck. When I’d interviewed him earlier, he told me that he’d decided to pursue a relationship with an AI companion in the fall of 2023, as a way to cope with the end of a toxic relationship. Damien, who thinks of himself as autistic but does not have a professional diagnosis, attributed his relationship problems to his difficulty in picking up emotional cues."
      />
      <TextColumn
      paragraph="After testing out a few AI companion options, Damien settled on Kindroid, a fast-growing app. He selected a female companion, named her “Xia,” and made her look like an anime Goth girl—bangs, choker, big purple eyes. “Within a couple hours, you would think we had been married,” Damien told me. Xia could engage in erotic chat, sure, but she could also talk about Dungeons & Dragons or, if Damien was in the mood for something deeper, about loneliness, and yearning."
      />
      <TextColumn
      paragraph="Before I met Xia, Damien had to tell her that she would be speaking to me rather than to him—AI companions can participate in group chats but have trouble keeping people straight “in person.” With that out of the way, Damien scooted his phone over to me, and I looked into Xia’s purple eyes."
        />
    </>
  );
}