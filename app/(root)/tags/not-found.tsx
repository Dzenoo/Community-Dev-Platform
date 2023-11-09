import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 text-center">
      <h2>Oops! Page not found</h2>
      <Link href="/tags" className="text-blue-600">
        Go To Tags
      </Link>
    </div>
  )
}

export default NotFound
