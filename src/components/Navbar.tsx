"use client";

import Link from "next/link"

import { Logo } from "./Logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { borderColorFromName, bgGradientFromName } from "@/utils/color";
import { signOut } from "next-auth/react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

const exploreLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Roadmap",
    href: "/roadmap",
    description:
      "A detailed roadmap with various career paths and learning resources.",
  },
  {
    title: "Courses",
    href: "/courses",
    description:
      "A collection of courses and tutorials to help you learn new skills.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "A collection of projects to help you build your portfolio and learn new skills.",
  }
]

const blogLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Tech Blogs",
    href: "/blogs/tech",
    description:
      "A collection of blogs related to technology and programming.",
  },
  {
    title: "Career Blogs",
    href: "/blogs/career",
    description:
      "A collection of blogs related to career growth and personal development.",
  },
  {
    title: "Life Blogs",
    href: "/blogs/life",
    description:
      "A collection of blogs related to life and personal experiences.",
  },
  {
    title: "Interview Blogs",
    href: "/blogs/interview",
    description:
      "A collection of blogs related to interviews and placements.",
  },
  {
    title: "Study Blogs",
    href: "/blogs/study",
    description:
      "A collection of blogs related to study tips and learning resources.",
  }
]

export const Navbar = () => {
  const currentUser = useCurrentUser();
  const borderColor = borderColorFromName(currentUser?.name || "Random User");
  const gradientColors = bgGradientFromName(currentUser?.name || "Random User");
  const gradient = `linear-gradient(to top right, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%, ${gradientColors[2]} 100%)`;

  return (
    <>
      <NavigationMenu className="rounded-full max-w-[1120px] h-16 py-2 px-8 justify-between bg-neutral/1 dark:bg-neutral/1 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] shadow-black-950/25 dark:shadow-white-50/25 backdrop-blur-[80px]">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink>
            <Logo size={36} full />
          </NavigationMenuLink>
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Explore
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col md:w-[150px] lg:w-[150px] bg-neutral-50 dark:bg-neutral-50 text-neutral-950 dark:text-neutral-950">
                {exploreLinks.map((element, index) => {
                  return (
                    <ListItem href={element.href} title={element.title} key={index}>
                      {element.description}
                    </ListItem>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Quizzes
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Blogs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {blogLinks.map((element, index) => {
                  return (
                    <ListItem
                      href={element.href}
                      title={element.title}
                      key={index}
                    >
                      {element.description}
                    </ListItem>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        {currentUser ? (
          <>
            <NavigationMenuList>
              <div className="px-4 py-2.5">
                <span>Hi, </span>
                <span className="text-primary-600">{currentUser.name}</span>
              </div>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="p-0 cursor-pointer">
                  <Avatar className='text-white hover:bg-transparent' style={{ borderColor: borderColor, background: gradient }}>
                    <AvatarImage
                      src={currentUser.image || "https://pgvfeftlwazlnxukszss.supabase.co/storage/v1/object/public/avatars/09.png"}
                      alt={currentUser.name || "Unknown User"}
                    />
                    <AvatarFallback>{currentUser.name?.split(" ").map((el) => el.charAt(0)).join("").toUpperCase().substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <li>
                      <Button variant={"secondary"} size={"sm"} asChild>
                        <Link href="/profile">
                          Profile
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"secondary"} size={"sm"}
                        onClick={() => {
                          signOut();
                        }}>
                        Logout
                      </Button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </>
        ) : (
          <>
            <NavigationMenuList>
              <Button variant={"secondary"} size={"sm"} asChild>
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button variant={"primary"} size={"sm"} asChild>
                <Link href="/signup">
                  Signup
                </Link>
              </Button>
            </NavigationMenuList>
          </>
        )}
        {/* <NavigationMenuViewport /> */}
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 active:bg-neutral-200 disabled:bg-transparent dark:hover:bg-neutral-100 dark:active:bg-neutral-200 dark:text-neutral-950",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-950 dark:text-neutral-950">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"