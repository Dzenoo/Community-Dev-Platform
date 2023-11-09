import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 text-center">
      <h2>Oops! Profile not found</h2>
      <Link href="/" className="text-blue-600">
        Go home
      </Link>
    </div>
  )
}

export default NotFound
