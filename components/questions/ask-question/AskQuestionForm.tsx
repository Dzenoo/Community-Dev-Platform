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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";

const AskQuestionForm = () => {
  const [tags, setTags] = useState<string[]>([]);
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
  const isCode = formState.inputs.description.value.includes("```");

  const isFormValid = checkFormValidity(
    !formState.inputs.title.isValid ||
      !formState.inputs.description.isValid ||
      !formState.inputs.tag.isValid ||
      tags.length === 0
  );

  function addTagsHandler(tagValue: string) {
    if (tags.find((tag) => tag === tagValue)) {
      toast.warning("Tag already exists");
    } else {
      setTags((prevTags) => [...prevTags, tagValue]);
    }
  }

  function removeTagsHandler(tagValue: string) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagValue));
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill the fields");
      return;
    }

    // @ts-ignore
    if (!session?.user?.id) {
      toast.error("Please login to ask the question");
      return;
    }

    await postQuestion(
      formState.inputs.title.value,
      tags,
      // @ts-ignore
      session?.user?.id,
      formState.inputs.description.value,
      isCode ? formState.inputs.language.value : "",
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
      <ToastContainer />
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
          {isCode && (
            <div className="mb-4">
              <select
                className="select card_animation"
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
          )}
          <Input
            id="description"
            label="Detailed Explanation"
            helperText="Explore more about problem"
            placeholder="Write your question here... To add code, let add it between ```"
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
                isValid={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler("tag", e.target.value, [
                    VALIDATOR_REQUIRE(),
                  ])
                }
              />
              <div
                className={`tags_box ${
                  formState.inputs.tag.value.length > 0 &&
                  "show_tags_box_container"
                }`}
              >
                {ProgrammingLanguagesData.filter((language) =>
                  language.name
                    .toLowerCase()
                    .startsWith(formState.inputs.tag.value)
                ).map((language) => {
                  return (
                    <button
                      key={language.id}
                      className="button_tags"
                      type="button"
                      onClick={() => {
                        formState.inputs.tag.value = "";
                        addTagsHandler(language.name);
                      }}
                    >
                      {language.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <ul className="mt-4 flex gap-2">
            {tags?.map((tag) => (
              <li
                key={tag}
                className="tags"
                onClick={() => removeTagsHandler(tag)}
              >
                {tag}
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
