import Link from "next/link";
import Card from "../ui/elements/card";
import { ProfileAsnwersDataItemPropsTypes } from "@/types/profile";

const ProfileAnswerItem: React.FC<ProfileAsnwersDataItemPropsTypes> = ({
  title,
  id,
  questionId,
}) => {
  console.log(id);

  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 w-full">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <Link
                href={`/${questionId}`}
                className="section_title_smaller text-white"
              >
                {title}
              </Link>
            </div>
          </div>
          <div>
            <button className="text-red-400 text-xl">X</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileAnswerItem;
