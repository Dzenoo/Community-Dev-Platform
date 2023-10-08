"use client";
import { SidebarNavigationData } from "@/constants";
import { SidebarNavigationDataTypes } from "@/types/sidebar-navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="px-6 py-8 shadow-md sticky left-0 top-0 h-screen bg-[#222222] flex flex-col justify-between max-lg:hidden">
      <ul className="flex flex-col gap-8">
        {SidebarNavigationData.map((link: SidebarNavigationDataTypes) => {
          return link.title === "Profile" ? (
            <Link key={link.id} href={"/id/profile"}>
              <li
                className={`sidebar_link section_subtitle ${
                  link.href === pathname && "bg-[#004ee7]"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={26}
                  height={26}
                />
                {link.title}
              </li>
            </Link>
          ) : (
            <Link key={link.id} href={link.href}>
              <li
                className={`sidebar_link section_subtitle ${
                  link.href === pathname && "bg-[#004ee7]"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={26}
                  height={26}
                />
                {link.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="pb-12">
        <h2>Signup</h2>
        <h2>Login</h2>
      </div>
    </div>
  );
};

export default SidebarNavigation;
