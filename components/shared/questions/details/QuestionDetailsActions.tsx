import {
  QuestionDetailsActionsButtonPropsTypes,
  QuestionDetailsActionsContentPropsTypes,
} from "@/types/questions";
import Image from "next/image";

const QuestionDetailsActionsButton: React.FC<
  QuestionDetailsActionsButtonPropsTypes
> = ({ icon, onClick, data, type }) => {
  return (
    <button onClick={onClick} className="flex gap-2">
      <Image
        src={icon}
        alt={type}
        width={26}
        height={26}
        className={`${type === "vote" && "rotate-180"}`}
      />
      {data && (
        <span className="p-2 bg-[#004de777] text-white font-bold rounded-md">
          {data}
        </span>
      )}
    </button>
  );
};

const QuestionDetailsActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, votes, downvotes }) => {
  return (
    <div id={id} className="flex items-center gap-2">
      <QuestionDetailsActionsButton
        icon="/assets/graphics/down-arrow.png"
        onClick={""}
        data={votes}
        type="vote"
      />
      <QuestionDetailsActionsButton
        icon="/assets/graphics/down-arrow.png"
        onClick={""}
        data={downvotes}
        type="downvote"
      />
      <QuestionDetailsActionsButton
        icon="/assets/graphics/heart.png"
        onClick={""}
        type="Save"
      />
    </div>
  );
};

export default QuestionDetailsActions;
