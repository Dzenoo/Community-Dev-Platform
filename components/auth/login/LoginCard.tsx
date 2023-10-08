import Card from "@/components/ui/elements/card";
import LoginForm from "./LoginForm";

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
    </Card>
  );
};

export default LoginCard;
