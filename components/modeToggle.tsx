"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme: string | undefined) => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      default:
        setTheme("dark");
    }
  };
  return (
    <Button variant="link" size="icon" onClick={() => handleThemeChange(theme)}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
