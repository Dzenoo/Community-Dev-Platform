// Importing necessary modules
"use client";
import { type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import LinkButton from "../shared/ui/elements/link";

// Defining the CommunityTopBar component
const CommunityTopBar = () => {
  // Getting the router object
  const router = useRouter();

  // Function to update the search parameters
  function handleUpdateSearchParams(title: string, value: string): void {
    // Updating the search parameters in the URL
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);

    // If the search value is empty, deleting the search parameter from the URL
    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  // Returning the JSX for the CommunityTopBar component
  return (
    <section className="flex justify-between items-stretch gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-black dark:text-white mb-4">
          Community
        </h2>
        <div className="flex gap-3 items-center max-md:flex-wrap">
          <div className="grow basis-full">
            <input
              id={"search-community"}
              className="input w-full"
              placeholder="Search Community"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleUpdateSearchParams("search", e.target.value);
              }}
            />
          </div>
          <div>
            <LinkButton href="/community/leaderboard">Leaderboard</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the CommunityTopBar component
export default CommunityTopBar;
