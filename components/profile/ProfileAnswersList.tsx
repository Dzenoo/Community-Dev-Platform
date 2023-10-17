import { ProfileAnswersDataListPropsTypes } from "@/types/profile";
import ProfileAnswerItem from "./ProfileAnswerItem";

const ProfileAnswersList: React.FC<ProfileAnswersDataListPropsTypes> = ({
  profileAnswers,
}) => {
  console.log(profileAnswers);

  return (
    <div className="flex flex-col gap-2">
      {profileAnswers.length === 0 ? (
        <p className="section_subtitle text-white text-center">
          No Answers Yet
        </p>
      ) : (
        profileAnswers.map((answers) => (
          <ProfileAnswerItem
            key={answers._id}
            question={answers.question._id}
            title={answers.question.title}
            description={answers.question.description}
          />
        ))
      )}
    </div>
  );
};

export default ProfileAnswersList;
