import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import QuestionDetailsContent from "@/components/questions/details/QuestionDetailsContent";
import {
  fetchQuestionById,
  fetchQuestions,
} from "@/library/actions/questions.actions";
import { getServerSession } from "next-auth";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";
import { notFound } from "next/navigation";

// Define a function to generate static parameters for the page
export const generateStaticParams = async () => {
  // Fetch all questions
  const questions = (await fetchQuestions()) as FetchedQuestionsPropsTypes[];

  // Map each question to its ID
  return questions.map((question: FetchedQuestionsPropsTypes) => ({
    params: { questionId: question._id },
  }));
};

// Define the QuestionDetails component
const QuestionDetails = async ({
  params,
}: {
  params: { questionId: string };
}) => {
  // Get the user session
  const session = await getServerSession(authOptions);

  // Fetch the question with the given ID
  const question = (await fetchQuestionById(
    params.questionId
  )) as FetchedQuestionsPropsTypes;

  // If the question ID is invalid or the question doesn't exist, show a 404 page
  if (!params.questionId || !question) notFound();

  // Render the QuestionDetailsContent component with the fetched question data
  return (
    <section className="section">
      {question && (
        <QuestionDetailsContent
          _id={question._id}
          title={question.title}
          downvotes={question.downvotes}
          description={question.description}
          upvotes={question.upvotes}
          tags={question.tags}
          user={question.user}
          answers={question.answers}
          createdAt={question.createdAt}
          // @ts-ignore
          userId={session?.user?.id}
          showActions={false}
        />
      )}
    </section>
  );
};

export default QuestionDetails;
