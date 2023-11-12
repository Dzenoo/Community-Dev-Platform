"use client";
import { type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import LinkButton from "../shared/ui/elements/link";

const CommunityTopBar = () => {
  const router = useRouter();

  function handleUpdateSearchParams(title: string, value: string): void {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);

    if (value === "") {
      const newPathname = deleteSearchParams(title);
      router.push(newPathname);
    }
  }

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

export default CommunityTopBar;
