// Importing the CommunityItem component and the CommunityListPropsTypes type from the respective files
import CommunityItem from "./CommunityItem";
import { type CommunityListPropsTypes } from "@/types/community";

// Defining the CommunityList component as a functional component that receives the community prop
const CommunityList: React.FC<CommunityListPropsTypes> = ({ community }) => {
  // Returning a div that contains a grid with 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens
  // If the community array is empty, a message is displayed saying "No Community Founded"
  // Otherwise, the community array is mapped to create a CommunityItem component for each community object in the array
  return (
    <div className="my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {community.length === 0 ? (
        <p className="section_subtitle_smaller text-black dark:text-white text-center">
          No Community Founded
        </p>
      ) : (
        community.map((community) => (
          <CommunityItem
            key={community._id}
            biography={community.biography}
            name={community.name}
            username={community.username}
            goldBadges={community.goldBadges}
            silverBadges={community.silverBadges}
            bronzeBadges={community.bronzeBadges}
          />
        ))
      )}
    </div>
  );
};

// Exporting the CommunityList component as the default export of this module
export default CommunityList;
