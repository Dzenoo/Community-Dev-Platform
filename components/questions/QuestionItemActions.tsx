"use client";
import Image from "next/image";

const QuestionItemActions = ({ id }: { id: string }) => {
  function deleteQuestion() {
    const confirm = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (confirm) {
      console.log("Delete question" + id);
    }
  }

  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <div>
          <button className="text-red-400 text-xl" onClick={deleteQuestion}>
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
