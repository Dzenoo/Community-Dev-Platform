import { TagsPropsTypes } from "@/types/tags";
import Link from "next/link";

const TagLink: React.FC<TagsPropsTypes> = ({ _id, title, shouldTruncate }) => {
  return (
    <Link href={`/tags/${_id}`} className="tags">
      {shouldTruncate
        ? title?.length > 7
          ? `${title.slice(0, 7)}...`
          : title
        : title}
    </Link>
  );
};

export default TagLink;
