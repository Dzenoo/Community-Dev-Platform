import CommunityLeaderboardTables from "@/components/community/leaderboard/CommunityLeaderboardTables";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchCommunity } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { FetchedProfilePropsTypes } from "@/types/profile";
import { getServerSession } from "next-auth";

// Define a function component called CommunityLeaderboard
const CommunityLeaderboard = async () => {
  // Get the server session using the authOptions
  const session = await getServerSession(authOptions);

  // If there is no session, navigate to the home page
  if (!session) notAuthNavigate("/");

  // Fetch the community data
  const community = (await fetchCommunity()) as FetchedProfilePropsTypes[];

  // If there is no community data, display a message
  if (!community) {
    return (
      <p className="section_subtitle text-center">Leadboard not created</p>
    );
  }

  // If there is community data, display the leaderboard table
  return (
    <section className="overflow-x-auto">
      <h2 className="section_title text-black dark:text-white mb-4">
        Leaderboard
      </h2>
      <CommunityLeaderboardTables communityUsers={community} />
    </section>
  );
};

// Export the CommunityLeaderboard component as the default export of this module
export default CommunityLeaderboard;
