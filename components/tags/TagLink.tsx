import { TagsPropsTypes } from "@/types/tags";
import Link from "next/link";

const TagLink: React.FC<TagsPropsTypes> = ({ _id, title }) => {
  return (
    <Link href={`/tags/${_id}`} className="tags">
      {title}
    </Link>
  );
};

export default TagLink;
