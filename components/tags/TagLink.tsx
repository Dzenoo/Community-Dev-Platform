import { TagsPropsTypes } from "@/types/tags";
import Link from "next/link";

const TagLink: React.FC<TagsPropsTypes> = ({ id, title }) => {
  return (
    <Link href={`/tags/${id}`} className="tags">
      {title}
    </Link>
  );
};

export default TagLink;
