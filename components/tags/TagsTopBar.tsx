"use client";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/library/utility";
import { ChangeEvent } from "react";
import { ProgrammingLanguagesData } from "@/constants";

const TagsTopBar = () => {
  const router = useRouter();

  function handleUpdateSearchParams(title: string, value: string) {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);
  }

  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <input
          id={"search-tags"}
          className="input w-full"
          placeholder="Search Tags"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdateSearchParams("search", e.target.value)
          }
        />
      </div>
      <div className="mb-2">
        <select
          className="select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleUpdateSearchParams("filter", e.target.value)
          }
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

export default TagsTopBar;
