import TopBar from "@/components/home/TopBar";
import FilterBar from "@/components/home/FilterBar";
import QuestionList from "@/components/questions/QuestionList";
import { fetchQuestions } from "@/library/actions/questions.actions";
import { type QuestionItemPropsTypes as FetchedQuestionsPropsTypes } from "@/types/questions";

// Define an enum for the different filter options
enum SearchParamsFilter {
  Newest = "newest",
  Frequent = "frequent",
  Recommended = "recommended",
}

// Define the Home component
export default async function Home({
  searchParams,
}: {
  searchParams: { search: string; filter: SearchParamsFilter };
}) {
  // Fetch the questions and cast them to the appropriate type
  const questions = (await fetchQuestions()) as FetchedQuestionsPropsTypes[];

  // Initialize the filteredQuestions array with all the questions
  let filteredQuestions: FetchedQuestionsPropsTypes[] = questions;

  // If there is a search term, filter the questions by title and description
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
    // If there is no search term, sort the questions based on the selected filter
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

  // Render the Home component with the appropriate components and props
  return (
    <main className="flex flex-col gap-8">
      <TopBar />
      <FilterBar filter={searchParams.filter} />
      <QuestionList questions={filteredQuestions} showActions={false} />
    </main>
  );
}
