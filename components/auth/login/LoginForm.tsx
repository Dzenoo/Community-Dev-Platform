"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";
import { useForm } from "@/library/hooks/use-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "@/library/validators/validators";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const { formState, inputChangeHandler } = useForm(
    {
      email: {
        value: "",
        isValid: true,
      },

      password: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      formState.inputs.email.value === "" ||
      formState.inputs.password.value === ""
    ) {
      return alert("Please fill all fields");
    }

    if (formState.formIsValid) {
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
        console.log(error);
        alert("Invalid email or password. Please try again.");
      }
    }
  }

  return (
    <form className="mt-10 flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8">
        <Input
          type="email"
          label="Email"
          id="email"
          placeholder="Enter Email"
          isValid={formState.inputs.email.isValid}
          errorText="Please enter a valid email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            inputChangeHandler("email", e.target.value, [VALIDATOR_EMAIL()])
          }
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter Password"
          isValid={formState.inputs.password.isValid}
          errorText="Please enter a valid password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            inputChangeHandler("password", e.target.value, [
              VALIDATOR_MINLENGTH(3),
            ])
          }
        />
      </div>
      <Button variant="Normal" type="submit" disabled={!formState.formIsValid}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
