"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { ProgrammingLanguagesData } from "@/constants";
import { postQuestion } from "@/library/actions/questions.actions";
import { useForm } from "@/library/hooks/use-form";
import { checkFormValidity } from "@/library/utility";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/library/validators/validators";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AskQuestionForm = () => {
  const [tags, setTags] = useState<{ title: string }[]>([]);
  const { data: session } = useSession();
  const { formState, inputChangeHandler } = useForm({
    title: {
      value: "",
      isValid: true,
    },
    description: {
      value: "",
      isValid: true,
    },
    tag: {
      value: "",
      isValid: true,
    },
    language: {
      value: "",
      isValid: true,
    },
  });
  const router = useRouter();

  const isFormValid = checkFormValidity(
    formState.inputs.title.value === "" ||
      formState.inputs.description.value === "" ||
      tags.length === 0
  );

  function addTagsHandler() {
    if (formState.inputs.tag.value === "") {
      return alert("Please enter a valid tag");
    } else {
      if (tags.find((t) => t.title === formState.inputs.tag.value)) {
        alert("Tag already exists");
      } else {
        setTags((prevTags) => [
          ...prevTags,
          { title: formState.inputs.tag.value },
        ]);
      }
    }
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await postQuestion(
      formState.inputs.title.value,
      tags,
      // @ts-ignore
      session?.user?.id,
      formState.inputs.description.value,
      formState.inputs.language.value,
      "/"
    );

    router.push("/");
  }

  const disableFormSubmitOnEnter = (
    event: React.KeyboardEvent<HTMLFormElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={submitHandler}
      onKeyDown={disableFormSubmitOnEnter}
    >
      <div className="my-12 flex flex-col gap-12">
        <div>
          <Input
            id="title"
            label="Question Title"
            helperText="Be specific when asking a question"
            isValid={formState.inputs.title.isValid}
            errorText="Please enter a valid title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("title", e.target.value, [
                VALIDATOR_MINLENGTH(20),
              ])
            }
          />
        </div>
        <div>
          <div className="mb-4">
            <select
              className="select"
              onChange={(e: any) =>
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
          <Input
            id="description"
            label="Detailed Explanation"
            helperText="Explore more about problem"
            type="text"
            elementType="textarea"
            isValid={formState.inputs.description.isValid}
            errorText="Please enter a valid description"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("description", e.target.value, [
                VALIDATOR_MINLENGTH(20),
              ])
            }
          />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="grow">
              <Input
                id="tags"
                label="Add Tags"
                helperText="Add tags to question"
                isValid={formState.inputs.tag.isValid}
                errorText="Please enter a valid tags"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler("tag", e.target.value, [
                    VALIDATOR_REQUIRE(),
                  ])
                }
              />
            </div>
            <div>
              <Button type="button" variant="Normal" onClick={addTagsHandler}>
                Add Tag
              </Button>
            </div>
          </div>
          <ul className="mt-4 flex gap-2">
            {tags?.map((tag) => (
              <li key={tag.title} className="tags">
                {tag.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="max-w-2xl">
          <Button
            type="submit"
            variant={isFormValid ? "Normal" : "Danger"}
            disabled={!isFormValid}
          >
            Post Question
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AskQuestionForm;
