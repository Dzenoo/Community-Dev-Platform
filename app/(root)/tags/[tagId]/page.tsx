import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import QuestionList from "@/components/questions/QuestionList";
import { TagsData } from "@/constants";
import { fetchQuestionByTag } from "@/library/actions/questions.actions";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const TagsDetailsPage = async ({ params }: { params: { tagId: string } }) => {
  const tag = TagsData.find((tag) => tag.name === params.tagId);
  const questions = await fetchQuestionByTag(tag?.name);

  const session = await getServerSession(authOptions);
  if (!session) notAuthNavigate("/");
  !tag && notFound();

  return (
    <section>
      <div>
        <h2 className="section_title text-black dark:text-white">
          {tag?.name.charAt(0).toUpperCase()}
          {tag?.name.slice(1)}
        </h2>
      </div>
      <div className="mt-12">
        {/* @ts-expect-error */}
        <QuestionList questions={questions} />
      </div>
    </section>
  );
};

export default TagsDetailsPage;
