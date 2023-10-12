import { ProgrammingLanguagesData } from "@/constants";
import Input from "../ui/elements/input";

const TagsTopBar = () => {
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <Input
          id={"search-tags"}
          label={"Search Tags"}
          placeholder="Search Tags"
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

export default TagsTopBar;
