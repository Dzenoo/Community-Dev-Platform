"use client";
import { SidebarNavigationData } from "@/constants";
import { SidebarNavigationDataTypes } from "@/types/sidebar-navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/ui/elements/link";

const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="px-4 py-8 shadow-md sticky left-0 top-0 h-screen bg-[#222222] flex flex-col justify-between">
      <ul className="flex flex-col gap-2">
        {SidebarNavigationData.map((link: SidebarNavigationDataTypes) => {
          return (
            <Link key={link.id} href={link.href}>
              <li
                className={`sidebar_link section_subtitle_smaller ${
                  link.href === pathname && "bg-[#004ee7]"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={20}
                  height={20}
                />
                {link.title}
              </li>
            </Link>
          );
        })}
        <Link href={`/profile/u2`}>
          <li
            className={`sidebar_link section_subtitle_smaller ${
              pathname === "/profile/u2" && "bg-[#004ee7]"
            }`}
          >
            <Image
              src="/assets/graphics/setting.png"
              alt="setting"
              width={20}
              height={20}
            />
            Profile
          </li>
        </Link>
        <Link href={`/profile/u2/collections`}>
          <li
            className={`sidebar_link section_subtitle_smaller ${
              pathname === `/profile/u2/collections` && "bg-[#004ee7]"
            }`}
          >
            <Image
              src="/assets/graphics/layers.png"
              alt="setting"
              width={20}
              height={20}
            />
            Collections
          </li>
        </Link>
        <Link href={`/ask-question`}>
          <li
            className={`sidebar_link section_subtitle_smaller ${
              pathname === "/ask-question" && "bg-[#004ee7]"
            }`}
          >
            <Image
              src="/assets/graphics/conversation.png"
              alt="setting"
              width={20}
              height={20}
            />
            Ask Question
          </li>
        </Link>
      </ul>
      <div className="pb-12 flex flex-col gap-2">
        <LinkButton href="/signup">Signup</LinkButton>
        <LinkButton href="/login">Login</LinkButton>
      </div>
    </div>
  );
};

export default SidebarNavigation;
