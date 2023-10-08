"use client";
import Button from "@/components/ui/elements/button";
import Input from "@/components/ui/elements/input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="mt-10 flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <Input label="Email" id="email" placeholder="Enter Email" />
        <Input label="Email" id="email" placeholder="Enter Email" />
      </div>
      <Button variant="Normal" type="submit">
        Login
      </Button>
      <div>
        <h2 className="section_subtitle text-white text-center">
          Dont have an account?{" "}
          <Link href="/signup" className="font-bold">
            Signup Here
          </Link>
        </h2>
      </div>
    </form>
  );
};

export default LoginForm;
