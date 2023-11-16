// Importing ProfileAnswerItem component and ProfileAnswersDataListPropsTypes type from their respective files
import ProfileAnswerItem from "./ProfileAnswerItem";
import { type ProfileAnswersDataListPropsTypes } from "@/types/profile";

// Defining ProfileAnswersList component as a functional component that takes in profileAnswers as a prop
const ProfileAnswersList: React.FC<ProfileAnswersDataListPropsTypes> = ({
  profileAnswers,
}) => {
  // Returning a div that contains either a message saying "No Answers Yet" or a list of ProfileAnswerItem components
  return (
    <div className="flex flex-col gap-2">
      {profileAnswers.length === 0 ? (
        <p className="section_subtitle text-black dark:text-white text-center">
          No Answers Yet
        </p>
      ) : (
        profileAnswers.map((answers) => (
          <ProfileAnswerItem
            key={answers._id}
            _id={answers._id}
            question={answers.question._id}
            title={answers.question.title}
            description={answers.question.description}
          />
        ))
      )}
    </div>
  );
};

// Exporting ProfileAnswersList component as the default export of this module
export default ProfileAnswersList;
