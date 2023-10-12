import { ProfileListPropsTypes } from "@/types/profile";
import ProfileStatisticsItem from "./ProfileStatisticsItem";

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
