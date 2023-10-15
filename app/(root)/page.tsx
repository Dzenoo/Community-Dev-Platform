import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchQuestions } from "@/library/actions/questions.actions";

export default async function Home() {
  const questions: any = await fetchQuestions();

  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar />
      <QuestionList questions={questions} showActions={false} />
    </main>
  );
}
