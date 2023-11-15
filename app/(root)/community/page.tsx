// Importing necessary components and functions
import CommunityList from "@/components/community/CommunityList";
import CommunityTopBar from "@/components/community/CommunityTopBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchCommunityByParams } from "@/library/actions/user.actions";
import { getServerSession } from "next-auth";
import { notAuthNavigate } from "@/library/utility";
import { type FetchedProfilePropsTypes } from "@/types/profile";

// Defining the CommunityPage component as an async function that takes in searchParams as a prop
const CommunityPage = async ({
  searchParams,
}: {
  searchParams: { search: string };
}) => {
  // Getting the server session using authOptions and storing it in session
  const session = await getServerSession(authOptions);

  // If there is no session, redirect to the home page
  if (!session) notAuthNavigate("/");

  // Fetching the list of community users and storing it in CommunityUsers
  const communityUsers = (await fetchCommunityByParams(
    searchParams.search
  )) as FetchedProfilePropsTypes[];

  // Rendering the CommunityTopBar and CommunityList components, passing in the appropriate props
  return (
    <div>
      <CommunityTopBar />
      <CommunityList community={communityUsers} />
    </div>
  );
};

// Exporting the CommunityPage component as the default export of this module
export default CommunityPage;
