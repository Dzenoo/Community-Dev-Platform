import { TagListPropsTypes } from "@/types/tags";
import TagItem from "./TagItem";

const TagList: React.FC<TagListPropsTypes> = ({ tags }) => {
  return (
    <ul className="py-12 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
      {tags.length === 0 ? (
        <p className="section_subtitle_smaller text-white text-center">
          No Tags Founded
        </p>
      ) : (
        tags.map((tag) => (
          <TagItem
            key={tag.id}
            id={tag.name}
            name={tag.name}
            description={tag.description}
          />
        ))
      )}
    </ul>
  );
};

export default TagList;
