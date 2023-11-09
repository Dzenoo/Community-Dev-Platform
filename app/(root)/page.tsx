import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchQuestions } from "@/library/actions/questions.actions";

export default async function Home({
  searchParams = { search: "", filter: "" },
}: {
  searchParams?: { search: string; filter: string };
} = {}) {
  const questions: any = await fetchQuestions();
  let filteredQuestions = questions;

  if (searchParams.search) {
    const searchLower = searchParams.search.toLowerCase();
    filteredQuestions = questions.filter((question: any) => {
      const titleLower = question.title.toLowerCase();
      const descriptionLower = question.description.toLowerCase();
      return (
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower)
      );
    });
  } else {
    if (searchParams.filter === "newest") {
      filteredQuestions = questions.slice().sort((a: any, b: any) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    } else if (searchParams.filter === "frequent") {
      filteredQuestions = questions.slice().sort((a: any, b: any) => {
        return (
          b.upvotes.length -
          b.downvotes.length -
          (a.upvotes.length - a.downvotes.length)
        );
      });
    } else if (searchParams.filter === "recommended") {
      filteredQuestions = questions.slice().sort((a: any, b: any) => {
        return (
          b.answers.length -
          b.upvotes.length -
          (a.answers.length - a.upvotes.length)
        );
      });
    }
  }
  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar filter={searchParams.filter} />
      <QuestionList questions={filteredQuestions} showActions={false} />
    </main>
  );
}
