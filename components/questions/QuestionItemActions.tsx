"use client";
import Image from "next/image";
import { deleteQuestion } from "@/library/actions/questions.actions";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const QuestionItemActions = ({ id }: { id: string }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  async function deleteQuestionConfirm() {
    const confirm = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (confirm) {
      // @ts-ignore
      await deleteQuestion(id, session?.user.id, pathname);
    }
  }

  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <div>
          <button
            className="text-red-400 text-xl"
            onClick={deleteQuestionConfirm}
          >
            X
          </button>
        </div>
        <div>
          <button>
            <Image
              src="/assets/graphics/editing.png"
              alt="editing"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionItemActions;
