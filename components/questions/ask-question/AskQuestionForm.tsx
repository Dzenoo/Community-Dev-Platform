import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";

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
      <div className="flex justify-end items-end">
        <div className="max-w-2xl">
          <Button variant="Normal">Post Question</Button>
        </div>
      </div>
    </form>
  );
};

export default AskQuestionForm;
