export default function Loading() {
  return (
    <section className="flex flex-col gap-8">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-30"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center gap-4 bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-36 bg-gray-300 dark:bg-gray-600 rounded-full w-36"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center  bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-36 bg-gray-300 dark:bg-gray-600 rounded-full w-36"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
        <div className="flex flex-col items-center  gap-4 bg-white h-40 dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-36 bg-gray-300 dark:bg-gray-600 rounded-full w-36"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
