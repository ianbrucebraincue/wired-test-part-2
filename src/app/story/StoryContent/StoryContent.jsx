import StoryRenderer from "../StoryRenderer";
import { story } from "../storyData";

export default function StoryContent() {
  return (
    <>
      <StoryRenderer content={story} />
    </>
  );
}
