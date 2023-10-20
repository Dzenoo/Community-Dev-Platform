export default function Loading() {
  return (
    <section className="flex flex-col gap-16">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
        <div className="flex justify-between gap-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 grow"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-96 animate-pulse">
        <div className="flex justify-between gap-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 grow"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
        <div className="flex justify-between gap-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36 grow"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
        </div>
      </div>
    </section>
  );
}
