import { ProfileAnswersDataListPropsTypes } from "@/types/profile";
import ProfileAnswerItem from "./ProfileAnswerItem";

const ProfileAnswersList: React.FC<ProfileAnswersDataListPropsTypes> = ({
  profileAnswers,
}) => {
  console.log(profileAnswers);

  return (
    <div className="flex flex-col gap-2">
      {profileAnswers.map((answers) => (
        <ProfileAnswerItem
          key={answers._id}
          question={answers.question._id}
          title={answers.question.title}
        />
      ))}
    </div>
  );
};

export default ProfileAnswersList;
