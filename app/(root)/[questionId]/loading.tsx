export default function Loading() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 pb-12">
        <div className="flex justify-end items-end">
          {/* Loading skeleton for actions */}
          <div className="w-20 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Loading skeleton for user profile image */}
            <div className="w-20 h-20 bg-gray-800 p-4 shadow-lg animate-pulse rounded-full"></div>
            {/* Loading skeleton for username */}
            <div className="w-40 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
            {/* Loading skeleton for question asked date */}
            <div className="w-24 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          </div>
          {/* Loading skeleton for title */}
          <div className="w-full h-10 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          <div className="flex items-center gap-4 flex-wrap">
            {/* Loading skeleton for answers count */}
            <div className="w-16 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
            {/* Loading skeleton for views count */}
            <div className="w-16 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          </div>
          {/* Loading skeleton for description */}
          <div className="w-full h-48 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          <div className="mt-12 flex gap-4">
            {/* Loading skeleton for tags */}
            <div className="w-20 h-6 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          </div>
          <div className="mt-12">
            <h2 className="section_title text-black dark:text-white">
              Answers
            </h2>
            <div className="px-6 py-12 flex break-words flex-col gap-12">
              {/* Loading skeleton for answers */}
              <div className="w-full h-16 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
            </div>
          </div>
          <div className="mt-6">
            {/* Loading skeleton for answer form */}
            <div className="w-full h-16 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
