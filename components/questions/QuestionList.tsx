import {
  QuestionItemPropsTypes,
  QuestionListPropsTypes,
} from "@/types/questions";
import QuestionItem from "@/components/questions/QuestionItem";

const QuestionList: React.FC<QuestionListPropsTypes> = ({ questions }) => {
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {questions.map((data: QuestionItemPropsTypes) => (
        <li key={data.id}>
          <QuestionItem {...data} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
