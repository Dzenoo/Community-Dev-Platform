// Importing utility functions and hooks from external libraries
"use client";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import { useRouter } from "next/navigation";
import { type ChangeEvent } from "react";
import LinkButton from "@/components/shared/ui/elements/link";
import { useSession } from "next-auth/react";

// Defining a functional component named TopBar
const TopBar = () => {
  // Initializing the useRouter hook to get the current router object
  const router = useRouter();
  // Initializing the useSession hook to get the current user session
  const { data: session } = useSession();

  // Defining a function to update the search parameters in the URL
  function handleUpdateSearchParams(title: string, value: string): void {
    // Calling the updateSearchParams function to update the search parameters in the URL
    const newPathname = updateSearchParams(title, value.toLowerCase());
    // Navigating to the new URL with the updated search parameters
    router.push(newPathname);

    // If the search value is empty, remove the search parameter from the URL
    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  // Returning the JSX for the TopBar component
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        {/* Input field for searching questions */}
        <input
          id={"search-questions"}
          className="input w-full"
          placeholder="Search Questions"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleUpdateSearchParams("search", e.target.value);
          }}
        />
      </div>
      {/* Button to ask a question, only visible if user is logged in */}
      {session && (
        <div className="mb-2">
          <LinkButton href="/ask-question">Ask a Question</LinkButton>
        </div>
      )}
    </section>
  );
};

// Exporting the TopBar component as the default export
export default TopBar;
