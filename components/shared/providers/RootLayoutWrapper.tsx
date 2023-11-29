// Importing necessary components and modules
"use client";
import LogoNavigation from "../navigation/LogoNavigation";
import SidebarNavigation from "../navigation/SidebarNavigation";
import AuthProvider from "@/context/AuthProvider";
import { ThemeProvider } from "next-themes";
import { type ReactNode, useState } from "react";

// Defining a functional component called RootLayoutWrapper
const RootLayoutWrapper = ({
  children,
  informationComponent,
}: {
  children: ReactNode;
  informationComponent: any;
}) => {
  // Defining a state variable called sidebarIsOpen and a function to update it called setSidebarIsOpen
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  // Returning the following JSX
  return (
    <>
      <AuthProvider>
        {" "}
        {/* // Wrapping the following components with AuthProvider context */}
        <ThemeProvider attribute="class">
          {" "}
          {/* // Wrapping the following components with ThemeProvider context */}
          <LogoNavigation setSidebarIsOpen={setSidebarIsOpen} />
          {/* // Rendering LogoNavigation component with setSidebarIsOpen prop */}
          <main className="flex">
            {" "}
            {/* // Defining a main element with a class of flex */}
            <SidebarNavigation // Rendering SidebarNavigation component with sidebarIsOpen and setSidebarIsOpen props
              sidebarIsOpen={sidebarIsOpen}
              setSidebarIsOpen={setSidebarIsOpen}
            />
            <section className="relative p-4 py-16 grow basis-full h-screen overflow-y-scroll md:p-8">
              {" "}
              {/* // Defining a section element with classes and styles */}
              {children}
              {/* // Rendering the children prop */}
            </section>
            <div>{informationComponent}</div>
            {/* // Rendering the informationComponent prop inside a div element */}
          </main>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

// Exporting the RootLayoutWrapper component as the default export
export default RootLayoutWrapper;
