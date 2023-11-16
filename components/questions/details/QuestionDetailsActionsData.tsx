// Importing the Image component from the next/image module and the QuestionDetailsActionsDataPropsTypes type from the '@/types/questions' module
import Image from "next/image";
import { type QuestionDetailsActionsDataPropsTypes } from "@/types/questions";

// Defining the QuestionDetailsActionsData functional component that receives the icon, onClick, data and type props
const QuestionDetailsActionsData: React.FC<
  QuestionDetailsActionsDataPropsTypes
> = ({ icon, onClick, data, type }) => {
  // Returning a button element with an onClick event listener and a flex container with an Image and a span element inside
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
        className={`p-2 px-4 bg-[#004de7d5] text-white font-bold rounded-md dark:bg-[#004de777] ${
          data === undefined && "hidden"
        }`}
      >
        {data}
      </span>
    </button>
  );
};

// Exporting the QuestionDetailsActionsData component as the default export of the module
export default QuestionDetailsActionsData;
