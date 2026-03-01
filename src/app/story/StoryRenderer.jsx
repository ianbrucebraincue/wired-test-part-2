import TextColumn from "../components/TextColumn/TextColumn";
import ScrambleText from "../components/ScrambleText/ScrambleText";
import ImageBlock from "../components/ImageBlock/ImageBlock";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import FadeUp from "../components/FadeUp/FadeUp";
import StackedCards from "../components/StackedCards/StackedCards";
import TextColumnFlood from "../components/TextColumnFlood/TextColumnFlood";

export default function StoryRenderer({ content }) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case "title":
            return (
              <TextColumn
                key={index}
                title={block.content}
              />
            );

          case "paragraph":
            return (
              <TextColumn
                key={index}
                paragraph={block.content}
              />
            );

          case "scramble":
            return (
              <ScrambleText
                key={index}
                text={block.content}
              />
            );

          case "image":
            return (
              <ImageBlock
                key={index}
                imageSrc={block.src}
                altText={block.alt}
              />
            );

          case "quote":
            return (
              <FadeUp key={index} startPercent="50%">
                <QuoteCard
                  image={block.image}
                  name={block.name}
                  quote={block.quote}
                />
              </FadeUp>
            );

          case "stackedCards":
            return <StackedCards key={index} />;

          case "floodTitle":
            return <TextColumnFlood key={index} title={block.content} />;

          default:
            return null;
        }
      })}
    </>
  );
}