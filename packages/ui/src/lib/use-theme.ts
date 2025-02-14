"use client";
import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, ...rest } = useNextTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return {
    toggleTheme,
    setTheme: (theme: "dark" | "light") => setTheme(theme),
    theme,
    ...rest,
  };
};
