// Importing the necessary modules
"use client";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import { type ChangeEvent } from "react";
import { ProgrammingLanguagesData } from "@/constants";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Defining the TagsTopBar component
const TagsTopBar = () => {
  // Getting the router instance
  const router: AppRouterInstance = useRouter();

  // Function to update the search params
  function handleUpdateSearchParams(title: string, value: string): void {
    // Updating the search params and pushing the new path to the router
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);

    // If the value is empty, deleting the search param and pushing the new path to the router
    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  // Returning the JSX for the TagsTopBar component
  return (
    <section className="flex justify-between card_animation items-end gap-6 flex-wrap">
      <div className="grow">
        <input
          id={"search-tags"}
          className="input w-full"
          placeholder="Search Tags"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleUpdateSearchParams("search", e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <select
          className="select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            handleUpdateSearchParams("filter", e.target.value);
          }}
        >
          {ProgrammingLanguagesData.map((language) => (
            <option key={language.id} value={language.value}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

// Exporting the TagsTopBar component
export default TagsTopBar;
