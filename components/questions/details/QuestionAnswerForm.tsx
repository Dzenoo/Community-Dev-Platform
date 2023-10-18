"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { ProgrammingLanguagesData } from "@/constants";
import { answerOnQuestion } from "@/library/actions/questions.actions";
import { useForm } from "@/library/hooks/use-form";
import { useSession } from "next-auth/react";
import { checkFormValidity } from "@/library/utility";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/library/validators/validators";
import { ChangeEvent } from "react";

const QuestionAnswerForm = ({ questionId }: { questionId: string }) => {
  const { data: session } = useSession();
  const { formState, inputChangeHandler } = useForm({
    description: {
      value: "",
      isValid: true,
    },
    language: {
      value: "",
      isValid: true,
    },
  });

  const formIsValid = checkFormValidity(
    formState.inputs.description.value === "" ||
      formState.inputs.language.value === ""
  );

  async function onAnswerSubmitHandler(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsValid) {
      await answerOnQuestion(
        // @ts-ignore
        session.user.id,
        questionId,
        formState.inputs.description.value,
        formState.inputs.language.value,
        `/questions/${questionId}`
      );
    } else {
      alert("Please fill all fields.");
    }
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={onAnswerSubmitHandler}>
      <div className="flex justify-between gap-4 max-md:flex-wrap">
        <h2 className="section_title text-white">Answer</h2>
        <div className="flex gap-4 max-md:basis-full">
          <select
            className="select"
            onChange={(e) =>
              inputChangeHandler("language", e.target.value, [
                VALIDATOR_REQUIRE(),
              ])
            }
          >
            {ProgrammingLanguagesData.map((language) => (
              <option key={language.id} value={language.value}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-4">
        <Input
          id="answer"
          label=""
          elementType="textarea"
          isValid={formState?.inputs.description?.isValid}
          errorText="Please enter a valid answer."
          placeholder="Enter Answer Here. For adding code, insert it between (```)."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            inputChangeHandler("description", e.target.value, [
              VALIDATOR_MINLENGTH(40),
            ])
          }
        />
      </div>
      <div className="my-4">
        <Button
          variant={formIsValid ? "Normal" : "Danger"}
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default QuestionAnswerForm;
