import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CollectionsTopBar from "@/components/profile/collections/CollectionsTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchUser } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { type FetchedProfilePropsTypes } from "@/types/profile";
import { type QuestionItemPropsTypes } from "@/types/questions";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const CollectionsPage = async ({
  searchParams,
  params,
}: {
  searchParams: { search: string };
  params: { profileId: string };
}) => {
  // Get the user's session
  const session = await getServerSession(authOptions);

  // Fetch the user's profile
  const user = (await fetchUser(params.profileId)) as FetchedProfilePropsTypes;

  // Filter the user's saved questions based on the search query
  const filteredQuestions: QuestionItemPropsTypes[] =
    user?.savedQuestions?.filter((question: QuestionItemPropsTypes) => {
      if (searchParams && searchParams.search) {
        const searchLower = searchParams.search.toLowerCase();
        const titleLower = question.title.toLowerCase();
        const descriptionLower = question.description!.toLowerCase();

        return (
          titleLower.includes(searchLower) ||
          descriptionLower.includes(searchLower)
        );
      }
      return false;
    });

  // If the user is not found, return a 404 error
  if (!user) notFound();

  // If the user is not authenticated, redirect to the home page
  if (!session) notAuthNavigate("/");

  // If the user is not authorized to view this page, redirect to the home page
  // @ts-ignore
  if (params.profileId !== session?.user.id) notAuthNavigate("/");

  // Render the collections page
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
