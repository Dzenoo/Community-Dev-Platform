// Importing the necessary modules
"use client";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import { type ChangeEvent } from "react";

// Defining a functional component named CollectionsTopBar
const CollectionsTopBar = () => {
  // Getting the router object from Next.js
  const router = useRouter();

  // Defining a function to update the search parameters in the URL
  function handleUpdateSearchParams(title: string, value: string): void {
    // Updating the search parameters in the URL
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);

    // If the search value is empty, remove the search parameter from the URL
    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  // Returning the JSX for the component
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-black dark:text-white mb-4">
          Saved Questions
        </h2>
        <input
          id={"search-collections"}
          className="input w-full"
          placeholder="Search Questions"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleUpdateSearchParams("search", e.target.value);
          }}
        />
      </div>
    </section>
  );
};

// Exporting the CollectionsTopBar component as the default export
export default CollectionsTopBar;
