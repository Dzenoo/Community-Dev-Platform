import Card from "@/components/shared/ui/elements/card";
import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginCard = () => {
  return (
    <Card>
      <div>
        <h2 className="section_title text-white">Login</h2>
        <p className="section_subtitle text-[#ADADAD] mt-2">
          Login in existing account on CommunityDev platform
        </p>
      </div>
      <LoginForm />
      <div>
        <h2 className="section_subtitle text-white text-center">
          Dont have an account?{" "}
          <Link href="/signup" className="font-bold">
            Signup Here
          </Link>
        </h2>
      </div>
    </Card>
  );
};

export default LoginCard;
