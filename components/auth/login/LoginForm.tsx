"use client";
import Button from "@/components/shared/ui/elements/button";
import Input from "@/components/shared/ui/elements/input";

const LoginForm = () => {
  return (
    <form className="mt-10 flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <Input label="Email" id="email" placeholder="Enter Email" />
        <Input label="Password" id="password" placeholder="Enter Password" />
      </div>
      <Button variant="Normal" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
