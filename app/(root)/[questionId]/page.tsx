import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import QuestionDetailsContent from "@/components/questions/details/QuestionDetailsContent";
import {
  fetchQuestionById,
  fetchQuestions,
} from "@/library/actions/questions.actions";
import { getServerSession } from "next-auth";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const questions = (await fetchQuestions()) as FetchedQuestionsPropsTypes[];
  return questions.map((question: FetchedQuestionsPropsTypes) => ({
    params: { questionId: question._id },
  }));
};

const QuestionDetails = async ({
  params,
}: {
  params: { questionId: string };
}) => {
  const session = await getServerSession(authOptions);
  const question = (await fetchQuestionById(
    params.questionId
  )) as FetchedQuestionsPropsTypes;

  if (!params.questionId || !question) notFound();

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
