// This file imports the ProfileStatisticsItem component and renders a list of profile statistics using it.
// It receives an array of profile statistics as props and maps over it to render each item using the ProfileStatisticsItem component.

import ProfileStatisticsItem from "./ProfileStatisticsItem";
import { type ProfileListPropsTypes } from "@/types/profile";

const ProfileStatisticsList: React.FC<ProfileListPropsTypes> = ({
  profileStatistics,
}) => {
  return (
    <div className="my-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {profileStatistics.map((statistics) => (
        <ProfileStatisticsItem key={statistics.id} {...statistics} />
      ))}
    </div>
  );
};

export default ProfileStatisticsList;
