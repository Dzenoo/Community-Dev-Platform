import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import RootLayoutWrapper from "@/components/shared/root/RootLayoutWrapper";
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
      <AuthProvider>
        <body className={inter.className}>
          <RootLayoutWrapper informationComponent={<InformationNavigation />}>
            {children}
          </RootLayoutWrapper>
        </body>
      </AuthProvider>
    </html>
  );
}
