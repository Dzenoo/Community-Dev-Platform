import Link from "next/link";
import Card from "../elements/card";
import Tags from "../tags/tags";
import { QuestionItemPropsTypes } from "@/types/questions";
import Image from "next/image";

const QuestionItem: React.FC<QuestionItemPropsTypes> = ({
  id,
  title,
  tags,
  user,
  votes,
  answers,
  views,
}) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 w-full">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <Link href={`/${id}`} className="section_title_smaller text-white">
              {title}
            </Link>
            <div className="mt-4 flex gap-4 items-stretch flex-wrap">
              {tags.map((tag) => (
                <Tags key={tag.id} id={tag.id} title={tag.title} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
            <h2 className="section_subtitle text-white">{user}</h2>
            <p className="text-white text-xs">| Asked 12h ago</p>
          </div>
        </div>
        <div className="flex items-center gap-8 justify-between flex-wrap">
          <div className="question_item_actions">
            <Image
              src="/assets/graphics/heart.png"
              alt="votes"
              width={20}
              height={20}
            />
            <span className="question_item_actions_span">{votes}</span>
            <p className="section_subtitle_smaller text-white">Votes</p>
          </div>
          <div className="question_item_actions">
            <Image
              src="/assets/graphics/comment.png"
              alt="comments"
              width={20}
              height={20}
            />
            <span className="question_item_actions_span">{answers}</span>
            <p className="section_subtitle_smaller text-white">Answers</p>
          </div>
          <div className="question_item_actions">
            <span className="question_item_actions_span">{views}</span>
            <p className="section_subtitle_smaller text-white">Views</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionItem;
