import { QuestionsData } from "@/constants";
import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar />
      <QuestionList questions={QuestionsData} />
    </main>
  );
}
