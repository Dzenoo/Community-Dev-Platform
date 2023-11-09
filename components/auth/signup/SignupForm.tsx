'use client'
import Button from '@/components/shared/ui/elements/button'
import Input from '@/components/shared/ui/elements/input'
import { signupUser } from '@/library/actions/user.actions'
import { useForm } from '@/library/hooks/use-form'
import { useRouter } from 'next/navigation'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '@/library/validators/validators'
import { checkFormValidity } from '@/library/utility'
import { ToastContainer, toast } from 'react-toastify'

const SignupForm = () => {
  const router = useRouter()
  const { formState, inputChangeHandler } = useForm({
    name: {
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    },
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    }
  })

  const isFormValid = checkFormValidity(
    formState.inputs.name.value === '' ||
      formState.inputs.email.value === '' ||
      formState.inputs.username.value === '' ||
      formState.inputs.password.value === ''
  )

  async function onSubmitHandler (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      formState.inputs.name.value === '' ||
      formState.inputs.email.value === '' ||
      formState.inputs.username.value === '' ||
      formState.inputs.password.value === ''
    ) {
      toast.error('Please fill all fields')
      return
    }

    if (isFormValid) {
      try {
        const response = await signupUser(
          formState.inputs.name.value,
          formState.inputs.email.value,
          formState.inputs.username.value,
          formState.inputs.password.value
        )

        if (response) {
          router.push('/login')
        } else {
          throw new Error()
        }
      } catch (error) {
        // @ts-expect-error
        toast.error('User already exist. Please try again.')
      }
    }
  }

  return (
    <form className="flex flex-col gap-9" onSubmit={onSubmitHandler}>
      <ToastContainer />
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          label="Name"
          id="name"
          placeholder="Enter Name"
          isValid={formState.inputs.name.isValid}
          errorText="Please enter a valid name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { inputChangeHandler('name', e.target.value, [VALIDATOR_MINLENGTH(3)]) }
          }
        />
        <div className="form_flex">
          <Input
            type="email"
            label="Email"
            id="email"
            placeholder="Enter Email"
            isValid={formState.inputs.email.isValid}
            errorText="Please enter a valid email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { inputChangeHandler('email', e.target.value, [VALIDATOR_EMAIL()]) }
            }
          />
          <Input
            type="text"
            label="Username"
            id="username"
            placeholder="Enter Username"
            isValid={formState.inputs.username.isValid}
            errorText="Please enter a valid username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChangeHandler('username', e.target.value, [
                VALIDATOR_MINLENGTH(3)
              ])
            }
            }
          />
        </div>
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter Password"
          isValid={formState.inputs.password.isValid}
          errorText="Please enter a valid password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChangeHandler('password', e.target.value, [
              VALIDATOR_MINLENGTH(3)
            ])
          }
          }
        />
      </div>
      <Button
        variant={isFormValid ? 'Normal' : 'Danger'}
        type="submit"
        disabled={!isFormValid}
      >
        Signup
      </Button>
    </form>
  )
}

export default SignupForm
