import Input from "@/components/shared/ui/elements/input";
import LinkButton from "@/components/shared/ui/elements/link";

const TopBar = () => {
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <Input
          id={"search-questions"}
          label={"Search Questions"}
          placeholder="Search Questions"
          isValid={true}
        />
      </div>
      <div className="mb-2">
        <LinkButton href="/ask-question">Ask a Question</LinkButton>
      </div>
    </section>
  );
};

export default TopBar;
