// Importing the necessary components and modules
import Card from "@/components/shared/ui/elements/card";
import SignupForm from "./SignupForm";
import Link from "next/link";

// Defining the SignupCard component
const SignupCard = () => {
  return (
    // Rendering the Card component
    <Card>
      <div>
        {/* Title and subtitle */}
        <h2 className="section_title text-black dark:text-white">Signup</h2>
        <p className="section_subtitle text-[#ADADAD] mt-2">
          Create new account on CommunityDev platform
        </p>
      </div>
      {/* Rendering the SignupForm component */}
      <SignupForm />
      <div>
        {/* Login link */}
        <h2 className="mt-4 section_subtitle text-black dark:text-white text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-bold">
            Login Here
          </Link>
        </h2>
      </div>
    </Card>
  );
};

// Exporting the SignupCard component
export default SignupCard;
