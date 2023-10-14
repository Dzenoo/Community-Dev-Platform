import Link from "next/link";
import Card from "@/components/shared/ui/elements/card";
import Tags from "@/components/tags/TagLink";
import QuestionItemActions from "./QuestionItemActions";
import { QuestionItemPropsTypes } from "@/types/questions";
import { generateQuestionActionsData } from "@/library/utility";
import Image from "next/image";

const QuestionItem: React.FC<QuestionItemPropsTypes> = ({
  id,
  title,
  tags,
  user,
  showActions,
  votes,
  answers,
  views,
}) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 w-full">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <Link
                href={`/${id}`}
                className="section_title_smaller text-white"
              >
                {title}
              </Link>
              <div className="mt-4 flex gap-4 items-stretch flex-wrap">
                {tags.map((tag) => (
                  <Tags key={tag.id} id={tag.id} title={tag.title} />
                ))}
              </div>
            </div>
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
          </div>
          {showActions && <QuestionItemActions />}
        </div>
        <div className="flex items-center gap-8 justify-between flex-wrap">
          {generateQuestionActionsData(
            "/assets/graphics/heart.png",
            votes,
            "Votes"
          )}
          {generateQuestionActionsData(
            "/assets/graphics/comment.png",
            answers.length,
            "Answers"
          )}
          {generateQuestionActionsData("", views, "Views")}
        </div>
      </div>
    </Card>
  );
};

export default QuestionItem;
