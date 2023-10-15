import QuestionDetailsContent from "@/components/questions/details/QuestionDetailsContent";
import { fetchQuestionById } from "@/library/actions/questions.actions";

const QuestionDetails = async ({
  params,
}: {
  params: { questionId: string };
}) => {
  const question = await fetchQuestionById(params.questionId);

  return (
    <section className="section">
      {question && (
        <QuestionDetailsContent
          _id={question._id}
          title={question.title}
          downvotes={question.downvotes}
          description={question.description}
          votes={question.votes}
          tags={question.tags}
          user={question.user}
          answers={question.answers}
          views={question.views}
          createdAt={question.createdAt}
          showActions={false}
        />
      )}
    </section>
  );
};

export default QuestionDetails;
