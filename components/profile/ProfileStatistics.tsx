// This file contains the ProfileStatistics component, which displays statistics related to a user's profile.

import ProfileStatisticsList from "./ProfileStatisticsList";
import { type ProfileStatisticsPropsTypes } from "@/types/profile";

// ProfileStatistics is a functional component that takes in a profileStatistics prop and renders a section containing a title and a list of statistics.
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
