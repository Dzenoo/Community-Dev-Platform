import { calculateDate, generateQuestionActionsData } from "@/library/utility";
import { QuestionItemPropsTypes } from "@/types/questions";
import QuestionDetailsActions from "./QuestionDetailsActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswer from "./QuestionDetailsAnswer";
import QuestionAnswerForm from "./QuestionAnswerForm";
import Tags from "@/components/tags/TagLink";
import Image from "next/image";

const QuestionDetailsContent: React.FC<QuestionItemPropsTypes> = ({
  _id,
  user,
  title,
  description,
  answers,
  upvotes,
  downvotes,
  language,
  views,
  tags,
  createdAt,
}) => {
  const askedQUestion = calculateDate(createdAt);

  return (
    <div className="flex flex-col gap-4 pb-12">
      <div className="flex justify-end items-end">
        <QuestionDetailsActions
          upvotes={upvotes?.length}
          downvotes={downvotes?.length}
          id={_id}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src="/assets/images/profile.png"
            alt="user"
            width={40}
            height={40}
          />
          <h2 className="section_subtitle text-white">{user?.username}</h2>
          <p className="text-white text-md">| {askedQUestion}</p>
        </div>
        <div>
          <h2 className="section_title_smaller text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {generateQuestionActionsData(
            "/assets/graphics/comment.png",
            answers?.length,
            "Answers"
          )}
          {generateQuestionActionsData("", views?.length, "Views")}
        </div>
        <div className="mt-6 break-words">
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
          {tags?.map((tag) => (
            <Tags key={tag._id} _id={tag._id} title={tag.title} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="section_title text-white">
            Answers ({answers?.length})
          </h2>
          <div className="px-6 py-12 flex break-words flex-col gap-12">
            {answers?.length === 0 ? (
              <p className="section_title_smaller text-white text-center">
                No answers yet
              </p>
            ) : (
              answers?.map((answer) => (
                <QuestionDetailsAnswer
                  key={answer._id}
                  _id={answer._id}
                  user={answer.user}
                  description={answer.description}
                  language={answer.language}
                  upvotes={answer.upvotes}
                  downvotes={answer.downvotes}
                />
              ))
            )}
          </div>
        </div>
        <div className="mt-6">
          <QuestionAnswerForm questionId={_id} />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsContent;
