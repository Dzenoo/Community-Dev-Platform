export default function Loading() {
  return (
    <section className="flex flex-col gap-12">
      {/* TOPBAR */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
        <div className="flex justify-between gap-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 grow"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
        </div>
      </div>
      {/* FILTER */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
        <div className="flex justify-between gap-4 max-lg:flex-col">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 max-lg:w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 max-lg:w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 max-lg:w-full"></div>
        </div>
      </div>
      {/* QUESTIONS LIST */}
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
