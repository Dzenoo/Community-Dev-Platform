import { QuestionsData } from "@/constants";

const QuestionDetails = ({ params }: { params: { questionId: string } }) => {
  const question = QuestionsData.find(
    (question) => question.id === params.questionId
  );

  return <div>{question?.user}</div>;
};

export default QuestionDetails;
