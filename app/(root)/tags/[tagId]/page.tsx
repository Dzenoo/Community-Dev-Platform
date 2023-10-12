import QuestionList from "@/components/questions/QuestionList";
import { TagsData } from "@/constants";

const TagsDetailsPage = ({ params }: { params: { tagId: string } }) => {
  const tag = TagsData.find((tag) => tag.id === params.tagId);

  return (
    <section>
      <div>
        <h2 className="section_title text-white">
          {tag?.name.charAt(0).toUpperCase()}
          {tag?.name.slice(1)}
        </h2>
      </div>
      <div className="mt-12">
        <QuestionList />
      </div>
    </section>
  );
};

export default TagsDetailsPage;
