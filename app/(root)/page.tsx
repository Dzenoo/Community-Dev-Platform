import FilterBar from "@/components/home/FilterBar";
import TopBar from "@/components/home/TopBar";
import QuestionList from "@/components/ui/questions/QuestionList";

export default function Home() {
  return (
    <main>
      <TopBar />
      <FilterBar />
      <QuestionList />
    </main>
  );
}
