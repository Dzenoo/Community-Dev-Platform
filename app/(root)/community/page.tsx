import CommunityList from "@/components/community/CommunityList";
import CommunityTopBar from "@/components/community/CommunityTopBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUsers } from "@/library/actions/user.actions";
import { getServerSession } from "next-auth";
import { notAuthNavigate } from "@/library/utility";

const CommunityPage = async ({
  searchParams,
}: {
  searchParams: { search: string };
}) => {
  const CommunityUsers: any = await fetchUsers("/community");
  const session = await getServerSession(authOptions);

  if (!session) notAuthNavigate("/");

  const filteredUsers: any = CommunityUsers?.filter((user: any) => {
    if (searchParams && searchParams.search) {
      const searchLower = searchParams.search.toLowerCase();
      const usernameLower = user.username.toLowerCase();
      const nameLower = user.name.toLowerCase();

      return (
        usernameLower.includes(searchLower) || nameLower.includes(searchLower)
      );
    }
    return false;
  });

  return (
    <div>
      <CommunityTopBar />
      <CommunityList
        community={
          searchParams && searchParams.search ? filteredUsers : CommunityUsers
        }
      />
    </div>
  );
};

export default CommunityPage;
