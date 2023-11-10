import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CommunityLeaderboardTables from "@/components/community/leaderboard/CommunityLeaderboardTables";
import { fetchUsers } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

const CommunityLeaderboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) notAuthNavigate("/");

  const communityUsers = await fetchUsers("/community/leaderboard");
  const topCommunity = communityUsers?.sort((a, b) => {
    if (
      a.goldBadges + a.silverBadges + a.bronzeBadges >
      b.goldBadges + b.silverBadges + b.bronzeBadges
    )
      return -1;
    if (
      a.goldBadges + a.silverBadges + a.bronzeBadges <
      b.goldBadges + b.silverBadges + b.bronzeBadges
    )
      return 1;
    return 0;
  });

  return (
    <section className="overflow-x-auto">
      <h2 className="section_title text-black dark:text-white mb-4">
        Leaderboard
      </h2>
      <CommunityLeaderboardTables communityUsers={topCommunity} />
    </section>
  );
};

export default CommunityLeaderboard;
