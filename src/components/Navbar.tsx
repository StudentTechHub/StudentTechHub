import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { ArrowDown, OctagonAlert } from "@/icons"

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="flex flex-row max-w-[1120px] w-full h-16 py-2 px-8 items-center justify-between flex-shrink-0 rounded-full bg-neutral/1 dark:bg-neutral/1 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] shadow-gray-950/25 dark:shadow-gray-50/25 backdrop-blur-[80px]">
          <div>
            <Logo height={36} full />
          </div>
          {/* Buttons */}
          <div className="flex flex-row items-center">
            <Button
              variant={"secondary"}
              size={"sm"}
            >
              Home
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              icon={<ArrowDown size={20} />}
              iconPosition={"trailing"}>
              Explore
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              icon={<ArrowDown size={20} />}
              iconPosition={"trailing"}>
              Quizzes
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              icon={<ArrowDown size={20} />}
              iconPosition={"trailing"}>
              Blogs
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
            >
              About Us
            </Button>
          </div>

          {/* Login Buttons */}
          <div className="flex flex-row items-center gap-2">
            <Button
              variant={"outline"}
              size={"sm"}
            >
              Login
            </Button>
            <Button
              variant={"primary"}
              size={"sm"}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}