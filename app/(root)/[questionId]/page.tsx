import QuestionDetailsContent from "@/components/questions/details/QuestionDetailsContent";
import { QuestionsData } from "@/constants";

const QuestionDetails = ({ params }: { params: { questionId: string } }) => {
  const question = QuestionsData.find(
    (question) => question.id === params.questionId
  );

  return (
    <section className="section">
      {question && <QuestionDetailsContent {...question} />}
    </section>
  );
};

export default QuestionDetails;
