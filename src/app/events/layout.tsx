'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeButton } from '@/components/ThemeButton'
import React, { Suspense } from 'react'
import { BeatLoader } from 'react-spinners'

type Props = {
  children: React.ReactNode
}
const EventsPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeButton />
      <Navbar />
      <Suspense fallback={<BeatLoader />}>
        <div className="flex items-center justify-center">
          {children}
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default EventsPage
