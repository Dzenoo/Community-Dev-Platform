import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationLayout from "@/components/shared/navigation/NavigationLayout";
import AuthProvider from "@/context/AuthProvider";

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
          <NavigationLayout children={children} />
        </body>
      </AuthProvider>
    </html>
  );
}
