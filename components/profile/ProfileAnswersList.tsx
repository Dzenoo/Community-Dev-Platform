import { ProfileAnswersDataListPropsTypes } from "@/types/profile";
import ProfileAnswerItem from "./ProfileAnswerItem";

const ProfileAnswersList: React.FC<ProfileAnswersDataListPropsTypes> = ({
  profileAnswers,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {profileAnswers.map((answers) => (
        <ProfileAnswerItem key={answers.id} {...answers} />
      ))}
    </div>
  );
};

export default ProfileAnswersList;
