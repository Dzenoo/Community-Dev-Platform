"use client";
import LogoNavigation from "../navigation/LogoNavigation";
import SidebarNavigation from "../navigation/SidebarNavigation";
import AuthProvider from "@/context/AuthProvider";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";

const RootLayoutWrapper = ({
  children,
  informationComponent,
}: {
  children: ReactNode;
  informationComponent: any;
}) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <>
      <AuthProvider>
        <ThemeProvider attribute="class">
          <LogoNavigation setSidebarIsOpen={setSidebarIsOpen} />
          <main className="flex">
            <SidebarNavigation
              sidebarIsOpen={sidebarIsOpen}
              setSidebarIsOpen={setSidebarIsOpen}
            />
            <section className="relative p-4 grow basis-full h-screen overflow-y-scroll md:p-8">
              {children}
            </section>
            <div>{informationComponent}</div>
          </main>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default RootLayoutWrapper;
