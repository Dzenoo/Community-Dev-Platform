"use client";
import Link from "next/link";
import InputNavigation from "@/components/shared/ui/navigation/input-navigation";
import ProfileNavigation from "@/components/shared/ui/navigation/profile-navigation";
import { useSession } from "next-auth/react";

const LogoNavigation = () => {
  const { data: session } = useSession();

  return (
    <header className="z-40 py-2 px-6 shadow-md flex justify-between items-center bg-[#222222]">
      <div>
        <Link href="/">
          <h2 className="text-2xl font-bold text-white">
            Community<span className="text-[#004ee7]">Dev</span>
          </h2>
        </Link>
      </div>
      {session?.user && (
        <div className="basis-36 hidden lg:block">
          <InputNavigation />
        </div>
      )}
      {session?.user && (
        <div className="hidden lg:block">
          <ProfileNavigation name={session?.user?.name?.toString()} />
        </div>
      )}
    </header>
  );
};

export default LogoNavigation;
