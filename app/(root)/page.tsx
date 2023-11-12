import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchQuestions } from "@/library/actions/questions.actions";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";

enum SearchParamsFilter {
  Newest = "newest",
  Frequent = "frequent",
  Recommended = "recommended",
}

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string; filter: SearchParamsFilter };
}) {
  const questions = (await fetchQuestions()) as FetchedQuestionsPropsTypes[];
  let filteredQuestions: FetchedQuestionsPropsTypes[] = questions;

  if (searchParams.search) {
    const searchLower = searchParams.search.toLowerCase();
    filteredQuestions = questions.filter(
      (question: FetchedQuestionsPropsTypes) => {
        const titleLower = question.title.toLowerCase();
        const descriptionLower = question.description!.toLowerCase();
        return (
          titleLower.includes(searchLower) ||
          descriptionLower.includes(searchLower)
        );
      }
    );
  } else {
    if (searchParams.filter === SearchParamsFilter.Newest) {
      filteredQuestions = questions
        .slice()
        .sort(
          (a: FetchedQuestionsPropsTypes, b: FetchedQuestionsPropsTypes) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
        );
    } else if (searchParams.filter === SearchParamsFilter.Frequent) {
      filteredQuestions = questions
        .slice()
        .sort(
          (a: FetchedQuestionsPropsTypes, b: FetchedQuestionsPropsTypes) => {
            return (
              b.upvotes.length -
              b.downvotes.length -
              (a.upvotes.length - a.downvotes.length)
            );
          }
        );
    } else if (searchParams.filter === SearchParamsFilter.Recommended) {
      filteredQuestions = questions
        .slice()
        .sort(
          (a: FetchedQuestionsPropsTypes, b: FetchedQuestionsPropsTypes) => {
            return (
              b.answers.length -
              b.upvotes.length -
              (a.answers.length - a.upvotes.length)
            );
          }
        );
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
