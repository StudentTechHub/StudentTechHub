"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-row gap-2">
        <Button icon={<FaGoogle />} iconPosition="trailing" variant={"primary"} size={"lg"}>Primary</Button>
        <Button icon={<FaGoogle />} iconPosition="trailing" variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"danger"}>Danger</Button>
        <Button variant={"success"}>Success</Button>
        <Button variant={"link"}>Link</Button>
      </div>

      <div>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme(!theme || theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  );
}

