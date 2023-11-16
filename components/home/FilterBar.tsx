// Importing necessary modules
"use client";
import Button from "@/components/shared/ui/elements/button";
import { useRouter } from "next/navigation";
import { FilterButtonsData } from "@/constants";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";

// Defining a functional component FilterBar
const FilterBar = ({ filter }: { filter: string }) => {
  // Getting the router object
  const router = useRouter();

  // Function to update the search params
  function handleUpdateSearchParams(title: string, value: string): void {
    // Updating the search params and getting the new pathname
    const newPathname = updateSearchParams(title, value.toLowerCase());
    // Pushing the new pathname to the router
    router.push(newPathname);

    // If the value is empty, deleting the search param
    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  // Rendering the filter buttons
  return (
    <section>
      <div className="flex gap-4 max-md:flex-wrap">
        {FilterButtonsData.map((button) => (
          <Button
            key={button.id}
            // Setting the variant of the button based on the filter
            variant={filter === button.filter ? "Normal" : "Outlined"}
            onClick={() => {
              // Handling the click event of the button
              handleUpdateSearchParams("filter", button.filter);
            }}
          >
            {button.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

// Exporting the FilterBar component
export default FilterBar;
