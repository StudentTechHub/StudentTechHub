'use client'

import React from 'react'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import Separator from '@/components/separator'

export default function Footer() {
  return (
    <>
      <footer className="m-2 flex flex-col rounded-3xl bg-neutral-100 px-8 py-6 md:px-20 lg:px-40">
        <div className="flex flex-col items-center justify-between sm:flex-row sm:items-start">
          <Logo
            height={45}
            full={true}
          />
          <div className="mt-6 flex flex-row gap-8 sm:mt-0 md:gap-16">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm text-neutral-950">Explore</p>
              <div className="flex flex-col gap-2 text-sm text-neutral-800">
                <Link
                  href="/resources"
                  className="underline"
                >
                  Resources
                </Link>
                <Link
                  href="/leaderboard"
                  className="underline"
                >
                  Leaderboard
                </Link>
                <Link
                  href="/quizzes"
                  className="underline"
                >
                  Quizzes
                </Link>
                <Link
                  href="/blogs"
                  className="underline"
                >
                  Blogs
                </Link>
              </div>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm text-neutral-950">Important Links</p>
              <div className="flex flex-col gap-2 text-sm text-neutral-800">
                <Link
                  href="/terms-of-service"
                  className="underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="underline"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/cookie-policy"
                  className="underline"
                >
                  Cookies
                </Link>
                <Link
                  href="/contact"
                  className="underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 dark:invert sm:my-4" />

        {/* Copy Right and Social*/}
        <div className="flex flex-row items-center">
          <div className="-mb-2 flex w-full flex-col-reverse items-center justify-between sm:flex-row">
            <p className="text-center text-sm text-neutral-950 sm:text-left sm:text-base">
              &copy; StudentTechHub 2024 | Built for learners by learners
            </p>
            <div className="flex -translate-y-4 gap-4 dark:invert sm:mt-0 sm:translate-y-0">
              <Link
                href="mailto:studenttechhub@gmail.com"
                target="_blank"
              >
                <Image
                  src="/icons/social/Google.svg"
                  width={24}
                  height={24}
                  className="transition-scale cursor-pointer duration-300 ease-in-out hover:scale-110"
                  alt="Google"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/studenttechhub"
                target="_blank"
              >
                <Image
                  src="/icons/social/Linkedin.svg"
                  width={24}
                  height={24}
                  className="transition-scale cursor-pointer duration-300 ease-in-out hover:scale-110"
                  alt="Linkedin"
                />
              </Link>
              <Link
                href="https://www.github.com/studenttechhub"
                target="_blank"
              >
                <Image
                  src="/icons/social/Github.svg"
                  width={24}
                  height={24}
                  className="transition-scale cursor-pointer duration-300 ease-in-out hover:scale-110"
                  alt="Github"
                />
              </Link>
              <Link
                href="https://discord.gg/B8VtSd46"
                target="_blank"
              >
                <Image
                  src="/icons/social/Discord.svg"
                  width={24}
                  height={24}
                  className="transition-scale cursor-pointer duration-300 ease-in-out hover:scale-110"
                  alt="Discord"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
