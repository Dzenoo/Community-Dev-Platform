import { CommunityListPropsTypes } from "@/types/community";
import CommunityItem from "./CommunityItem";

const CommunityList: React.FC<CommunityListPropsTypes> = ({ community }) => {
  return (
    <div className="my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {community.map((community) => (
        <CommunityItem key={community.id} {...community} />
      ))}
    </div>
  );
};

export default CommunityList;
