import QuestionList from "@/components/questions/QuestionList";
import { TagsData } from "@/constants";
import { fetchQuestionByTag } from "@/library/actions/questions.actions";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";
import { type TagItemPropsTypes } from "@/types/tags";
import { notFound } from "next/navigation";

const TagsDetailsPage = async ({ params }: { params: { tagId: string } }) => {
  // Defining TagsDetailsPage component with async function
  const tag = TagsData.find(
    // Finding tag by tagId
    (tag: TagItemPropsTypes) => tag.name === params.tagId
  ) as TagItemPropsTypes;
  const questions = (await fetchQuestionByTag(
    // Fetching questions by tag
    tag?.name
  )) as FetchedQuestionsPropsTypes[];

  !tag && notFound(); // If tag is not found, return 404 page

  return (
    <section>
      <div>
        <h2 className="section_title text-black dark:text-white">
          {tag?.name.charAt(0).toUpperCase()} // Capitalizing first letter of
          tag name
          {tag?.name.slice(1)} // Displaying rest of tag name
        </h2>
      </div>
      <div className="mt-12">
        <QuestionList questions={questions} /> // Rendering QuestionList
        component with questions prop
      </div>
    </section>
  );
};

export default TagsDetailsPage; // Exporting TagsDetailsPage component
