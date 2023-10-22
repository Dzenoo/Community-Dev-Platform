import Image from "next/image";

const ProfileNavigation = ({ name }: { name: string | undefined }) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="section_subtitle text-white">{name}</h2>
      <Image
        src="/assets/images/profile.png"
        alt="user"
        width={40}
        height={40}
      />
    </div>
  );
};

export default ProfileNavigation;
