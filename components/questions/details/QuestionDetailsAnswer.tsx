// Importing the Image component from the next/image module
import Image from "next/image";

// Importing the QuestionDetailsAnswerActions, QuestionDetailsCode and QuestionAnswerPropsTypes components from their respective files
import QuestionDetailsAnswerActions from "./QuestionDetailsAnswerActions";
import QuestionDetailsCode from "./QuestionDetailsCode";
import { type QuestionAnswerPropsTypes } from "@/types/answer";

// Defining a functional component named QuestionDetailsAnswer that takes in the following props: user, description, language, _id, upvotes, downvotes
const QuestionDetailsAnswer: React.FC<QuestionAnswerPropsTypes> = ({
  user,
  description,
  language,
  _id,
  upvotes,
  downvotes,
}) => {
  // Returning the following JSX
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Displaying the user's profile picture */}
          <Image
            src="/assets/images/profile.png"
            alt="user"
            width={40}
            height={40}
          />
          {/* Displaying the user's username */}
          <h2 className="section_subtitle text-black dark:text-white font-bold">
            {user?.username}
          </h2>
        </div>
        {/* Displaying the QuestionDetailsAnswerActions component */}
        <div className="">
          <QuestionDetailsAnswerActions
            upvotes={upvotes?.length}
            downvotes={downvotes?.length}
            id={_id}
          />
        </div>
      </div>
      <div className="mt-4">
        {/* Splitting the description into sections based on the ``` delimiter */}
        {description?.split(/```/)?.map((section, index) => {
          // If the index is even, display the section as a paragraph
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
            // If the index is odd, display the section as a QuestionDetailsCode component
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

// Exporting the QuestionDetailsAnswer component as the default export of this file
export default QuestionDetailsAnswer;
