// src/app/(auth)/layout.tsx
import { Suspense } from 'react'
import { BeatLoader } from 'react-spinners'
import PolkaDotsWrapper from '@/components/auth/PolkaDotsWrapper'

export const metadata = {
  title: 'Reset Password | StudentTechHub',
  description:
    'Easily reset your password with our secure authentication process.',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="absolute -z-10 h-full w-full">
        <PolkaDotsWrapper />
      </div>
      <Suspense fallback={<BeatLoader />}>{children}</Suspense>
    </div>
  )
}
