import Link from "next/link";
import Card from "@/components/shared/ui/elements/card";
import Tags from "@/components/tags/TagLink";
import QuestionItemActions from "./QuestionItemActions";
import { QuestionItemPropsTypes } from "@/types/questions";
import { calculateDate, generateQuestionActionsData } from "@/library/utility";
import Image from "next/image";

const QuestionItem: React.FC<QuestionItemPropsTypes> = ({
  _id,
  title,
  tags,
  user,
  showActions,
  upvotes,
  answers,
  views,
  createdAt,
}) => {
  const askedQUestion = calculateDate(createdAt);

  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 w-full overflow-hidden">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <Link
                href={`/${_id}`}
                className="section_title_smaller text-white"
              >
                {title}
              </Link>
              <div className="mt-4 flex gap-4 items-stretch flex-wrap">
                {tags?.map((tag, ind) => (
                  <Tags key={ind} _id={tag} title={tag} />
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
              <h2 className="section_subtitle text-white">{user?.username}</h2>
              <p className="text-white text-xs">| {askedQUestion}</p>
            </div>
          </div>
          {showActions && <QuestionItemActions id={_id} />}
        </div>
        <div className="flex items-center gap-8 justify-between flex-wrap">
          {generateQuestionActionsData(
            "/assets/graphics/heart.png",
            upvotes?.length,
            "Votes"
          )}
          {generateQuestionActionsData(
            "/assets/graphics/comment.png",
            answers?.length,
            "Answers"
          )}
          {generateQuestionActionsData("", views?.length, "Views")}
        </div>
      </div>
    </Card>
  );
};

export default QuestionItem;
