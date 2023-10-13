import { ProgrammingLanguagesData } from "@/constants";
import Input from "@/components/shared/ui/elements/input";

const CommunityTopBar = () => {
  return (
    <section className="flex justify-between items-end gap-6 flex-wrap">
      <div className="grow">
        <h2 className="section_title text-white mb-4">Community</h2>
        <Input
          id={"search-community"}
          label={"Search Community"}
          placeholder="Search Community"
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

export default CommunityTopBar;
