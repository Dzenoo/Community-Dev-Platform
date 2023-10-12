import { QuestionsData } from "@/constants";
import { QuestionItemPropsTypes } from "@/types/questions";
import QuestionItem from "@/components/questions/QuestionItem";

const QuestionList = () => {
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {QuestionsData.map((data: QuestionItemPropsTypes) => (
        <li key={data.id}>
          <QuestionItem {...data} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
