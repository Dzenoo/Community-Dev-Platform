"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarNavigationData } from "@/constants";
import { SidebarNavigationDataTypes } from "@/types/sidebar-navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/shared/ui/elements/link";
import Button from "../ui/elements/button";

const SidebarNavigation = ({ sidebarIsOpen }: { sidebarIsOpen: boolean }) => {
  const { data: session } = useSession();
  const [sidebarClassName, setSidebarClassName] = useState<string>("sidebar");
  const pathname = usePathname();

  function handleResize() {
    if (window.innerWidth > 1024) {
      setSidebarClassName("sidebar");
    } else {
      sidebarIsOpen
        ? setSidebarClassName("sidebar_mobile_open")
        : setSidebarClassName("sidebar_mobile_closed");
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarIsOpen]);

  return (
    <div className={sidebarClassName}>
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
        {session?.user && (
          // @ts-ignore
          <Link href={`/profile/${session.user.id}`}>
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
        )}
        {session?.user && (
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
        )}
        {session?.user && (
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
        )}
      </ul>
      <div className="pb-12 flex flex-col gap-2">
        {!session?.user && <LinkButton href="/signup">Signup</LinkButton>}
        {!session?.user && <LinkButton href="/login">Login</LinkButton>}
        {session?.user && (
          <Button variant="Normal" onClick={signOut}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default SidebarNavigation;
