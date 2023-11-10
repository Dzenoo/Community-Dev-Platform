import { CommunityTablesPropsTypes } from "@/types/community";
import Image from "next/image";

const CommunityLeaderboardTables: React.FC<CommunityTablesPropsTypes> = ({
  communityUsers,
}) => {
  return (
    <table className="mt-8 min-w-full dark:bg-[#222222] border border-gray-300">
      <thead className="text-left">
        <tr>
          <th className="py-4 px-4 border-b"></th>
          <th className="py-4 px-4 border-b">Name</th>
          <th className="py-4 px-4 border-b">Username</th>
          <th className="py-4 px-4 border-b">Email</th>
          <th className="py-4 px-4 border-b">Gold</th>
          <th className="py-4 px-4 border-b">Silver</th>
          <th className="py-4 px-4 border-b">Bronze</th>
        </tr>
      </thead>
      <tbody>
        {communityUsers?.map((user, ind) => (
          <tr key={ind}>
            <td className="py-2 px-4 border-b">
              {ind === 0 && (
                <Image
                  src="/assets/images/golden.png"
                  alt="golden"
                  width={36}
                  height={36}
                />
              )}
              {ind === 1 && (
                <Image
                  src="/assets/images/silver.png"
                  alt="silver"
                  width={36}
                  height={36}
                />
              )}
              {ind === 2 && (
                <Image
                  src="/assets/images/bronze.png"
                  alt="bronze"
                  width={36}
                  height={36}
                />
              )}
              {ind > 2 && <span className="text-2xl">{ind + 1}</span>}
            </td>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">@{user.username}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.goldBadges}</td>
            <td className="py-2 px-4 border-b">{user.silverBadges}</td>
            <td className="py-2 px-4 border-b">{user.bronzeBadges}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommunityLeaderboardTables;
