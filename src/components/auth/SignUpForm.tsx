'use client'

import * as z from 'zod'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useTransition } from 'react'

import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signup } from '@/actions/auth/signup'
import { useToast } from '@/hooks/use-toast'
import { SignUpSchema } from '@/types/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import Separator from '@/components/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition()

  const searchParams = useSearchParams()
  const { toast } = useToast()

  const urlError =
    searchParams.get('error') == 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider!'
      : ''

  useEffect(() => {
    if (urlError) {
      toast({
        variant: 'destructive',
        title: 'SignUp Error',
        description: urlError,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const callbackUrl = searchParams.get('callbackUrl')

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    },
  })

  const handleSocialLogin = (
    provider: 'google' | 'github' | 'discord' | 'linkedin'
  ) => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT })
  }

  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev)
  }

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    startTransition(() => {
      signup(values)
        .then((res) => {
          if (!res?.success && res?.type === 'error') {
            form.reset()
            toast({
              variant: 'destructive',
              title: res.title,
              description: res.message,
            })
          }
          if (res?.success) {
            form.reset()
            toast({
              variant: 'default',
              title: res.title,
              description: res.message,
            })
          }
        })
        .catch((_error) => {
          toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: 'Please try again later',
          })
        })
    })
  }

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-3">
        <Link
          href={'/'}
          className="rounded-full bg-neutral-50"
        >
          <Logo
            height={45}
            full={true}
          />
        </Link>
        <div className="flex w-full max-w-5xl justify-between gap-12 rounded-3xl bg-neutral-50 p-12 shadow-navbar dark:shadow-neutral-100">
          <div className="relative flex flex-col justify-between font-CaviarDreams">
            <div>
              <p className="text-5xl font-bold leading-tight tracking-wide">
                Build Something <span className="text-primary">AMAZING</span>
              </p>
              <p className="text-xl text-neutral-700">
                your next chapter starts here!
              </p>
            </div>
            {/* Floating Icons */}
            <div className="absolute hidden md:block">
              <Image
                src={'./icons/tools/figma.svg'}
                alt={'figma'}
                className="h-40 w-32 translate-x-60 translate-y-48 transform"
                height={80}
                width={80}
                quality={100}
              />
              <Image
                src={'./icons/tools/github.svg'}
                alt={'github'}
                className="h-24 w-24 translate-x-32 translate-y-32 transform"
                height={80}
                width={80}
                quality={100}
              />
              <Image
                src={'./icons/tools/vscode.svg'}
                alt={'vscode'}
                className="h-24 w-24 translate-x-44 translate-y-36 transform"
                height={80}
                width={80}
                quality={100}
              />
            </div>
          </div>
          <div className="w-full max-w-96">
            <div>
              <div className="flex w-full items-center justify-center gap-x-4">
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleSocialLogin('google')}
                >
                  <Image
                    src={'./icons/social/Google.svg'}
                    alt="google"
                    height={24}
                    width={24}
                    quality={100}
                    className="dark:invert"
                  />
                </Button>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleSocialLogin('github')}
                >
                  <Image
                    src={'./icons/social/GitHub.svg'}
                    alt="GitHub"
                    height={24}
                    width={24}
                    quality={100}
                    className="dark:invert"
                  />
                </Button>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleSocialLogin('linkedin')}
                >
                  <Image
                    src={'./icons/social/Linkedin.svg'}
                    alt="Linkedin"
                    height={24}
                    width={24}
                    quality={100}
                    className="dark:invert"
                  />
                </Button>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleSocialLogin('discord')}
                >
                  <Image
                    src={'./icons/social/Discord.svg'}
                    alt="Discord"
                    height={24}
                    width={24}
                    quality={100}
                    className="dark:invert"
                  />
                </Button>
              </div>
            </div>
            <Separator
              text="OR"
              className="my-6 dark:invert"
            />
            <div className="font-Montserrat">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isPending}
                                {...field}
                                label="First Name"
                                type="text"
                                placeholder="John"
                                leadingIcon={
                                  <Image
                                    src="/icons/form/User.svg"
                                    alt="user"
                                    height={24}
                                    width={24}
                                    quality={100}
                                  />
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isPending}
                                {...field}
                                label="Last Name"
                                type="text"
                                placeholder="Doe"
                                leadingIcon={
                                  <Image
                                    src="/icons/form/User.svg"
                                    alt="user"
                                    height={24}
                                    width={24}
                                    quality={100}
                                  />
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              label="Username"
                              type="text"
                              placeholder="johndoe"
                              leadingIcon={
                                <Image
                                  src="/icons/form/Mention.svg"
                                  alt="user"
                                  height={24}
                                  width={24}
                                  quality={100}
                                />
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              label="Email"
                              type="email"
                              placeholder="johndoe@mail.com"
                              leadingIcon={
                                <Image
                                  src="/icons/form/mail.svg"
                                  alt="user"
                                  height={24}
                                  width={24}
                                  quality={100}
                                />
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              label="Password"
                              type={isPasswordVisible ? 'text' : 'password'}
                              placeholder="●●●●●●●●"
                              leadingIcon={
                                <Image
                                  src="/icons/form/Key.svg"
                                  alt="user"
                                  height={24}
                                  width={24}
                                  quality={100}
                                />
                              }
                              trailingIcon={
                                <Image
                                  src={
                                    isPasswordVisible
                                      ? '/icons/form/EyeOpen.svg'
                                      : '/icons/form/EyeClosed.svg'
                                  }
                                  alt="toggle visibility"
                                  height={24}
                                  width={24}
                                  quality={100}
                                />
                              }
                              onTrailingIconClick={toggleVisibility}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full"
                  >
                    Create an account
                  </Button>
                </form>
              </Form>
              <div className="font-Roboto">
                <p className="pt-2 text-center text-neutral-950">
                  Already got an account?{' '}
                  <Link
                    href={'/login'}
                    className="text-primary-600 underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-Roboto text-neutral-950 backdrop-blur-sm">
          By creating an account you agree to our{' '}
          <Link
            href="/tos"
            className="text-primary-600 underline"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/pp"
            className="text-primary-600 underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </>
  )
}
