"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { editProfile } from "@/library/actions/user.actions";
import { useForm } from "@/library/hooks/use-form";
import { VALIDATOR_REQUIRE } from "@/library/validators/validators";
import { useRouter } from "next/navigation";

const EditProfileForm = ({
  userId,
  name,
  username,
  location,
  biography,
}: {
  userId: string;
  name: string;
  username: string;
  location: string;
  biography: string;
}) => {
  const { formState, inputChangeHandler } = useForm({
    name: {
      value: name,
      isValid: true,
    },
    username: {
      value: username,
      isValid: true,
    },
    location: {
      value: location,
      isValid: true,
    },
    biography: {
      value: biography,
      isValid: true,
    },
  });
  const router = useRouter();

  const isDisabled =
    formState.inputs.name.value !== name ||
    formState.inputs.username.value !== username ||
    formState.inputs.location.value !== location ||
    formState.inputs.biography.value !== biography;

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) {
      await editProfile(
        userId,
        formState.inputs.name.value,
        formState.inputs.username.value,
        formState.inputs.biography.value,
        formState.inputs.location.value,
        `/profile/${userId}`
      );

      router.push(`/profile/${userId}`);
    }
  }

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <div className="my-12 flex flex-col gap-4">
        <div>
          <Input
            id="name"
            label="Name"
            defaultValue={name}
            isValid={formState.inputs.name.isValid}
            errorText="Please enter a valid name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("name", e.target.value, [VALIDATOR_REQUIRE()])
            }
          />
        </div>
        <div>
          <Input
            id="username"
            label="Username"
            defaultValue={username}
            isValid={formState.inputs.username.isValid}
            errorText="Please enter a valid username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("username", e.target.value, [
                VALIDATOR_REQUIRE(),
              ])
            }
          />
        </div>
        <div>
          <Input
            id="location"
            label="Location"
            defaultValue={location}
            isValid={formState.inputs.location.isValid}
            errorText="Please enter a valid location"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("location", e.target.value, [
                VALIDATOR_REQUIRE(),
              ])
            }
          />
        </div>
        <div>
          <Input
            id="biography"
            label="Biography"
            elementType="textarea"
            defaultValue={biography}
            isValid={formState.inputs.biography.isValid}
            errorText="Please enter a valid biography"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("biography", e.target.value, [
                VALIDATOR_REQUIRE(),
              ])
            }
          />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="max-w-2xl">
          <Button
            variant={!isDisabled ? "Danger" : "Normal"}
            type="submit"
            disabled={!isDisabled}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
