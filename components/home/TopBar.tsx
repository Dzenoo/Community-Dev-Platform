"use client";
import { deleteSearchParams, updateSearchParams } from "@/library/utility";
import { useRouter } from "next/navigation";
import { type ChangeEvent } from "react";
import LinkButton from "@/components/shared/ui/elements/link";
import { useSession } from "next-auth/react";

const TopBar = () => {
  const router = useRouter();
  const { data: session } = useSession();

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleUpdateSearchParams("search", e.target.value);
          }}
        />
      </div>
      {session && (
        <div className="mb-2">
          <LinkButton href="/ask-question">Ask a Question</LinkButton>
        </div>
      )}
    </section>
  );
};

export default TopBar;
