"use client";
import { QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";
import {
  downvoteQuestion,
  saveToCollection,
  upvoteQuestion,
} from "@/library/actions/questions.actions";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import { usePathname } from "next/navigation";

const QuestionDetailsActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, upvotes, downvotes, isUserCollections }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div id={id} className="flex items-center gap-2">
      <ToastContainer />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {
          if (!session) {
            toast.error("You must be logged in to vote a question.");
            return;
          }
          // @ts-ignore
          upvoteQuestion(id, session?.user?.id, pathname);
        }}
        type="vote"
        data={upvotes}
      />
      <QuestionDetailsActionsData
        icon="/assets/graphics/down-arrow.png"
        onClick={() => {
          if (!session) {
            toast.error("You must be logged in to vote a question.");
            return;
          }
          // @ts-ignore
          downvoteQuestion(id, session?.user?.id, pathname);
        }}
        type="downvote"
        data={downvotes}
      />
      <QuestionDetailsActionsData
        icon={`${
          isUserCollections
            ? "/assets/graphics/heartFill.png"
            : "/assets/graphics/heart.png"
        }`}
        onClick={() => {
          if (!session) {
            toast.error("You must be logged in to save a question.");
            return;
          }
          // @ts-ignore
          saveToCollection(id, session?.user?.id, pathname);
        }}
        type="Save"
        data={undefined}
      />
    </div>
  );
};

export default QuestionDetailsActions;
