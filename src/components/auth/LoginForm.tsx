'use client'

import * as z from 'zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useEffect, useTransition } from 'react'
import { Logo } from '@/components/Logo'

import { login } from '@/actions/auth/login'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { LoginSchema } from '@/types/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Separator from '../separator'
import Image from 'next/image'

export const LoginForm = () => {
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
        title: 'Login Error',
        description: urlError,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const callbackUrl = searchParams.get('callbackUrl')

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSocialLogin = (
    provider: 'google' | 'github' | 'discord' | 'linkedin'
  ) => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT })
  }

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values, callbackUrl)
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
        .catch((error) => {
          if (error.message !== 'NEXT_REDIRECT') {
            toast({
              variant: 'destructive',
              title: 'An error occurred',
              description: 'Please try again later',
            })
          }
        })
    })
  }

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-3">
        <div className="rounded-full bg-neutral-50">
          <Logo
            height={45}
            full={true}
          />
        </div>
        <div className="flex h-auto w-auto justify-between gap-12 rounded-3xl bg-neutral-50 p-12 shadow-navbar">
          <div className="font-caviar-dreams">
            <p className="text-5xl font-bold tracking-wide">
              Ready to <span className="text-primary">BUILD</span> agian?
            </p>
            <p className="text-xl text-neutral-700">
              let&apos;s make it happen
            </p>
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
            <div className='font-Montserrat'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username or Email</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              type="email"
                              placeholder="johndoe@mail.com"
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              type="password"
                              placeholder="••••••••"
                            />
                          </FormControl>
                          <p className="px-0 text-primary-600 text-sm font-Roboto font-normal">
                            <Link href="/reset-password">Forgot Password?</Link>
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full font-Montserrat"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <div className="font-Roboto">
              <p className="pt-2 text-center text-neutral-950">
                Don&apos;t have an account?{' '}
                <Link
                  href={'/signup'}
                  className="text-primary-600 underline"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
