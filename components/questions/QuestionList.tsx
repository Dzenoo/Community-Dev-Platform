// Importing the QuestionItem component and the types for the QuestionItemPropsTypes and QuestionListPropsTypes
import QuestionItem from "@/components/questions/QuestionItem";
import {
  type QuestionItemPropsTypes,
  type QuestionListPropsTypes,
} from "@/types/questions";

// Defining the QuestionList component as a functional component that receives questions and showActions as props
const QuestionList: React.FC<QuestionListPropsTypes> = ({
  questions,
  showActions,
}) => {
  // Returning an unordered list with a paragraph element if there are no questions, or a list of QuestionItem components if there are questions
  return (
    <ul className="pb-12 flex flex-col gap-2">
      {questions?.length === 0 ? (
        <p className="section_subtitle text-black dark:text-white text-center">
          No Questions Yet
        </p>
      ) : (
        questions?.map((data: QuestionItemPropsTypes) => (
          <li key={data._id}>
            <QuestionItem
              _id={data._id}
              title={data.title}
              downvotes={data.downvotes}
              upvotes={data.upvotes}
              showActions={showActions}
              tags={data.tags}
              user={data.user}
              answers={data.answers}
              createdAt={data.createdAt}
            />
          </li>
        ))
      )}
    </ul>
  );
};

// Exporting the QuestionList component as the default export of this module
export default QuestionList;
