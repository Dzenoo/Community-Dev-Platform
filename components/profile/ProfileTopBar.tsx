import Link from "next/link";
import LinkButton from "@/components/shared/ui/elements/link";
import Image from "next/image";
import { ProfilePropsTypes } from "@/types/profile";
import { calculateDate } from "@/library/utility";

const ProfileTopBar: React.FC<ProfilePropsTypes> = ({ user }) => {
  const joinedDate = calculateDate(user?.createdAt);

  return (
    <div className="flex justify-between items-start gap-12 max-md:flex-wrap">
      <div className="flex gap-6 items-center max-md:flex-wrap">
        <div>
          <img src="/assets/images/profile.png" alt="user" />
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="section_title text-white font-bold">{user?.name}</h2>
            <p className="section_subtitle text-gray-400 font-bold">
              @{user?.username}
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
              <Image
                src="/assets/graphics/location.png"
                alt="location"
                width={20}
                height={20}
              />
              <h2 className="section_subtitle_smaller text-white">
                {user?.location}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/graphics/date.png"
                alt="date"
                width={20}
                height={20}
              />
              <h2 className="section_subtitle_smaller text-white">
                {joinedDate}
              </h2>
            </div>
          </div>
          <div>
            <p className="section_subtitle_smaller text-white">
              {user?.biography}
            </p>
          </div>
        </div>
      </div>
      <div>
        <LinkButton href={`/profile/${user?.id}/edit-profile`}>
          Edit Profile
        </LinkButton>
      </div>
    </div>
  );
};

export default ProfileTopBar;
