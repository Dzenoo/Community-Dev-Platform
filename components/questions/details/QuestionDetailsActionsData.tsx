"use client";
import Image from "next/image";
import { QuestionDetailsActionsDataPropsTypes } from "@/types/questions";

const QuestionDetailsActionsData: React.FC<
  QuestionDetailsActionsDataPropsTypes
> = ({ icon, onClick, data, type }) => {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <Image
        src={icon}
        alt={type}
        width={26}
        height={26}
        className={`${type === "vote" && "rotate-180"}`}
      />
      <span
        className={`p-2 px-4 bg-[#004de777] text-white font-bold rounded-md ${
          data === undefined && "hidden"
        }`}
      >
        {data}
      </span>
    </button>
  );
};

export default QuestionDetailsActionsData;
