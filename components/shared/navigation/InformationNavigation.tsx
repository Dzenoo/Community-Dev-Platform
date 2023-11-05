import Tags from "@/components/tags/TagLink";
import Link from "next/link";
import { fetchQuestions } from "@/library/actions/questions.actions";
import { getQuestionsTags } from "@/library/utility";

const InformationNavigation = async () => {
  const questions = await fetchQuestions();
  const topQuestions = questions
    ?.reduce((acc, question) => {
      if (question.upvotes.length > 3 && question.answers.length > 3) {
        acc.push(question);
      }
      return acc;
    }, [])
    .slice(0, 3);

  const topQuestionstags = getQuestionsTags(topQuestions);
  const questionstags = getQuestionsTags(questions);

  if (questions?.length === 0) return null;

  return (
    <div className="px-6 py-8 shadow-md sticky right-0 top-0 bg-[#222222] h-screen flex flex-col gap-12 max-lg:hidden">
      <ul className="flex flex-col gap-4">
        <h2 className="section_title_smaller text-white">Top Questions</h2>
        {topQuestions?.length === 0
          ? questions?.slice(0, 3).map((question) => (
              <Link
                key={question._id}
                href={`/${question._id}`}
                className="section_subtitle_smaller w-60 text-[#ADADAD] truncate"
              >
                {question.title}
              </Link>
            ))
          : topQuestions?.map((question: any) => (
              <Link
                key={question._id}
                href={`/${question._id}`}
                className="section_subtitle_smaller w-60 text-[#ADADAD] truncate"
              >
                {question.title}
              </Link>
            ))}
      </ul>
      <div className="flex flex-col gap-4">
        <h2 className="section_title_smaller text-white">Popular Tags</h2>
        <ul className="grid grid-cols-2 gap-4">
          {topQuestionstags.length === 0
            ? questionstags.map((question: any, ind: number) => (
                <Tags _id={question} key={ind} title={question} />
              ))
            : topQuestionstags.map((question: any, ind: number) => (
                <Tags _id={question} key={ind} title={question} />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationNavigation;
