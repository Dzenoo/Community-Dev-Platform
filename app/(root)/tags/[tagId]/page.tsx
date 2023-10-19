import QuestionList from "@/components/questions/QuestionList";
import { TagsData } from "@/constants";
import { fetchQuestionByTag } from "@/library/actions/questions.actions";

const TagsDetailsPage = async ({ params }: { params: { tagId: string } }) => {
  const tag = TagsData.find((tag) => tag.name === params.tagId);
  const questions = await fetchQuestionByTag(tag?.name);

  return (
    <section>
      <div>
        <h2 className="section_title text-white">
          {tag?.name.charAt(0).toUpperCase()}
          {tag?.name.slice(1)}
        </h2>
      </div>
      <div className="mt-12">
        {/* @ts-ignore */}
        <QuestionList questions={questions} />
      </div>
    </section>
  );
};

export default TagsDetailsPage;
