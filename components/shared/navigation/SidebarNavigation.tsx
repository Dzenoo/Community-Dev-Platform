// Import necessary modules and components
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/shared/ui/elements/link";
import Button from "../ui/elements/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";

// Define SidebarNavigation component
const SidebarNavigation = ({
  sidebarIsOpen,
  setSidebarIsOpen,
}: {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // Get user session data and current pathname
  const { data: session } = useSession();
  const pathname = usePathname();
  // Get current theme
  const { theme } = useTheme();
  // Set initial sidebar class name
  const [sidebarClassName, setSidebarClassName] = useState<string>("sidebar");

  // Function to close sidebar
  function exitSidebar(): void {
    setSidebarIsOpen(false);
  }

  // Function to handle sidebar resizing
  function handleResize(): void {
    if (window.innerWidth > 1024) {
      setSidebarClassName("sidebar");
    } else {
      sidebarIsOpen
        ? setSidebarClassName("sidebar_mobile_open")
        : setSidebarClassName("sidebar_mobile_closed");
    }
  }

  // Add event listener for window resizing and remove it on component unmount
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarIsOpen]);

  // Render sidebar navigation links and buttons
  return (
    <div className={sidebarClassName}>
      <ul className="flex flex-col gap-2">
        {session?.user && (
          <Link href={"/"} className="card_animation">
            <li
              className={`sidebar_link section_subtitle_smaller ${
                pathname === "/" &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/dashboard.png"
                    : "/assets/graphics/dark/dashboard.png"
                }
                alt="home"
                width={20}
                height={20}
              />
              Home
            </li>
          </Link>
        )}
        {session?.user && (
          <Link href={"/community"} className="card_animation">
            <li
              className={`sidebar_link section_subtitle_smaller ${
                pathname === "/community" &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/community.png"
                    : "/assets/graphics/dark/community.png"
                }
                alt="community"
                width={20}
                height={20}
              />
              Community
            </li>
          </Link>
        )}
        {session?.user && (
          <Link href={"/tags"} className="card_animation">
            <li
              className={`sidebar_link section_subtitle_smaller ${
                pathname === "/tags" &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/price-tag.png"
                    : "/assets/graphics/dark/price-tag.png"
                }
                alt="tag"
                width={20}
                height={20}
              />
              Tags
            </li>
          </Link>
        )}
        {session?.user && (
          <Link
            // @ts-ignore
            href={`/profile/${session.user.id}`}
            className="card_animation"
          >
            <li
              className={`sidebar_link section_subtitle_smaller ${
                // @ts-ignore
                pathname === `/profile/${session.user.id}` &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/setting.png"
                    : "/assets/graphics/dark/setting.png"
                }
                alt="setting"
                width={20}
                height={20}
              />
              Profile
            </li>
          </Link>
        )}
        {session?.user && (
          <Link
            // @ts-ignore
            href={`/profile/${session.user.id}/collections`}
            className="card_animation"
          >
            <li
              className={`sidebar_link section_subtitle_smaller ${
                // @ts-ignore
                pathname === `/profile/${session.user.id}/collections` &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/layers.png"
                    : "/assets/graphics/dark/layers.png"
                }
                alt="setting"
                width={20}
                height={20}
              />
              Collections
            </li>
          </Link>
        )}
        {session?.user && (
          <Link href={"/ask-question"} className="card_animation">
            <li
              className={`sidebar_link section_subtitle_smaller ${
                pathname === "/ask-question" &&
                "border border-[#004ee7] text-black dark:text-white"
              }`}
              onClick={exitSidebar}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/graphics/conversation.png"
                    : "/assets/graphics/dark/conversation.png"
                }
                alt="setting"
                width={20}
                height={20}
              />
              Ask Question
            </li>
          </Link>
        )}
      </ul>
      <div className="pb-12 flex flex-col gap-2 card_animation">
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

// Export SidebarNavigation component
export default SidebarNavigation;
