"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  function lightTheme(): void {
    setTheme("light");
  }

  function darkTheme(): void {
    setTheme("dark");
  }

  return (
    <div className="flex gap-4">
      <button onClick={lightTheme}>Light</button>
      <button onClick={darkTheme}>Dark</button>
    </div>
  );
};

export default ThemeToggle;
