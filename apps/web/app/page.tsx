"use client";
import { Button } from "@repo/ui";
import { useThemes } from "@repo/ui/lib";

export default function Page() {
  const { toggleTheme, theme } = useThemes();
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Button variant="destructive">Hello World</Button>
      <Button>Hello World</Button>
      <Button variant="ghost">Hello World</Button>
      <Button variant="secondary">Hello World</Button>
      <Button variant="outline" onClick={toggleTheme}>
        {theme}
      </Button>
    </main>
  );
}
