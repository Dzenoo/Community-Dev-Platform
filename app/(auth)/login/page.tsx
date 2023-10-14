"use client";
import LoginCard from "@/components/auth/login/LoginCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push("/");
  }

  return (
    <section className="flex justify-center items-center h-screen overflow-hidden">
      <LoginCard />
    </section>
  );
};

export default LoginPage;
