import LogoNavigation from "@/components/shared/navigation/LogoNavigation";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SidebarNavigation from "@/components/shared/navigation/SidebarNavigation";
import InformationNavigation from "@/components/shared/navigation/InformationNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Dev",
  description:
    "This is platform for developers community, to explore, solve and find problems about coding and programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <LogoNavigation />
        <main className="flex">
          <div className="basis-[440px] max-lg:hidden">
            <SidebarNavigation />
          </div>
          <section className="p-4 grow basis-full h-screen overflow-y-scroll md:p-8">
            {children}
          </section>
          <div>
            <InformationNavigation />
          </div>
        </main>
      </body>
    </html>
  );
}
