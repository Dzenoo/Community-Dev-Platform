"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { useForm } from "@/library/hooks/use-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "@/library/validators/validators";
import { useRouter } from "next/navigation";
import { type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { checkFormValidity } from "@/library/utility";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const { formState, inputChangeHandler } = useForm({
    email: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  });

  // Check if the form is valid
  const isFormValid = checkFormValidity(
    formState.inputs.email.value === "" ||
      formState.inputs.password.value === ""
  );

  // Handle form submission
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Check if all fields are filled
    if (
      formState.inputs.email.value === "" ||
      formState.inputs.password.value === ""
    ) {
      toast.error("Please fill all the fields.");
    }

    // If the form is valid, try to sign in
    if (isFormValid) {
      try {
        const result = await signIn("credentials", {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          redirect: false,
        });

        if (result?.error) {
          throw new Error(result.error);
        }

        if (result?.ok) {
          router.push("/");
        }
      } catch (error) {
        toast.error("Invalid email or password. Please try again.");
      }
    }
  }

  // Render the login form
  return (
    <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="flex flex-col gap-8">
        <Input
          type="email"
          label="Email"
          id="email"
          placeholder="Enter Email"
          isValid={formState.inputs.email.isValid}
          errorText="Please enter a valid email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChangeHandler("email", e.target.value, [VALIDATOR_EMAIL()]);
          }}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter Password"
          isValid={formState.inputs.password.isValid}
          errorText="Please enter a valid password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChangeHandler("password", e.target.value, [
              VALIDATOR_MINLENGTH(3),
            ]);
          }}
        />
      </div>
      <Button
        variant={isFormValid ? "Normal" : "Danger"}
        type="submit"
        disabled={!isFormValid}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
