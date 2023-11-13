// Importing necessary components and functions
import CommunityList from "@/components/community/CommunityList";
import CommunityTopBar from "@/components/community/CommunityTopBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUsers } from "@/library/actions/user.actions";
import { getServerSession } from "next-auth";
import { notAuthNavigate } from "@/library/utility";
import { type FetchedProfilePropsTypes } from "@/types/profile";

// Defining the CommunityPage component as an async function that takes in searchParams as a prop
const CommunityPage = async ({
  searchParams,
}: {
  searchParams: { search: string };
}) => {
  // Fetching the list of community users and storing it in CommunityUsers
  const CommunityUsers = (await fetchUsers(
    "/community"
  )) as FetchedProfilePropsTypes[];

  // Getting the server session using authOptions and storing it in session
  const session = await getServerSession(authOptions);

  // If there is no session, redirect to the home page
  if (!session) notAuthNavigate("/");

  // Filtering the list of community users based on the search query
  const filteredUsers: FetchedProfilePropsTypes[] = CommunityUsers?.filter(
    (user: FetchedProfilePropsTypes) => {
      if (searchParams && searchParams.search) {
        const searchLower = searchParams.search.toLowerCase();
        const usernameLower = user.username.toLowerCase();
        const nameLower = user.name.toLowerCase();

        return (
          usernameLower.includes(searchLower) || nameLower.includes(searchLower)
        );
      }
      return false;
    }
  );

  // Rendering the CommunityTopBar and CommunityList components, passing in the appropriate props
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

// Exporting the CommunityPage component as the default export of this module
export default CommunityPage;
