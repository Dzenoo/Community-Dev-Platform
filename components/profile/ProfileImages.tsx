"use client";
// Importing the useTheme hook from the next-themes package and the Image component from the next/image package
import { useTheme } from "next-themes";
import Image from "next/image";

// A component that returns an Image component with a date icon
export const ImageDate = () => {
  const { theme } = useTheme(); // Getting the current theme using the useTheme hook

  return (
    <Image
      src={
        theme === "dark" // If the theme is dark, use the dark date icon, otherwise use the light one
          ? "/assets/graphics/date.png"
          : "/assets/graphics/dark/date.png"
      }
      alt="date"
      width={20}
      height={20}
    />
  );
};

// A component that returns an Image component with a location icon
export const ImageLocation = () => {
  const { theme } = useTheme(); // Getting the current theme using the useTheme hook

  return (
    <Image
      src={
        theme === "dark" // If the theme is dark, use the dark location icon, otherwise use the light one
          ? "/assets/graphics/location.png"
          : "/assets/graphics/dark/location.png"
      }
      alt="location"
      width={20}
      height={20}
    />
  );
};
