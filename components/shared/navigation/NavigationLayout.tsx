"use client";
import { ReactNode, useState } from "react";
import InformationNavigation from "./InformationNavigation";
import LogoNavigation from "./LogoNavigation";
import SidebarNavigation from "./SidebarNavigation";

const NavigationLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <>
      <LogoNavigation setSidebarIsOpen={setSidebarIsOpen} />
      <main className="flex">
        <SidebarNavigation sidebarIsOpen={sidebarIsOpen} />
        <section className="p-4 grow basis-full h-screen overflow-y-scroll md:p-8">
          {children}
        </section>
        <div>
          <InformationNavigation />
        </div>
      </main>
    </>
  );
};

export default NavigationLayout;
