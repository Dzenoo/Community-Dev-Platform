// Importing necessary modules and components
"use client";
import { type QuestionDetailsActionsContentPropsTypes } from "@/types/questions";
import QuestionDetailsActionsData from "./QuestionDetailsActionsData";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  downvoteAnswer,
  upvoteAnswer,
} from "@/library/actions/questions.actions";
import { useTheme } from "next-themes";

// Defining the component and its props
const QuestionDetailsAnswerActions: React.FC<
  QuestionDetailsActionsContentPropsTypes
> = ({ id, upvotes, downvotes }) => {
  // Getting the user session and the current theme
  const { data: session } = useSession();
  const { theme } = useTheme();
  const pathname: string = usePathname();

  // If the user is not logged in, display a message to prompt them to log in
  if (!session) return <p>Login to Vote Answer</p>;

  // Rendering the component with the upvote and downvote buttons
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
            toast.error("You must be logged in to vote an answer.");
            return;
          }
          // @ts-ignore
          upvoteAnswer(id, session?.user?.id, pathname);
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
            toast.error("You must be logged in to vote an answer.");
            return;
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

// Exporting the component
export default QuestionDetailsAnswerActions;
