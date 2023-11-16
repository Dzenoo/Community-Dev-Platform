// Importing the required types for the component
import { CommunityTablesPropsTypes } from "@/types/community";

// Importing the Image component from Next.js
import Image from "next/image";

// Defining the CommunityLeaderboardTables component which takes in communityUsers as a prop
const CommunityLeaderboardTables: React.FC<CommunityTablesPropsTypes> = ({
  communityUsers,
}) => {
  // Rendering a table with the communityUsers data
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
        {/* Mapping through the communityUsers array and rendering a row for each user */}
        {communityUsers?.map((user, ind) => (
          <tr key={ind}>
            {/* Rendering the user's rank */}
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
            {/* Rendering the user's name, username, email, and badge counts */}
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

// Exporting the CommunityLeaderboardTables component as the default export
export default CommunityLeaderboardTables;
