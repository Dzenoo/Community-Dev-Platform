import QuestionItem from "@/components/questions/QuestionItem";
import {
  QuestionItemPropsTypes,
  QuestionListPropsTypes,
} from "@/types/questions";

const QuestionList: React.FC<QuestionListPropsTypes> = ({
  questions,
  showActions,
}) => {
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {questions?.length === 0 ? (
        <p className="section_subtitle text-white text-center">
          No Questions Yet
        </p>
      ) : (
        questions?.map((data: QuestionItemPropsTypes) => (
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
              createdAt={data.createdAt}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default QuestionList;
