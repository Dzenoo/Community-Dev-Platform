import Image from "next/image";

const QuestionItemActions = () => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <div>
          <button className="text-red-400 text-xl">X</button>
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
