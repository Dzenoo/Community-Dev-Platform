import Card from "@/components/shared/ui/elements/card";
import SignupForm from "./SignupForm";
import Link from "next/link";

const SignupCard = () => {
  return (
    <Card>
      <div>
        <h2 className="section_title text-white">Signup</h2>
        <p className="section_subtitle text-[#ADADAD] mt-2">
          Create new account on CommunityDev platform
        </p>
      </div>
      <SignupForm />
      <div>
        <h2 className="mt-4 section_subtitle text-white text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-bold">
            Login Here
          </Link>
        </h2>
      </div>
    </Card>
  );
};

export default SignupCard;
