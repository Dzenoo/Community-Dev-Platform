import ProfileStatisticsList from "./ProfileStatisticsList";
import { ProfileStatisticsPropsTypes } from "@/types/profile";

const ProfileStatistics: React.FC<ProfileStatisticsPropsTypes> = ({
  profileStatistics,
}) => {
  return (
    <section>
      <div>
        <h2 className="section_title_smaller text-black dark:text-white">
          Statistics
        </h2>
      </div>
      <div>
        <ProfileStatisticsList profileStatistics={profileStatistics} />
      </div>
    </section>
  );
};

export default ProfileStatistics;
