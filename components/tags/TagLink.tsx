// Importing the Link component from the Next.js library and the TagsPropsTypes interface from the tags types file.
import Link from "next/link";
import { type TagsPropsTypes } from "@/types/tags";

// Defining a functional component called TagLink that receives the _id and title props from the TagsPropsTypes interface.
const TagLink: React.FC<TagsPropsTypes> = ({ _id, title }) => {
  // Returning a Link component from Next.js that will redirect to the /tags/_id page when clicked.
  // The className "tags card_animation" is added to the Link component.
  // The title of the tag is displayed as the content of the Link component.
  return (
    <Link href={`/tags/${_id}`} className="tags card_animation">
      {title}
    </Link>
  );
};

// Exporting the TagLink component as the default export of this module.
export default TagLink;
