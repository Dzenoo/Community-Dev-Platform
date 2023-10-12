import Input from "@/components/ui/elements/input";
import { ProgrammingLanguagesData } from "@/constants";

const CollectionsTopBar = () => {
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-white mb-4">Saved Questions</h2>
        <Input
          id={"search-questions"}
          label={"Search Questions"}
          placeholder="Search Questions"
        />
      </div>
      <div className="mb-2">
        <select className="select">
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

export default CollectionsTopBar;
