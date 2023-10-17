"use client";
import { QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";
import {
  downvoteQuestion,
  saveToCollection,
  upvoteQuestion,
} from "@/library/actions/questions.actions";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const QuestionDetailsActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, upvotes, downvotes }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div id={id} className="flex items-center gap-2">
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        // @ts-ignore
        onClick={() => upvoteQuestion(id, session?.user?.id, pathname)}
        type="vote"
        data={upvotes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        // @ts-ignore
        onClick={() => downvoteQuestion(id, session?.user?.id, pathname)}
        type="downvote"
        data={downvotes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/heart.png"
        // @ts-ignore
        onClick={() => saveToCollection(id, session?.user?.id, pathname)}
        type="Save"
        data={undefined}
      />
    </div>
  );
};

export default QuestionDetailsActions;
