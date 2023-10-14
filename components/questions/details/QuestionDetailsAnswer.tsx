import { QuestionAnswerPropsTypes } from "@/types/answer";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswerActions from "./QuestionDetailsAnswerActions";
import Image from "next/image";

const QuestionDetailsAnswer: React.FC<QuestionAnswerPropsTypes> = ({
  user,
  description,
  language,
  id,
  votes,
  downvotes,
}) => {
  return (
    <div className="my-12 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src="/assets/images/profile.png"
            alt="user"
            width={40}
            height={40}
          />
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
      <div className="mt-4">
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
    </div>
  );
};

export default QuestionDetailsAnswer;
