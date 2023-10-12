import TagList from "@/components/tags/TagList";
import TagsTopBar from "@/components/tags/TagsTopBar";
import { TagsData } from "@/constants";

const TagsPage = () => {
  return (
    <section>
      <h2 className="section_title text-white mb-6">Tags</h2>
      <TagsTopBar />
      <TagList tags={TagsData} />
    </section>
  );
};

export default TagsPage;
