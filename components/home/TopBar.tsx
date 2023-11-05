"use client";
import LinkButton from "@/components/shared/ui/elements/link";
import { useRouter } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import { ChangeEvent } from "react";

const TopBar = () => {
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
        <input
          id={"search-questions"}
          className="input w-full"
          placeholder="Search Questions"
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
