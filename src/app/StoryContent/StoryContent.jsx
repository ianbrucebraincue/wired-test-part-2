import StoryRenderer from "../story/StoryRenderer";
import { story } from "../story/storyData";

export default function StoryContent() {
  return (
    <>
      <StoryRenderer content={story} />
    </>
  );
}
