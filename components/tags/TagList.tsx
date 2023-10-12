import { TagListPropsTypes } from "@/types/tags";
import TagItem from "./TagItem";

const TagList: React.FC<TagListPropsTypes> = ({ tags }) => {
  return (
    <ul className="py-12 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
      {tags.map((tag) => (
        <TagItem key={tag.id} {...tag} />
      ))}
    </ul>
  );
};

export default TagList;
