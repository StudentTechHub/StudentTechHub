import { FaGoogle, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa"
import { Logo } from "./Logo"
import { Seperator } from "./Seperator"
import { Button } from "./ui/button"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <div className="fixed  z-10 flex flex-col items-start gap-2.5 m-1 px-[152px] py-4 bottom-0 w-full max-w-[1424px] max-h-80 rounded-[24px] bg-neutral-100 dark:bg-neutral-100">
                <div key={"main"} className="flex flex-col items-start justify-between w-full h-full max-w-[1120px] gap-10">
                    <div key={"logo-and-links"} className="flex w-full items-start justify-between">
                        <Logo size={44} full />
                        <div className="flex flex-row gap-12">
                            <div key={"explore"} className="flex flex-col items-start gap-1">
                                <div className="inline-flex pl-4 items-center font-medium text-sm">
                                    Explore
                                </div>
                                <div className="flex flex-col items-start">
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Resources
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Leaderboard
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Quizzes
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Blogs
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div key={"important-links"} className="flex flex-col items-start gap-1">
                                <div className="inline-flex pl-4 items-center font-medium text-sm">
                                    Important Links
                                </div>
                                <div className="flex flex-col items-start">
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Privacy Policy
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Terms of Service
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Cookie Policy
                                        </Link>
                                    </Button>
                                    <Button variant={"link"} size={"sm"} className="h-8" asChild>
                                        <Link href={`/`}>
                                            Contact Us
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={"copyright-and-socials"} className="flex flex-col w-full items-center gap-2.5">
                        <Seperator />
                        <div key={"frame-158"} className="flex items-center justify-between w-full">
                            <span className="text-neutral-950 dark:text-neutral-950">
                                &copy; StudentTechHub 2024 | Built for learners by learners
                            </span>
                            <div key={"frame-81"} className="flex justify-center items-center">
                                <Link href={`https://google.com`} className="m-3.5">
                                    <FaGoogle size={22} />
                                </Link>
                                <Link href={`https://google.com`} className="m-3.5">
                                    <FaLinkedin size={22} />
                                </Link>
                                <Link href={`https://google.com`} className="m-3.5">
                                    <FaGithub size={22} />
                                </Link>
                                <Link href={`https://google.com`} className="m-3.5">
                                    <FaDiscord size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}