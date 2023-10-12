import CollectionsTopBar from "@/components/profile/collections/CollectionsTopBar";
import QuestionList from "@/components/questions/QuestionList";
import { QuestionsData } from "@/constants";

const CollectionsPage = () => {
  return (
    <>
      <CollectionsTopBar />
      <div className="mt-12">
        <QuestionList questions={QuestionsData} />
      </div>
    </>
  );
};

export default CollectionsPage;
