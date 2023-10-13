import { TagItemPropsTypes } from "@/types/tags";
import Card from "@/components/shared/ui/elements/card";
import TagLink from "./TagLink";

const TagItem: React.FC<TagItemPropsTypes> = ({
  id,
  name,
  description,
  questionsCount,
}) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-4">
        <TagLink id={id} title={name} />
        <h2 className="section_subtitle_smaller text-white">{description}</h2>
        <p className="section_subtitle text-white">
          <span className="font-bold">{questionsCount}</span> questions
        </p>
      </div>
    </Card>
  );
};

export default TagItem;
