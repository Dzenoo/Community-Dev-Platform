import CommunityItem from "./CommunityItem";
import { type CommunityListPropsTypes } from "@/types/community";

const CommunityList: React.FC<CommunityListPropsTypes> = ({ community }) => {
  return (
    <div className="my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {community.length === 0 ? (
        <p className="section_subtitle_smaller text-black dark:text-white text-center">
          No Community Founded
        </p>
      ) : (
        community.map((community) => (
          <CommunityItem
            key={community._id}
            biography={community.biography}
            name={community.name}
            username={community.username}
            goldBadges={community.goldBadges}
            silverBadges={community.silverBadges}
            bronzeBadges={community.bronzeBadges}
          />
        ))
      )}
    </div>
  );
};

export default CommunityList;
