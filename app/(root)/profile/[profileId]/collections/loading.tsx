export default function Loading() {
  return (
    <section className="flex flex-col gap-8">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-30"></div>
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
  );
}
