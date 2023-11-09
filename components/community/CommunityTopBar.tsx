"use client";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";

const CommunityTopBar = () => {
  const router = useRouter();

  function handleUpdateSearchParams(title: string, value: string) {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);

    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-black dark:text-white mb-4">
          Community
        </h2>
        <input
          id={"search-community"}
          className="input w-full"
          placeholder="Search Community"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdateSearchParams("search", e.target.value)
          }
        />
      </div>
    </section>
  );
};

export default CommunityTopBar;
