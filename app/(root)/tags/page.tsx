import TagList from '@/components/tags/TagList'
import TagsTopBar from '@/components/tags/TagsTopBar'
import { TagsData } from '@/constants'

const TagsPage = ({
  searchParams: { search = '', filter = '' } = {}
}: {
  searchParams?: { search?: string, filter?: string }
} = {}) => {
  const filteredTags = TagsData?.filter(
    ({ name = '' }) =>
      name.toLowerCase().includes(search.toLowerCase()) &&
      name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <section>
      <h2 className="section_title text-black dark:text-white mb-6">Tags</h2>
      <TagsTopBar />
      <TagList tags={filteredTags || TagsData} />
    </section>
  )
}

export default TagsPage
