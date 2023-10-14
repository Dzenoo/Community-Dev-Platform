import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationLayout from "@/components/shared/navigation/NavigationLayout";

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
        <NavigationLayout children={children} />
      </body>
    </html>
  );
}
