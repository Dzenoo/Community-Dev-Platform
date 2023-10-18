import Tags from "@/components/tags/TagLink";
import Link from "next/link";
import { InformationTagsNavigationData } from "@/constants";
import { fetchQuestions } from "@/library/actions/questions.actions";

const InformationNavigation = async () => {
  const questions: any = await fetchQuestions();

  return (
    <div className="px-6 py-8 shadow-md sticky right-0 top-0 bg-[#222222] h-screen flex flex-col gap-12 max-lg:hidden">
      <ul className="flex flex-col gap-4">
        <h2 className="section_title_smaller text-white">Top Questions</h2>
        {questions.map((question: any) => (
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
          {InformationTagsNavigationData.map((question) => (
            <Tags _id={question.id} key={question.id} title={question.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationNavigation;
