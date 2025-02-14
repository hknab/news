"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";

// import { useAutoSave } from "@/lib/useAutoSave";
import { Button, Switch } from "@repo/ui";
import { useTheme } from "@repo/ui/lib";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center">
        <nav className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            />
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </div>
          <Button>
            <Link href="/saved">SAVED NEWS</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
