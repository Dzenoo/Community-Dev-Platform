import ProfileAnswersList from "@/components/profile/ProfileAnswersList";
import ProfileFilter from "@/components/profile/ProfileFilter";
import ProfileStatistics from "@/components/profile/ProfileStatistics";
import ProfileTopBar from "@/components/profile/ProfileTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { ProfileStatisticsData, QuestionsData } from "@/constants";
import { fetchUser } from "@/library/actions/user.actions";

const ProfilePage = async ({ params }: { params: { profileId: string } }) => {
  const user = await fetchUser(params.profileId);
  if (!user) return null;

  return (
    <section className="my-6 flex flex-col gap-12">
      <ProfileTopBar user={user} />
      <ProfileStatistics profileStatistics={ProfileStatisticsData} />
      <div>
        <ProfileFilter />
        <QuestionList questions={user?.questions} showActions={true} />
        <ProfileAnswersList profileAnswers={QuestionsData} />
      </div>
    </section>
  );
};

export default ProfilePage;
