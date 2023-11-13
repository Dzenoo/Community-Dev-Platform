"use client";
import LoginCard from "@/components/auth/login/LoginCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession(); // Call the useSession hook to get the current session
  const router = useRouter(); // Call the useRouter hook to get the router object

  // If the user is already logged in, redirect them to the home page
  if (session?.user) {
    router.push("/");
  }

  // Render the LoginCard component inside a section element
  return (
    <section className="flex justify-center items-center p-3 h-screen">
      <LoginCard />
    </section>
  );
};

export default LoginPage; // Export the LoginPage component as the default export of this module
