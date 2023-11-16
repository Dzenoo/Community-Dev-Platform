// Importing the TagItem component and the TagListPropsTypes interface from the respective files
import TagItem from "./TagItem";
import { type TagListPropsTypes } from "@/types/tags";

// Defining the TagList component as a functional component that receives tags as a prop
const TagList: React.FC<TagListPropsTypes> = ({ tags }) => {
  // Rendering a list of tags if there are any, otherwise rendering a message saying "No Tags Founded"
  return (
    <ul className="py-12 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
      {tags.length === 0 ? (
        <p className="section_subtitle_smaller text-black dark:text-white text-center">
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

// Exporting the TagList component as the default export of this module
export default TagList;
