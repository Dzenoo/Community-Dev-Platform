'use client'
import Button from '@/components/shared/ui/elements/button'
import Input from '@/components/shared/ui/elements/input'
import { ProgrammingLanguagesData } from '@/constants'
import { answerOnQuestion } from '@/library/actions/questions.actions'
import { useForm } from '@/library/hooks/use-form'
import { useSession } from 'next-auth/react'
import { checkFormValidity } from '@/library/utility'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '@/library/validators/validators'
import { ToastContainer, toast } from 'react-toastify'
import { type ChangeEvent } from 'react'

const QuestionAnswerForm = ({ questionId }: { questionId: string }) => {
  const { data: session } = useSession()
  const { formState, inputChangeHandler } = useForm({
    description: {
      value: '',
      isValid: false
    },
    language: {
      value: '',
      isValid: false
    }
  })

  const isLang = formState.inputs.description.value.includes('```')

  const formIsValid = checkFormValidity(
    !formState.inputs.description.isValid ||
      (isLang && !formState.inputs.language.isValid)
  )

  async function onAnswerSubmitHandler (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!session) {
      toast.error('You must be logged in to answer a question.')
      return
    }

    if (formIsValid) {
      await answerOnQuestion(
        // @ts-expect-error
        session.user.id,
        questionId,
        formState.inputs.description.value,
        isLang ? formState.inputs.language.value : '',
        `/questions/${questionId}`
      )
      formState.inputs.description.value = ''
      formState.inputs.description.isValid = false
      isLang && (formState.inputs.language.value = '')
    } else {
      toast.error('Please fill all fields.')
    }
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={onAnswerSubmitHandler}>
      <ToastContainer />
      <div className="flex justify-between gap-4 max-md:flex-wrap">
        <h2 className="section_title text-black dark:text-white">Answer</h2>
        {isLang && (
          <div className="flex gap-4 max-md:basis-full">
            <select
              className="select"
              value={formState?.inputs.language?.value}
              onChange={(e) => {
                inputChangeHandler('language', e.target.value, [
                  VALIDATOR_REQUIRE()
                ])
              }
              }
            >
              {ProgrammingLanguagesData.map((language) => (
                <option key={language.id} value={language.value}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div>
        <Input
          id="answer"
          label=""
          elementType="textarea"
          val={formState?.inputs.description?.value}
          isValid={formState?.inputs.description?.isValid}
          // errorText="Please enter a valid answer."
          placeholder="Enter Answer Here. For adding code, insert it between (```)."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            inputChangeHandler('description', e.target.value, [
              VALIDATOR_MINLENGTH(40)
            ])
          }
          }
        />
      </div>
      <div className="flex justify-end items-end">
        <div>
          <Button
            variant={formIsValid ? 'Normal' : 'Danger'}
            type="submit"
            disabled={!formIsValid}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}

export default QuestionAnswerForm
