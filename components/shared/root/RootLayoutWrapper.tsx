"use client";
import { ReactNode, useState } from "react";
import LogoNavigation from "../navigation/LogoNavigation";
import SidebarNavigation from "../navigation/SidebarNavigation";

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
      <LogoNavigation setSidebarIsOpen={setSidebarIsOpen} />
      <main className="flex">
        <SidebarNavigation sidebarIsOpen={sidebarIsOpen} />
        <section className="relative p-4 grow basis-full h-screen overflow-y-scroll md:p-8">
          {children}
        </section>
        <div>{informationComponent}</div>
      </main>
    </>
  );
};

export default RootLayoutWrapper;
