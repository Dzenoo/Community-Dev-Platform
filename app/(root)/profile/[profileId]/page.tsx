import ProfileAnswersList from "@/components/profile/ProfileAnswersList";
import ProfileStatistics from "@/components/profile/ProfileStatistics";
import ProfileTopBar from "@/components/profile/ProfileTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUserAnswers } from "@/library/actions/questions.actions";
import { fetchUser } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

const ProfilePage = async ({ params }: { params: { profileId: string } }) => {
  const session = await getServerSession(authOptions);
  const user = await fetchUser(params.profileId);
  const answers = await fetchUserAnswers(params.profileId);

  if (!user) return null;
  if (!session) notAuthNavigate("/");
  // @ts-ignore
  if (params.profileId !== session?.user.id) notAuthNavigate("/");

  const ProfileStatisticsData = [
    {
      id: 1,
      path: "/assets/images/golden.png",
      name: "Gold",
      quantity: user?.goldBadges,
    },
    {
      id: 2,
      path: "/assets/images/silver.png",
      name: "Silver",
      quantity: user?.silverBadges,
    },
    {
      id: 3,
      path: "/assets/images/bronze.png",
      name: "Bronze",
      quantity: user?.bronzeBadges,
    },
  ];

  return (
    <section className="my-6 flex flex-col gap-12">
      <ProfileTopBar
        id={user?._id}
        name={user?.name}
        username={user?.username}
        questions={user?.questions}
        location={user?.location}
        portfolio={user?.portfolio}
        biography={user?.biography}
        createdAt={user?.createdAt}
      />
      <ProfileStatistics profileStatistics={ProfileStatisticsData} />
      <div>
        <div>
          <h2 className="section_title_smaller text-white mb-4">
            Questions ({user?.questions.length})
          </h2>
          <div className="h-96 overflow-y-scroll">
            <QuestionList questions={user?.questions} showActions={true} />
          </div>
        </div>
        <div>
          <h2 className="section_title_smaller text-white my-4">Answers</h2>
          <div className="h-96 overflow-y-scroll">
            <ProfileAnswersList profileAnswers={answers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
