import CommunityList from "@/components/community/CommunityList";
import CommunityTopBar from "@/components/community/CommunityTopBar";
import { fetchUsers } from "@/library/actions/user.actions";

const CommunityPage = async () => {
  const CommunityUsers: any = await fetchUsers("/community");

  return (
    <div>
      <CommunityTopBar />
      <CommunityList community={CommunityUsers} />
    </div>
  );
};

export default CommunityPage;
