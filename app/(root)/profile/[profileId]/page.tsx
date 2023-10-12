import ProfileAnswersList from "@/components/profile/ProfileAnswersList";
import ProfileFilter from "@/components/profile/ProfileFilter";
import ProfileStatistics from "@/components/profile/ProfileStatistics";
import ProfileTopBar from "@/components/profile/ProfileTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { ProfileStatisticsData, QuestionsData } from "@/constants";

const ProfilePage = () => {
  return (
    <section className="my-6 flex flex-col gap-12">
      <ProfileTopBar />
      <ProfileStatistics profileStatistics={ProfileStatisticsData} />
      <div>
        <ProfileFilter />
        <QuestionList questions={QuestionsData} showActions={true} />
        <ProfileAnswersList profileAnswers={QuestionsData} />
      </div>
    </section>
  );
};

export default ProfilePage;
