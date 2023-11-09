import Link from 'next/link'
import { type TagsPropsTypes } from '@/types/tags'

const TagLink: React.FC<TagsPropsTypes> = ({ _id, title }) => {
  return (
    <Link href={`/tags/${_id}`} className="tags card_animation">
      {title}
    </Link>
  )
}

export default TagLink
