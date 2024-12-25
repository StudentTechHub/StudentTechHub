'use client'

import { LoginForm } from '@/components/auth/LoginForm'
import PolkaDots from '@/components/backgrounds/PolkaDots'
import { ThemeButton } from '@/components/ThemeButton'

export default function LoginPage() {
  return (
    <>
    <ThemeButton />
    <div className='absolute w-full h-full -z-10'>
      <PolkaDots />
    </div>
      <LoginForm />
    </>
  )
}
