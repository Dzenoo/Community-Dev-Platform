import Card from "@/components/shared/ui/elements/card";
import { type CommunityItemPropsTypes } from "@/types/community";
import Image from "next/image";

const CommunityItem: React.FC<CommunityItemPropsTypes> = ({
  name,
  username,
  biography,
  goldBadges,
  silverBadges,
  bronzeBadges,
}) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
        <Image
          src="/assets/images/profile.png"
          alt="profile"
          width={130}
          height={130}
        />
        <div className="flex justify-between gap-3">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/golden.png"
              alt="golden"
              width={37}
              height={37}
            />
            <div>{goldBadges}</div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/silver.png"
              alt="silver"
              width={37}
              height={37}
            />
            <div>{silverBadges}</div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/bronze.png"
              alt="bronze"
              width={37}
              height={37}
            />
            <div>{bronzeBadges}</div>
          </div>
        </div>
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
