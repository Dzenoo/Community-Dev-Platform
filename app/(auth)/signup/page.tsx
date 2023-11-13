"use client";
import SignupCard from "@/components/auth/signup/SignupCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const { data: session } = useSession(); // Get the user's session data using the useSession hook
  const router = useRouter(); // Get the router object using the useRouter hook

  if (session?.user) {
    // If the user is logged in, redirect to the home page
    router.push("/");
  }

  // If the user is not logged in, render the SignupCard component
  return (
    <section className="py-12 flex justify-center items-center max-md:px-4">
      <SignupCard />
    </section>
  );
};

export default SignupPage; // Export the SignupPage component as the default export of this module
