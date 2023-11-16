// Importing the Card component from the specified path
import Card from "@/components/shared/ui/elements/card";

// Importing the TagLink component and the TagItemPropsTypes type from their respective paths
import TagLink from "./TagLink";
import { type TagItemPropsTypes } from "@/types/tags";

// Defining the TagItem functional component that takes in id, name, and description as props
const TagItem: React.FC<TagItemPropsTypes> = ({ id, name, description }) => {
  return (
    // Rendering the Card component
    <Card>
      <div className="flex flex-col justify-between gap-4">
        {/* Rendering the TagLink component with the specified props */}
        <TagLink _id={id} title={name} />
        {/* Rendering the description */}
        <h2 className="section_subtitle_smaller text-black dark:text-white">
          {description}
        </h2>
      </div>
    </Card>
  );
};

// Exporting the TagItem component as the default export
export default TagItem;
