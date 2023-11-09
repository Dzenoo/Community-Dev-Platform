import Card from "@/components/shared/ui/elements/card";
import { type CommunityItemPropsTypes } from "@/types/community";

const CommunityItem: React.FC<CommunityItemPropsTypes> = ({
  name,
  username,
  biography,
}) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
        <img src="/assets/images/profile.png" alt="profile" />
        <div className="flex flex-col gap-2 text-center">
          <h2 className="section_subtitle text-black dark:text-white font-bold">
            {name}
          </h2>
          <p className="section_subtitle text-gray-400">@{username}</p>
        </div>
        <div className="flex flex-wrap text-center justify-center items-center gap-2">
          <p className="section_subtitle_smaller text-black dark:text-white">
            {biography}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CommunityItem;
