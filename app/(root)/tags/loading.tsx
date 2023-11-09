export default function Loading () {
  return (
    <section className="flex flex-col gap-8">
      <div className="bg-white flex dark:bg-gray-800 gap-4 p-4 rounded-lg shadow-lg animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-30"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="flex flex-col gap-4 bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
