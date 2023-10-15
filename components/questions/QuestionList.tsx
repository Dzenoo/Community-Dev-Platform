import QuestionItem from "@/components/questions/QuestionItem";
import {
  QuestionItemPropsTypes,
  QuestionListPropsTypes,
} from "@/types/questions";

const QuestionList: React.FC<QuestionListPropsTypes> = ({
  questions,
  showActions,
}) => {
  console.log(questions);

  return (
    <ul className="pb-12 flex flex-col gap-2">
      {questions.map((data: QuestionItemPropsTypes) => (
        <li key={data._id}>
          <QuestionItem
            _id={data._id}
            title={data.title}
            downvotes={data.downvotes}
            votes={data.votes}
            showActions={showActions}
            tags={data.tags}
            user={data.user}
            answers={data.answers}
            views={data.views}
          />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
