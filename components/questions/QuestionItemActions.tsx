// Importing necessary modules
"use client";
import { deleteQuestion } from "@/library/actions/questions.actions";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import { usePathname } from "next/navigation";

// Defining QuestionItemActions component
const QuestionItemActions = ({ id }: { id: string }) => {
  // Getting the current session and pathname
  const { data: session } = useSession();
  const pathname: string = usePathname();

  // Function to confirm question deletion
  async function deleteQuestionConfirm(): Promise<void> {
    // Confirming deletion
    const confirm = window.confirm(
      "Are you sure you want to delete this question?"
    );

    // Checking if user is logged in
    if (!session) {
      toast.error("You must be logged in to delete a question.");
      return;
    }

    // Deleting the question if confirmed
    if (confirm) {
      // @ts-ignore
      await deleteQuestion(id, session?.user.id, pathname);
    }
  }

  // Returning the component
  return (
    <div>
      <ToastContainer />
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <div>
          {/* Button to delete the question */}
          <button
            className="text-red-400 text-xl"
            onClick={deleteQuestionConfirm}
          >
            X
          </button>
        </div>
        {/* <div>
          @ts-ignore
          <Link href={`/profile/${session?.user.id}/${id}/edit-question`}>
            <Image
              src="/assets/graphics/editing.png"
              alt="editing"
              width={20}
              height={20}
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

// Exporting the component
export default QuestionItemActions;
