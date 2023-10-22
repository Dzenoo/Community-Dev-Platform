"use client";
import Button from "@/components/shared/ui/elements/button";
import { useRouter } from "next/navigation";
import { FilterButtonsData } from "@/constants";
import { updateSearchParams } from "@/library/utility";

const FilterBar = ({ filter }: { filter: string }) => {
  const router = useRouter();

  function handleUpdateSearchParams(title: string, value: string) {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);
  }

  return (
    <section>
      <div className="flex gap-4 max-md:flex-wrap">
        {FilterButtonsData.map((button) => (
          <Button
            key={button.id}
            variant={filter === button.filter ? "Normal" : "Outlined"}
            onClick={() => handleUpdateSearchParams("filter", button.filter)}
          >
            {button.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
