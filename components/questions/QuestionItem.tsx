// Importing necessary modules
import Link from "next/link";
import Card from "@/components/shared/ui/elements/card";
import Tags from "@/components/tags/TagLink";
import Image from "next/image";
import QuestionItemActions from "./QuestionItemActions";
import { type QuestionItemPropsTypes } from "@/types/questions";
import { calculateDate, generateQuestionActionsData } from "@/library/utility";

// Defining the QuestionItem component
const QuestionItem: React.FC<QuestionItemPropsTypes> = ({
  _id,
  title,
  tags,
  user,
  showActions,
  upvotes,
  answers,
  createdAt,
}) => {
  // Calculating the time since the question was asked
  const askedQUestion: string = calculateDate(createdAt);

  // Rendering the component
  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 w-full overflow-hidden">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col justify-between gap-12">
            <div>
              {/* Link to the question page */}
              <Link
                href={`/${_id}`}
                className="section_title_smaller text-black  dark:text-white"
              >
                {title}
              </Link>
              {/* Displaying the tags */}
              <div className="mt-4 flex gap-4 items-stretch flex-wrap">
                {tags?.map((tag, ind) => (
                  <Tags key={ind} _id={tag} title={tag} />
                ))}
              </div>
            </div>
            {/* Displaying the user who asked the question and the time since it was asked */}
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
          </div>
          {/* Displaying the actions for the question */}
          {showActions && <QuestionItemActions id={_id} />}
        </div>
        {/* Displaying the number of upvotes, answers, and tags */}
        <div className="flex items-center gap-8 justify-between flex-wrap max-md:justify-center">
          {generateQuestionActionsData(upvotes?.length, "Votes")}
          {generateQuestionActionsData(answers?.length, "Answers")}
          {generateQuestionActionsData(tags?.length, "Tags")}
        </div>
      </div>
    </Card>
  );
};

// Exporting the component
export default QuestionItem;
