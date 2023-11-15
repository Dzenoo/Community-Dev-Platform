// Importing the Card component from the shared/ui/elements/card file
import Card from "@/components/shared/ui/elements/card";

// Importing the LoginForm component from the current file
import LoginForm from "./LoginForm";

// Importing the Link component from the next/link module
import Link from "next/link";

// Defining the LoginCard component
const LoginCard = () => {
  return (
    // Rendering the Card component
    <Card>
      <div>
        {/* Rendering the Login title */}
        <h2 className="section_title text-black dark:text-white">Login</h2>
        {/* Rendering the Login subtitle */}
        <p className="section_subtitle text-[#ADADAD] mt-2">
          Login in existing account on CommunityDev platform
        </p>
      </div>
      {/* Rendering the LoginForm component */}
      <LoginForm />
      <div>
        {/* Rendering the Signup title */}
        <h2 className="mt-4 section_subtitle text-black dark:text-white text-center">
          Dont have an account? {/* Rendering the Signup link */}
          <Link href="/signup" className="font-bold">
            Signup Here
          </Link>
        </h2>
      </div>
    </Card>
  );
};

// Exporting the LoginCard component as the default export of the file
export default LoginCard;
