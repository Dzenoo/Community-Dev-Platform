import { generateQuestionActionsData } from "@/library/utility";
import { QuestionItemPropsTypes } from "@/types/questions";
import QuestionDetailsActions from "./QuestionDetailsActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswer from "./QuestionDetailsAnswer";
import Tags from "../../tags/tags";

const QuestionDetailsContent: React.FC<QuestionItemPropsTypes> = ({
  id,
  user,
  title,
  description,
  answers,
  votes,
  downvotes,
  views,
  codeSnippet,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* ACTIONS */}
      <div className="flex justify-end items-end">
        <QuestionDetailsActions votes={votes} downvotes={downvotes} id={id} />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
          <h2 className="section_subtitle text-white">{user}</h2>
          <p className="text-white text-xs">| Asked 12h ago</p>
        </div>
        <div>
          <h2 className="section_title_smaller text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {generateQuestionActionsData(
            "/assets/graphics/comment.png",
            answers.length,
            "Answers"
          )}
          {generateQuestionActionsData("", views, "Views")}
        </div>
        <div className="mt-6">
          <p className="section_subtitle text-white">{description}</p>
        </div>
        <div>
          <QuestionDetailsCode codeSnippet={codeSnippet} />
        </div>
        <div className="mt-12 flex gap-4">
          {tags.map((tag) => (
            <Tags key={tag.id} {...tag} />
          ))}
        </div>
        <div className="mt-12 pb-12">
          <h2 className="section_title text-white">Answers</h2>
          {answers.map((answer) => (
            <QuestionDetailsAnswer key={answer.id} {...answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsContent;