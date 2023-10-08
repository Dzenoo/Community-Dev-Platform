"use client";
import Button from "@/components/ui/elements/button";
import Input from "@/components/ui/elements/input";
import Link from "next/link";

const SignupForm = () => {
  return (
    <form className="mt-10 flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <Input label="Name" id="name" placeholder="Enter Name" />
        <div className="form_flex">
          <Input label="Email" id="email" placeholder="Enter Email" />
          <Input label="Username" id="username" placeholder="Enter Username" />
        </div>
        <Input label="Password" id="password" placeholder="Enter Password" />
      </div>
      <Button variant="Normal" type="submit">
        Signup
      </Button>
      <div>
        <h2 className="section_subtitle text-white text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-bold">
            Login Here
          </Link>
        </h2>
      </div>
    </form>
  );
};

export default SignupForm;
