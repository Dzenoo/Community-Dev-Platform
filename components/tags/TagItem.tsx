import { TagItemPropsTypes } from "@/types/tags";
import Card from "@/components/shared/ui/elements/card";
import TagLink from "./TagLink";

const TagItem: React.FC<TagItemPropsTypes> = ({ id, name, description }) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-4">
        <TagLink _id={id} title={name} />
        <h2 className="section_subtitle_smaller text-white">{description}</h2>
      </div>
    </Card>
  );
};

export default TagItem;
