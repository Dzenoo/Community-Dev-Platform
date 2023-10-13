import { FilterButtonsData } from "@/constants";
import Button from "@/components/shared/ui/elements/button";

const FilterBar = () => {
  return (
    <section>
      <div className="flex gap-4 max-md:flex-wrap">
        {FilterButtonsData.map((button) => (
          <Button key={button.id} variant="Outlined">
            {button.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
