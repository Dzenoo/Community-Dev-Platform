"use client";
import { QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  downvoteAnswer,
  upvoteAnswer,
} from "@/library/actions/questions.actions";

const QuestionDetailsAnswerActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, upvotes, downvotes }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div id={id} className="flex items-center gap-2">
      <ToastContainer />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {
          if (!session) {
            toast.error("You must be logged in to vote an answer.");
          }
          // @ts-ignore
          upvoteAnswer(id, session?.user?.id, pathname);
        }}
        type="vote"
        data={upvotes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {
          if (!session) {
            toast.error("You must be logged in to vote an answer.");
          }
          // @ts-ignore
          downvoteAnswer(id, session?.user?.id, pathname);
        }}
        type="downvote"
        data={downvotes}
      />
    </div>
  );
};

export default QuestionDetailsAnswerActions;
