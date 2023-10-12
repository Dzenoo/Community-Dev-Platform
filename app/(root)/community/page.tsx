import CommunityList from "@/components/community/CommunityList";
import CommunityTopBar from "@/components/community/CommunityTopBar";
import { CommunityUsers } from "@/constants";

const CommunityPage = () => {
  return (
    <div>
      <CommunityTopBar />
      <CommunityList community={CommunityUsers} />
    </div>
  );
};

export default CommunityPage;
