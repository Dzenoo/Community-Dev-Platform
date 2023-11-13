import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import AuthProvider from "@/context/AuthProvider";
import { type Metadata } from "next";

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
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
