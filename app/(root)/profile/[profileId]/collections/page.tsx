import CollectionsTopBar from "@/components/profile/collections/CollectionsTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchUser } from "@/library/actions/user.actions";

const CollectionsPage = async ({
  params,
}: {
  params: { profileId: string };
}) => {
  const user = await fetchUser(params.profileId);

  return (
    <>
      <CollectionsTopBar />
      <div className="mt-12">
        <QuestionList questions={user?.savedQuestions} />
      </div>
    </>
  );
};

export default CollectionsPage;
