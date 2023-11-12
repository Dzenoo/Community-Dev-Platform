import Link from "next/link";
import LinkButton from "@/components/shared/ui/elements/link";
import { type ProfilePropsTypes } from "@/types/profile";
import { calculateDate } from "@/library/utility";
import { ImageDate, ImageLocation } from "./ProfileImages";

const ProfileTopBar: React.FC<ProfilePropsTypes> = ({
  name,
  username,
  location,
  biography,
  createdAt,
  id,
}) => {
  const joinedDate: string = calculateDate(createdAt);

  return (
    <div className="flex justify-between items-start card_animation gap-12 max-md:flex-wrap">
      <div className="flex gap-6 items-center max-md:flex-wrap">
        <div>
          <img src="/assets/images/profile.png" alt="user" />
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="section_title text-black dark:text-white font-bold">
              {name}
            </h2>
            <p className="section_subtitle text-gray-400 font-bold">
              @{username}
            </p>
          </div>
          <div className="my-6 flex gap-8 items-center max-md:flex-wrap">
            <div>
              <Link
                href={"/profile/portfolio"}
                className="section_subtitle_smaller text-blue-700"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ImageLocation />
              <h2 className="section_subtitle_smaller text-black dark:text-white">
                {location}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ImageDate />
              <h2 className="section_subtitle_smaller text-black dark:text-white">
                {joinedDate}
              </h2>
            </div>
          </div>
          <div>
            <p className="section_subtitle_smaller text-black dark:text-white">
              {biography}
            </p>
          </div>
        </div>
      </div>
      <div>
        <LinkButton href={`/profile/${id}/edit-profile`}>
          Edit Profile
        </LinkButton>
      </div>
    </div>
  );
};

export default ProfileTopBar;
