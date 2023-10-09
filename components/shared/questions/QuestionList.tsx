import { QuestionsData } from "@/constants";
import { QuestionItemPropsTypes } from "@/types/questions";
import QuestionItem from "./QuestionItem";

const QuestionList = () => {
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {QuestionsData.map((data: QuestionItemPropsTypes) => (
        <QuestionItem {...data} />
      ))}
    </ul>
  );
};

export default QuestionList;
