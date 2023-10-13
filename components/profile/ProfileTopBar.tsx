import Link from "next/link";
import LinkButton from "../ui/elements/link";
import Image from "next/image";

const ProfileTopBar = () => {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="flex gap-6 items-center">
        <div className="w-40 h-40 rounded-full bg-blue-600"></div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="section_title text-white font-bold">John Doe</h2>
            <p className="section_subtitle text-gray-400 font-bold">@johndoe</p>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <Link href="/" className="section_subtitle_smaller text-blue-700">
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
              <h2 className="section_subtitle_smaller text-white">Location</h2>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/graphics/date.png"
                alt="date"
                width={20}
                height={20}
              />
              <h2 className="section_subtitle_smaller text-white">
                Joined 20 September 2023
              </h2>
            </div>
          </div>
          <div>
            <p className="section_subtitle_smaller text-white">
              This is biography
            </p>
          </div>
        </div>
      </div>
      <div>
        <LinkButton href={"/profile/u2/edit-profile"}>Edit Profile</LinkButton>
      </div>
    </div>
  );
};

export default ProfileTopBar;
