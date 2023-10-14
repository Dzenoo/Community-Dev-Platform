import { generateQuestionActionsData } from "@/library/utility";
import { QuestionItemPropsTypes } from "@/types/questions";
import QuestionDetailsActions from "./QuestionDetailsActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswer from "./QuestionDetailsAnswer";
import QuestionAnswerForm from "./QuestionAnswerForm";
import Tags from "@/components/tags/TagLink";
import Image from "next/image";

const QuestionDetailsContent: React.FC<QuestionItemPropsTypes> = ({
  id,
  user,
  title,
  description,
  answers,
  votes,
  downvotes,
  language,
  views,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-4 pb-12">
      <div className="flex justify-end items-end">
        <QuestionDetailsActions votes={votes} downvotes={downvotes} id={id} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src="/assets/images/profile.png"
            alt="user"
            width={40}
            height={40}
          />
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
          {description?.split(/```/)?.map((section, index) => {
            if (index % 2 === 0) {
              return (
                <p className="section_subtitle text-white" key={index}>
                  {section}
                </p>
              );
            } else {
              return (
                <QuestionDetailsCode
                  codeSnippet={section}
                  language={language}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className="mt-12 flex gap-4">
          {tags.map((tag) => (
            <Tags key={tag.id} {...tag} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="section_title text-white">
            Answers ({answers.length})
          </h2>
          <div className="px-6 flex flex-col gap-12">
            {answers.map((answer) => (
              <QuestionDetailsAnswer key={answer.id} {...answer} />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <QuestionAnswerForm />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsContent;
