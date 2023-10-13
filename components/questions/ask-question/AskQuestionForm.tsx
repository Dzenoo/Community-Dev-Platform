import Button from "@/components/ui/elements/button";
import Input from "@/components/ui/elements/input";

const AskQuestionForm = () => {
  return (
    <form className="flex flex-col">
      <div className="my-12 flex flex-col gap-12">
        <div>
          <Input
            id="title"
            label="Question Title"
            helperText="Be specific when asking a question"
          />
        </div>
        <div>
          <Input
            id="description"
            label="Detailed Explanation"
            helperText="Explore more about problem"
            type="textarea"
          />
        </div>
        <div>
          <Input id="tags" label="Add Tags" helperText="Add tags to question" />
        </div>
      </div>
      <div>
        <Button variant="Normal">Post Question</Button>
      </div>
    </form>
  );
};

export default AskQuestionForm;
