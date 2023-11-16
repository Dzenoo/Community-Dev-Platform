// Importing necessary components and functions
import Tags from "@/components/tags/TagLink";
import Link from "next/link";
import { fetchQuestions } from "@/library/actions/questions.actions";
import { getQuestionsTags } from "@/library/utility";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";

// Defining the InformationNavigation component as an async function
const InformationNavigation = async () => {
  // Fetching all the questions and storing them in the questions array
  const questions = (await fetchQuestions()) as FetchedQuestionsPropsTypes[];

  // Filtering the questions to get the top questions based on upvotes and answers
  const topQuestions: FetchedQuestionsPropsTypes[] = questions
    .reduce(
      (
        acc: FetchedQuestionsPropsTypes[],
        question: FetchedQuestionsPropsTypes
      ): FetchedQuestionsPropsTypes[] => {
        if (question.upvotes.length > 3 && question.answers.length > 3) {
          acc.push(question);
        }
        return acc;
      },
      []
    )
    .slice(0, 3);

  // Getting the tags of the top questions and all the questions
  const topQuestionstags = getQuestionsTags(topQuestions) as string[];
  const questionstags = getQuestionsTags(questions) as string[];

  // If there are no questions, return null
  if (questions.length === 0) return null;

  // Returning the JSX for the InformationNavigation component
  return (
    <div className="px-6 py-8 shadow-md sticky right-0 top-0 bg-white dark:bg-[#222222] h-screen flex flex-col gap-12 max-lg:hidden">
      <ul className="flex flex-col gap-4">
        <h2 className="section_title_smaller text-black dark:text-white">
          Top Questions
        </h2>
        {/* If there are no top questions, display the first three questions */}
        {topQuestions?.length === 0
          ? questions
              ?.slice(0, 3)
              .map((question: FetchedQuestionsPropsTypes) => (
                <Link
                  key={question._id}
                  href={`/${question._id}`}
                  className="section_subtitle_smaller w-60 text-[#ADADAD] truncate"
                >
                  {question.title}
                </Link>
              ))
          : // Otherwise, display the top questions
            topQuestions?.map((question: FetchedQuestionsPropsTypes) => (
              <Link
                key={question._id}
                href={`/${question._id}`}
                className="section_subtitle_smaller w-60 text-[#ADADAD] truncate"
              >
                {question.title}
              </Link>
            ))}
      </ul>
      <div className="flex flex-col gap-4">
        <h2 className="section_title_smaller text-black dark:text-white">
          Popular Tags
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          {/* If there are no top questions, display all the tags */}
          {topQuestionstags.length === 0
            ? questionstags.map((question: string, ind: number) => (
                <Tags _id={question} key={ind} title={question} />
              ))
            : // Otherwise, display the tags of the top questions
              topQuestionstags.map((question: string, ind: number) => (
                <Tags _id={question} key={ind} title={question} />
              ))}
        </ul>
      </div>
    </div>
  );
};

// Exporting the InformationNavigation component as the default export
export default InformationNavigation;
