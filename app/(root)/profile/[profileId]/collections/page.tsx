import CollectionsTopBar from '@/components/profile/collections/CollectionsTopBar'
import QuestionList from '@/components/questions/QuestionList'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { fetchUser } from '@/library/actions/user.actions'
import { notAuthNavigate } from '@/library/utility'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

const CollectionsPage = async ({
  searchParams,
  params
}: {
  searchParams: { search: string }
  params: { profileId: string }
}) => {
  const session = await getServerSession(authOptions)
  const user = await fetchUser(params.profileId)
  const filteredQuestions = user?.savedQuestions?.filter((question: any) => {
    if (searchParams && searchParams.search) {
      const searchLower = searchParams.search.toLowerCase()
      const titleLower = question.title.toLowerCase()
      const descriptionLower = question.description.toLowerCase()

      return (
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower)
      )
    }
    return false
  })

  if (!user) notFound()
  if (!session) notAuthNavigate('/')
  // @ts-expect-error
  if (params.profileId !== session?.user.id) notAuthNavigate('/')

  return (
    <>
      <CollectionsTopBar />
      <div className="mt-12">
        <QuestionList
          questions={
            searchParams && searchParams?.search
              ? filteredQuestions
              : user?.savedQuestions
          }
        />
      </div>
    </>
  )
}

export default CollectionsPage
