import { TagListPropsTypes } from "@/types/tags";
import TagItem from "./TagItem";

const TagList: React.FC<TagListPropsTypes> = ({ tags }) => {
  return (
    <ul className="py-12 grid grid-cols-3 gap-3">
      {tags.map((tag) => (
        <TagItem key={tag.id} {...tag} />
      ))}
    </ul>
  );
};

export default TagList;
