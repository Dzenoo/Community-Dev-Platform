"use client";
import { QuestionDetailsActionsDataPropsTypes } from "@/types/questions";
import Image from "next/image";

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
      {data && (
        <span className="p-2 bg-[#004de777] text-white font-bold rounded-md">
          {data}
        </span>
      )}
    </button>
  );
};

export default QuestionDetailsActionsData;
