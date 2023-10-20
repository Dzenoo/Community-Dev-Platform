"use client";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/library/utility";
import { ChangeEvent } from "react";

const CollectionsTopBar = () => {
  const router = useRouter();

  function handleUpdateSearchParams(title: string, value: string) {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);
  }

  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-white mb-4">Saved Questions</h2>
        <input
          id={"search-collections"}
          className="input w-full"
          placeholder="Search Questions"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdateSearchParams("search", e.target.value)
          }
        />
      </div>
    </section>
  );
};

export default CollectionsTopBar;
