import QuestionDetailsContent from '@/components/questions/details/QuestionDetailsContent'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { fetchQuestionById } from '@/library/actions/questions.actions'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

const QuestionDetails = async ({
  params
}: {
  params: { questionId: string }
}) => {
  const session = await getServerSession(authOptions)
  const question = await fetchQuestionById(params.questionId)

  if (!params.questionId || !question) notFound()

  return (
    <section className="section">
      {question && (
        <QuestionDetailsContent
          _id={question._id}
          title={question.title}
          downvotes={question.downvotes}
          description={question.description}
          upvotes={question.upvotes}
          tags={question.tags}
          user={question.user}
          answers={question.answers}
          createdAt={question.createdAt}
          // @ts-expect-error
          userId={session?.user?.id}
          showActions={false}
        />
      )}
    </section>
  )
}

export default QuestionDetails
