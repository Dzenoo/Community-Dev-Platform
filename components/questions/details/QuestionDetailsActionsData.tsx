'use client'
import Image from 'next/image'
import { type QuestionDetailsActionsDataPropsTypes } from '@/types/questions'

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
        className={`${type === 'vote' && 'rotate-180'}`}
      />
      <span
        className={`p-2 px-4 bg-[#004de7d5] text-white font-bold rounded-md dark:bg-[#004de777] ${
          data === undefined && 'hidden'
        }`}
      >
        {data}
      </span>
    </button>
  )
}

export default QuestionDetailsActionsData
