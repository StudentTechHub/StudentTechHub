'use client'

import { ThemeButton } from '@/components/ThemeButton'
import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeButton />
      <div className="h-screen bg-hero-pattern bg-cover dark:invert">
        <div className="absolute -z-10 h-full w-full">
          {/* Waves */}
          <div className="absolute top-0 w-full">
            <Image
              src={'./svg/waves.svg'}
              alt={'waves'}
              height={192}
              width={1440}
              className="w-full dark:invert"
              quality={100}
            />
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center dark:invert">
          <div className="w-9/10 sm:w-7/10 relative z-[5] flex flex-col items-center justify-center gap-2 px-4 text-center md:w-3/5">
            <span className="text-xl font-bold text-primary-600 md:text-2xl lg:text-3xl">
              From Curiosity to Mastery
            </span>
            <span className="text-4xl font-bold text-neutral md:text-6xl xl:text-7xl">
              Learn, Grow, and Build Together
            </span>
            <span className="font-quicksand text-base text-neutral-800 sm:text-lg md:text-xl">
              Join a community where collaboration fules creativity, and
              success.
            </span>
            <div className="font-quicksand mt-4 flex flex-row gap-2">
              <Button
                variant={'outline'}
                size={'lg'}
                className="flex items-center justify-center gap-2 text-base text-secondary sm:text-lg md:text-xl"
              >
                <span className="tracking-tight text-neutral-950">Explore</span>
                <Image
                  src={'/svg/arrowTopRight.svg'}
                  alt="arrowTopRight"
                  className="scale-75 dark:invert md:scale-100"
                  height={24}
                  width={24}
                />
              </Button>
              <Button
                size={'lg'}
                className="bg-primary-500 text-base sm:text-lg md:text-xl"
              >
                <span className="tracking-tight">Join Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
