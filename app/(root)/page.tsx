import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchQuestions } from "@/library/actions/questions.actions";

export default async function Home({
  searchParams: { search = "" } = {},
}: {
  searchParams?: { search?: string };
} = {}) {
  const questions: any = await fetchQuestions();
  const filteredQuestions = questions?.filter((question: any) => {
    if (search) {
      const searchLower = search.toLowerCase();
      const titleLower = question.title.toLowerCase();
      const descriptionLower = question.description.toLowerCase();

      return (
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower)
      );
    }
    return false;
  });

  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar />
      <QuestionList
        questions={search ? filteredQuestions : questions}
        showActions={false}
      />
    </main>
  );
}
