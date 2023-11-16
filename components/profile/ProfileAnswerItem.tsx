// Importing necessary modules
"use client";
import Link from "next/link";
import Card from "@/components/shared/ui/elements/card";
import { type ProfileAsnwersDataItemPropsTypes } from "@/types/profile";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { deleteAnswer } from "@/library/actions/answers.actions";

// Defining the component
const ProfileAnswerItem: React.FC<ProfileAsnwersDataItemPropsTypes> = ({
  _id,
  title,
  question,
  description,
}) => {
  // Getting the current pathname
  const pathname: string = usePathname();

  // Function to confirm answer deletion
  async function deleteAnserConfirm(): Promise<void> {
    // Confirming the deletion
    const confirm = window.confirm(
      "Are you sure you want to delete this answer?"
    );

    // Checking if the user is logged in
    if (!_id) {
      toast.error("You must be logged in to delete an answer.");
      return;
    }

    // Deleting the answer if confirmed
    if (confirm) {
      await deleteAnswer(_id, pathname);
    }
  }

  // Rendering the component
  return (
    <Card>
      <ToastContainer />
      <div className="flex flex-col justify-between gap-8 w-full overflow-hidden">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex flex-col justify-between gap-12">
            <div>
              {/* Link to the question */}
              <Link
                href={`/${question}`}
                className="section_title_smaller text-black dark:text-white"
              >
                {title}
              </Link>
            </div>
            <div>
              {/* Answer description */}
              <p className="section_subtitle_smaller text-black dark:text-white truncate">
                {description}
              </p>
            </div>
          </div>
          <div>
            {/* Button to delete the answer */}
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

// Exporting the component
export default ProfileAnswerItem;
