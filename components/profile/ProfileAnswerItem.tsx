"use client";
import Link from "next/link";
import Card from "@/components/shared/ui/elements/card";
import { type ProfileAsnwersDataItemPropsTypes } from "@/types/profile";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { deleteAnswer } from "@/library/actions/answers.actions";

const ProfileAnswerItem: React.FC<ProfileAsnwersDataItemPropsTypes> = ({
  _id,
  title,
  question,
  description,
}) => {
  const pathname: string = usePathname();

  async function deleteAnserConfirm(): Promise<void> {
    const confirm = window.confirm(
      "Are you sure you want to delete this answer?"
    );

    if (!_id) {
      toast.error("You must be logged in to delete an answer.");
      return;
    }

    if (confirm) {
      await deleteAnswer(_id, pathname);
    }
  }

  return (
    <Card>
      <ToastContainer />
      <div className="flex flex-col justify-between gap-8 w-full overflow-hidden">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <Link
                href={`/${question}`}
                className="section_title_smaller text-black dark:text-white"
              >
                {title}
              </Link>
            </div>
            <div>
              <p className="section_subtitle_smaller text-black dark:text-white truncate">
                {description}
              </p>
            </div>
          </div>
          <div>
            <button
              className="text-red-400 text-xl"
              onClick={deleteAnserConfirm}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileAnswerItem;
