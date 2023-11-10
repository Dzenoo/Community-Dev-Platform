import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TagList from "@/components/tags/TagList";
import TagsTopBar from "@/components/tags/TagsTopBar";
import { TagsData } from "@/constants";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

const TagsPage = async ({
  searchParams,
}: {
  searchParams: { search: string; filter: string };
}) => {
  const { search = "", filter = "" } = searchParams;
  const session = await getServerSession(authOptions);
  if (!session) notAuthNavigate("/");

  const filteredTags = TagsData?.filter(
    ({ name = "" }) =>
      name &&
      name.toLowerCase().includes(search.toLowerCase()) &&
      name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <h2 className="section_title text-black dark:text-white mb-6">Tags</h2>
      <TagsTopBar />
      <TagList tags={filteredTags || TagsData} />
    </section>
  );
};

export default TagsPage;
