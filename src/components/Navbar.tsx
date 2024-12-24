'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { Logo } from '@/components/Logo'
import Image from 'next/image'

const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
]

const exploreLinks = [
  {
    title: 'Roadmap',
    href: '/roadmap',
    description:
      'A detailed roadmap with various career paths and learning resources.',
  },
  {
    title: 'Courses',
    href: '/courses',
    description:
      'A collection of courses and tutorials to help you learn new skills.',
  },
  {
    title: 'Projects',
    href: '/projects',
    description:
      'A collection of projects to help you build your portfolio and learn new skills.',
  },
]

const blogLinks = [
  {
    title: 'Tech Blogs',
    href: '/blogs/tech',
    description: 'A collection of blogs related to technology and programming.',
  },
  {
    title: 'Career Blogs',
    href: '/blogs/career',
    description:
      'A collection of blogs related to career growth and personal development.',
  },
  {
    title: 'Life Blogs',
    href: '/blogs/life',
    description:
      'A collection of blogs related to life and personal experiences.',
  },
  {
    title: 'Interview Blogs',
    href: '/blogs/interview',
    description: 'A collection of blogs related to interviews and placements.',
  },
  {
    title: 'Study Blogs',
    href: '/blogs/study',
    description:
      'A collection of blogs related to study tips and learning resources.',
  },
]

export default function Navbar() {
  const user = useCurrentUser()

  const navRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.remove('bg-neutral-50')
          navRef.current.classList.add('bg-neutral/10')
        } else {
          navRef.current.classList.add('bg-neutral-50')
          navRef.current.classList.remove('bg-neutral/10')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef} className="fixed left-1/2 z-10 mx-auto mt-2 max-h-16 w-[calc(100%-20rem)] -translate-x-1/2 rounded-full bg-neutral-50 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] shadow-black-950/25 dark:shadow-neutral-50 backdrop-blur-super transition-colors duration-300 ease-in-out">
      <div className="flex items-center justify-between px-8 py-2">
        {/* Logo */}
        <Logo
          full={true}
          height={40}
        />

        {/* Navigation Links */}
        <div className="hidden space-x-6 text-sm font-medium text-neutral-950 md:flex">
          <Link href="/">Home</Link>

          {/* Explore Dropdown */}
          <div className="group relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <span>Explore</span>
              <Image
                src={'./svg/arrowDown.svg'}
                alt={'DownArrow'}
                height={24}
                width={24}
                quality={100}
                className="h-5 w-5 transform transition-transform duration-200 group-hover:rotate-180 dark:invert"
              />
            </button>
            <div className="absolute left-0 w-64 origin-top-left scale-0 rounded-md transition duration-300 ease-in-out group-hover:scale-100">
              <div className="mt-6 space-y-2 rounded-md bg-white p-4 shadow-md dark:bg-neutral-50">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-4 py-2 hover:bg-slate-200 dark:hover:bg-neutral-100"
                  >
                    {link.title}
                    {link.description && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {link.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quizzes */}
          <Link href="/quizzes">Quizzes</Link>

          {/* Blogs Dropdown */}
          <div className="group relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <span>Blogs</span>
              <Image
                src={'./svg/arrowDown.svg'}
                alt={'DownArrow'}
                height={24}
                width={24}
                quality={100}
                className="h-5 w-5 transform transition-transform duration-200 group-hover:rotate-180 dark:invert"
              />
            </button>
            <div className="absolute left-0 w-64 origin-top-left scale-0 rounded-md transition duration-300 ease-in-out group-hover:scale-100">
              <div className="mt-6 space-y-2 rounded-md bg-white p-4 shadow-md dark:bg-neutral-50">
                {blogLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-4 py-2 hover:bg-slate-200 dark:hover:bg-neutral-100"
                  >
                    {link.title}
                    {link.description && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {link.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about-us">About Us</Link>
        </div>

        {/* Authentication Buttons or User Info */}
        <div className="flex items-center space-x-4 text-neutral-950">
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">
                Hi,{' '}
                <Link
                  href="/profile"
                  className="text-primary-600"
                >
                  {user.name}
                </Link>
              </span>
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user.image || ''}
                  alt={user.name || 'User'}
                />
                <AvatarFallback>{user.name?.charAt(0) || '?'}</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                size="sm"
                asChild
              >
                <Link href="/signup">Signup</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        {/* Add a hamburger menu or drawer for mobile */}
      </div>
    </nav>
  )
}
