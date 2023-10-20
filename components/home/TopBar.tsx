"use client";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/library/utility";
import { ChangeEvent } from "react";
import LinkButton from "@/components/shared/ui/elements/link";

const TopBar = () => {
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
        <LinkButton href="/ask-question">Ask a Question</LinkButton>
      </div>
    </section>
  );
};

export default TopBar;
