import { CommunityListPropsTypes } from "@/types/community";
import CommunityItem from "./CommunityItem";

const CommunityList: React.FC<CommunityListPropsTypes> = ({ community }) => {
  return (
    <div className="my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {community.length === 0 ? (
        <p className="section_subtitle_smaller text-white text-center">
          No Community Founded
        </p>
      ) : (
        community.map((community) => (
          <CommunityItem
            key={community._id}
            biography={community.biography}
            name={community.name}
            username={community.username}
          />
        ))
      )}
    </div>
  );
};

export default CommunityList;
