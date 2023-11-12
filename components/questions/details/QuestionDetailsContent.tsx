import QuestionDetailsActions from "./QuestionDetailsActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import QuestionDetailsAnswer from "./QuestionDetailsAnswer";
import QuestionAnswerForm from "./QuestionAnswerForm";
import Tags from "@/components/tags/TagLink";
import Image from "next/image";
import { calculateDate } from "@/library/utility";
import { type QuestionItemPropsTypes } from "@/types/questions";
import { fetchUser } from "@/library/actions/user.actions";

const QuestionDetailsContent: React.FC<QuestionItemPropsTypes> = async ({
  _id,
  user,
  userId,
  title,
  description,
  answers,
  upvotes,
  downvotes,
  language,
  tags,
  createdAt,
}) => {
  const askedQUestion = calculateDate(createdAt);
  // @ts-ignore
  const userData = await fetchUser(userId);
  const userQuestions = userData?.savedQuestions.map(
    (question: QuestionItemPropsTypes) => question._id.toString()
  );
  const isUserQuestions: boolean = userQuestions?.includes(_id.toString());

  return (
    <div className="flex flex-col gap-4 pb-12 overflow-hidden">
      <div className="flex justify-end items-end max-md:mb-8">
        <QuestionDetailsActions
          upvotes={upvotes?.length}
          downvotes={downvotes?.length}
          isUserCollections={isUserQuestions}
          id={_id.toString()}
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
          <h2 className="section_subtitle text-black dark:text-white">
            {user?.username}
          </h2>
          <p className="text-black dark:text-white text-md">
            | {askedQUestion}
          </p>
        </div>
        <div>
          <h2 className="section_title_smaller text-black dark:text-white break-words">
            {title}
          </h2>
        </div>
        <div className="mt-6 break-words">
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
        <div className="mt-12 flex gap-4 max-md:flex-wrap">
          {tags?.map((tag, ind) => (
            <Tags key={ind} _id={tag} title={tag} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="section_title text-black dark:text-white">
            Answers ({answers?.length})
          </h2>
          <div className="px-6 py-12 flex break-words flex-col gap-12 max-md:px-3">
            {answers?.length === 0 ? (
              <p className="section_subtitle text-black dark:text-white text-center">
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
          <QuestionAnswerForm questionId={_id.toString()} />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsContent;
