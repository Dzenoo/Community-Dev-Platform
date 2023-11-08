import Image from "next/image";
import QuestionDetailsAnswerActions from "./QuestionDetailsAnswerActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import { QuestionAnswerPropsTypes } from "@/types/answer";

const QuestionDetailsAnswer: React.FC<QuestionAnswerPropsTypes> = ({
  user,
  description,
  language,
  _id,
  upvotes,
  downvotes,
}) => {
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src="/assets/images/profile.png"
            alt="user"
            width={40}
            height={40}
          />
          <h2 className="section_subtitle text-black dark:text-white font-bold">
            {user?.username}
          </h2>
        </div>
        <div className="">
          <QuestionDetailsAnswerActions
            upvotes={upvotes?.length}
            downvotes={downvotes?.length}
            id={_id}
          />
        </div>
      </div>
      <div className="mt-4">
        {description?.split(/```/)?.map((section, index) => {
          if (index % 2 === 0) {
            return (
              <p
                className="section_subtitle text-black dark:text-white"
                key={index}
              >
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
