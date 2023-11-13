"use client";
import { type QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";
import {
  downvoteQuestion,
  saveToCollection,
  upvoteQuestion,
} from "@/library/actions/questions.actions";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const QuestionDetailsActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, upvotes, downvotes, isUserCollections }) => {
  const { data: session } = useSession();
  const { theme } = useTheme();
  const pathname: string = usePathname();

  if (!session) return <p>Login to Vote Question</p>;

  const isDarkTheme: boolean = theme === "dark";
  const path: string = isDarkTheme
    ? isUserCollections
      ? "/assets/graphics/heartFill.png"
      : "/assets/graphics/heart.png"
    : isUserCollections
    ? "/assets/graphics/dark/like.png"
    : "/assets/graphics/dark/heart.png";

  return (
    <div id={id} className="flex items-center gap-2">
      <ToastContainer />
      <QuestionDetailsActionsData
        icon={
          theme === "dark"
            ? "/assets/graphics/down-arrow.png"
            : "/assets/graphics/dark/down-arrow.png"
        }
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
        icon={
          theme === "dark"
            ? "/assets/graphics/down-arrow.png"
            : "/assets/graphics/dark/down-arrow.png"
        }
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
        icon={path}
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
