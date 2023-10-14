import Link from "next/link";
import InputNavigation from "@/components/shared/ui/navigation/input-navigation";
import ProfileNavigation from "@/components/shared/ui/navigation/profile-navigation";
import Image from "next/image";
import { SetStateAction } from "react";

const LogoNavigation = ({
  setSidebarIsOpen,
}: {
  setSidebarIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className="z-40 py-2 px-6 shadow-md flex justify-between items-center bg-[#222222]">
      <div>
        <Link href="/">
          <h2 className="text-2xl font-bold text-white">
            Community<span className="text-[#004ee7]">Dev</span>
          </h2>
        </Link>
      </div>
      <div className="basis-36 hidden lg:block">
        <InputNavigation />
      </div>
      <div className="hidden lg:block">
        <ProfileNavigation />
      </div>
      <button
        type="button"
        className="block lg:hidden"
        onClick={() => setSidebarIsOpen((prevSidebar) => !prevSidebar)}
      >
        <Image
          src="/assets/graphics/btn.png"
          alt="menu"
          width={20}
          height={20}
        />
      </button>
    </header>
  );
};

export default LogoNavigation;
