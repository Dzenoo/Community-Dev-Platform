import Card from "@/components/ui/elements/card";
import SignupForm from "./SignupForm";

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
    </Card>
  );
};

export default SignupCard;
