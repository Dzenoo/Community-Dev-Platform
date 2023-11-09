"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export const ImageDate = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark"
          ? "/assets/graphics/date.png"
          : "/assets/graphics/dark/date.png"
      }
      alt="date"
      width={20}
      height={20}
    />
  );
};

export const ImageLocation = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark"
          ? "/assets/graphics/location.png"
          : "/assets/graphics/dark/location.png"
      }
      alt="location"
      width={20}
      height={20}
    />
  );
};
