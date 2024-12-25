import type { Metadata } from 'next'
import { Suspense } from 'react'
import { BeatLoader } from 'react-spinners'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Suspense fallback={<BeatLoader />}>{children}</Suspense>
    </div>
  )
}
