import { CommunityItemPropsTypes } from "@/types/community";
import Card from "@/components/ui/elements/card";
import TagLink from "../tags/TagLink";

const CommunityItem: React.FC<CommunityItemPropsTypes> = ({
  id,
  image,
  tags,
  name,
  username,
  reputation,
}) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
        <div className="w-40 h-40 rounded-full bg-blue-600"></div>
        <div className="flex flex-col gap-2 text-center">
          <h2 className="section_subtitle text-white font-bold">{name}</h2>
          <p className="section_subtitle text-gray-400">@{username}</p>
          <p className="section_subtitle text-white font-bold">{reputation}</p>
        </div>
        <div className="flex flex-wrap text-center justify-center items-center gap-2">
          {tags.map((tag) => (
            <TagLink key={tag.id} {...tag} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CommunityItem;
