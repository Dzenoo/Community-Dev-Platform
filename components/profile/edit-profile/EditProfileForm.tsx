"use client";
// Importing necessary components and functions
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { editProfile } from "@/library/actions/user.actions";
import { useForm } from "@/library/hooks/use-form";
import { checkFormValidity } from "@/library/utility";
import { VALIDATOR_REQUIRE } from "@/library/validators/validators";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

// Defining the EditProfileForm component
const EditProfileForm = ({
  userId,
  name,
  username,
  location,
  biography,
}: {
  userId: string | number;
  name: string;
  username: string;
  location: string;
  biography: string;
}) => {
  // Using the useForm hook to manage the form state and input change handler
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

  // Getting the router instance
  const router: AppRouterInstance = useRouter();

  // Checking if any input has been changed
  const changedInputs: boolean =
    formState.inputs.name.value === name &&
    formState.inputs.username.value === username &&
    formState.inputs.location.value === location &&
    formState.inputs.biography.value === biography;

  // Checking if all form inputs are valid
  const formInputs: boolean =
    formState.inputs.name.isValid &&
    formState.inputs.username.isValid &&
    formState.inputs.location.isValid &&
    formState.inputs.biography.isValid;

  // Disabling the submit button if no input has been changed or any input is invalid
  const isDisabled: boolean = checkFormValidity(!changedInputs && formInputs);

  // Handling the form submission
  async function submitHandler(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    // Displaying an error message if any input is invalid
    if (isDisabled) {
      toast.error("Please fill the fields");
      return;
    }

    // Displaying an error message if the user is not logged in
    if (!userId) {
      toast.error("Please login to edit the profile");
      return;
    }

    try {
      // Calling the editProfile function to update the user profile
      const response = await editProfile(
        userId,
        formState.inputs.name.value,
        formState.inputs.username.value,
        formState.inputs.biography.value,
        formState.inputs.location.value,
        `/profile/${userId}`
      );

      // Redirecting to the updated profile page if the update is successful
      if (!response) {
        throw new Error();
      } else {
        router.push(`/profile/${userId}`);
      }
    } catch (error) {
      // Displaying an error message if the update fails
      toast.error("Internal Server Error");
    }
  }

  // Rendering the form
  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <ToastContainer />
      <div className="my-12 flex flex-col gap-4">
        <div>
          <Input
            id="name"
            label="Name"
            defaultValue={name}
            isValid={formState.inputs.name.isValid}
            errorText="Please enter a valid name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChangeHandler("name", e.target.value, [VALIDATOR_REQUIRE()]);
            }}
          />
        </div>
        <div>
          <Input
            id="username"
            label="Username"
            defaultValue={username}
            isValid={formState.inputs.username.isValid}
            errorText="Please enter a valid username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChangeHandler("username", e.target.value, [
                VALIDATOR_REQUIRE(),
              ]);
            }}
          />
        </div>
        <div>
          <Input
            id="location"
            label="Location"
            defaultValue={location}
            isValid={formState.inputs.location.isValid}
            errorText="Please enter a valid location"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChangeHandler("location", e.target.value, [
                VALIDATOR_REQUIRE(),
              ]);
            }}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChangeHandler("biography", e.target.value, [
                VALIDATOR_REQUIRE(),
              ]);
            }}
          />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="max-w-2xl">
          <Button
            variant={isDisabled ? "Danger" : "Normal"}
            type="submit"
            disabled={isDisabled}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

// Exporting the EditProfileForm component
export default EditProfileForm;
