'use client'
import SignupCard from '@/components/auth/signup/SignupCard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const SignupPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  if (session?.user) {
    router.push('/')
  }

  return (
    <section className="py-12 flex justify-center items-center max-md:px-4">
      <SignupCard />
    </section>
  )
}

export default SignupPage
