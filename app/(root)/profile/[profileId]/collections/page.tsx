import CollectionsTopBar from "@/components/profile/collections/CollectionsTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchUser } from "@/library/actions/user.actions";

const CollectionsPage = async ({
  searchParams,
  params,
}: {
  searchParams: { search: string };
  params: { profileId: string };
}) => {
  const user = await fetchUser(params.profileId);
  const filteredQuestions = user?.savedQuestions?.filter((question: any) => {
    if (searchParams && searchParams.search) {
      const searchLower = searchParams.search.toLowerCase();
      const titleLower = question.title.toLowerCase();
      const descriptionLower = question.description.toLowerCase();

      return (
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower)
      );
    }
    return false;
  });

  return (
    <>
      <CollectionsTopBar />
      <div className="mt-12">
        <QuestionList
          questions={
            searchParams && searchParams?.search
              ? filteredQuestions
              : user?.savedQuestions
          }
        />
      </div>
    </>
  );
};

export default CollectionsPage;
