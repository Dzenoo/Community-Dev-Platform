"use client";
import { QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";

const QuestionDetailsActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, votes, downvotes }) => {
  return (
    <div id={id} className="flex items-center gap-2">
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {}}
        type="vote"
        data={votes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {}}
        type="downvote"
        data={downvotes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/heart.png"
        onClick={() => {}}
        type="Save"
      />
    </div>
  );
};

export default QuestionDetailsActions;
