import TagList from "@/components/tags/TagList";
import TagsTopBar from "@/components/tags/TagsTopBar";
import { TagsData } from "@/constants";
import { type TagItemPropsTypes } from "@/types/tags";

// Define the TagsPage component as an async function that takes searchParams as a parameter
const TagsPage = async ({
  searchParams,
}: {
  searchParams: { search: string; filter: string };
}) => {
  // Destructure searchParams to get search and filter values, defaulting to empty strings if they are not provided
  const { search = "", filter = "" } = searchParams;
  // Filter the TagsData array to only include tags whose name includes the search and filter values
  const filteredTags: TagItemPropsTypes[] = TagsData.filter(
    ({ name = "" }) =>
      name &&
      name.toLowerCase().includes(search.toLowerCase()) &&
      name.toLowerCase().includes(filter.toLowerCase())
  );

  // Render the TagsPage component, including the TagsTopBar and TagList components
  return (
    <section>
      <h2 className="section_title text-black dark:text-white mb-6">Tags</h2>
      <TagsTopBar />
      <TagList tags={filteredTags || TagsData} />
    </section>
  );
};

export default TagsPage;
