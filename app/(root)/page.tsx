import FilterBar from "@/components/home/FilterBar";
import TopBar from "@/components/home/TopBar";
import QuestionList from "@/components/questions/QuestionList";
import { QuestionsData } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar />
      <QuestionList questions={QuestionsData} />
    </main>
  );
}
