import { QuestionsData } from "@/constants";
import QuestionItem from "./QuestionItem";
import { QuestionItemPropsTypes } from "@/types/questions";

const QuestionList = () => {
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {QuestionsData.map((data: QuestionItemPropsTypes) => (
        <QuestionItem
          key={data.id}
          id={data.id}
          title={data.title}
          tags={data.tags}
          user={data.user}
          answers={data.answers}
          views={data.views}
          votes={data.votes}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
