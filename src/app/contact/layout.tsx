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
      <div className="flex h-screen w-full items-center justify-center">
        <div className="absolute -z-10 h-full w-full opacity-30">
          <AnimatedEmojis />
        </div>
        <Suspense fallback={<BeatLoader />}>{children}</Suspense>
      </div>
      <Footer />
    </>
  )
}

export default ContactLayout
