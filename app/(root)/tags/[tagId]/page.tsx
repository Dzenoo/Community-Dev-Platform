import QuestionList from "@/components/questions/QuestionList";
import { TagsData } from "@/constants";
import { fetchQuestionByTag } from "@/library/actions/questions.actions";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";
import { type TagItemPropsTypes } from "@/types/tags";
import { notFound } from "next/navigation";

const TagsDetailsPage = async ({ params }: { params: { tagId: string } }) => {
  const tag = TagsData.find(
    (tag: TagItemPropsTypes) => tag.name === params.tagId
  ) as TagItemPropsTypes;
  const questions = (await fetchQuestionByTag(
    tag?.name
  )) as FetchedQuestionsPropsTypes[];

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
        <QuestionList questions={questions} />
      </div>
    </section>
  );
};

export default TagsDetailsPage;
