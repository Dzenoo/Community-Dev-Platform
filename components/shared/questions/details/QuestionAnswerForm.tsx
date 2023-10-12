import Button from "@/components/ui/elements/button";
import Input from "@/components/ui/elements/input";
import { ProgrammingLanguagesData } from "@/constants";

const QuestionAnswerForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="section_title text-white">Answer</h2>
        <div className="flex gap-4">
          <select className="select">
            {ProgrammingLanguagesData.map((language) => (
              <option key={language.id} value={language.value}>
                {language.name}
              </option>
            ))}
          </select>
          <Button variant="Outlined">Generate AI answer</Button>
        </div>
      </div>
      <div>
        <Input
          id="answer"
          label=""
          type="textarea"
          placeholder="Enter Answer Here. For adding code, insert it between (```)."
        />
      </div>
      <div>
        <Button variant="Normal" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default QuestionAnswerForm;
