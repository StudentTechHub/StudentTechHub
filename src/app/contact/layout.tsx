'use client'

import React, { Suspense, FunctionComponent } from 'react'
import { BeatLoader } from 'react-spinners'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeButton } from '@/components/ThemeButton'
import AnimatedEmojis from '@/components/backgrounds/AnimatedEmojis'

interface ContactLayoutProps {
  children: React.ReactNode
}

const ContactLayout: FunctionComponent<ContactLayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeButton />
      <Navbar />
      <div className="relative flex min-h-screen w-full items-center justify-center">
        <div className="absolute -z-10 h-full w-full opacity-30">
          <AnimatedEmojis />
        </div>
        <Suspense fallback={<BeatLoader />}>
          <div className="flex flex-col items-center justify-center space-y-6 pt-28 pb-8">
            {children}
          </div>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default ContactLayout
