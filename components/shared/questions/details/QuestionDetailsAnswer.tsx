import { QuestionAnswerPropsTypes } from "@/types/answer";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswerActions from "./QuestionDetailsAnswerActions";

const QuestionDetailsAnswer: React.FC<QuestionAnswerPropsTypes> = ({
  user,
  description,
  codeSnippet,
  id,
  votes,
  downvotes,
}) => {
  return (
    <div className="my-12 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
          <h2 className="section_subtitle text-white">{user}</h2>
          <p className="text-white text-xs">| Asnwered 12h ago</p>
        </div>
        <div className="">
          <QuestionDetailsAnswerActions
            votes={votes}
            downvotes={downvotes}
            id={id}
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="section_subtitle text-white">{description}</p>
      </div>
      <div>
        <QuestionDetailsCode codeSnippet={codeSnippet} />
      </div>
    </div>
  );
};

export default QuestionDetailsAnswer;
