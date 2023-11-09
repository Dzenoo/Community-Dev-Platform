export default function Loading () {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="w-60 h-60 bg-gray-800 p-4 shadow-lg animate-pulse rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-60 animate-pulse"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-36 animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-28 animate-pulse"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-28 animate-pulse"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-28 animate-pulse"></div>
          </div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-36 animate-pulse"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="bg-white h-40 dark:bg-gray-800 flex items-center p-4 rounded-lg shadow-lg animate-pulse">
          <div className="w-16 h-16 bg-gray-400 p-4 shadow-lg animate-pulse gap-4 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
          </div>
        </div>
        <div className="bg-white h-40 dark:bg-gray-800 flex items-center gap-4 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="w-16 h-16 bg-gray-400 p-4 shadow-lg animate-pulse rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
          </div>
        </div>
        <div className="bg-white h-40 dark:bg-gray-800 flex items-center gap-4 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="w-16 h-16 bg-gray-400 p-4 shadow-lg animate-pulse rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div>
        <div className="bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
          <div className="flex gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
          <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          <div className="mt-4 flex justify-between gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
        <div className="bg-white h-40 mt-4 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
          <div className="flex gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
          <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          <div className="mt-4 flex justify-between gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
