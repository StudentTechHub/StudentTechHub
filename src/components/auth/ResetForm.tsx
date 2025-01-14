'use client'

import * as z from 'zod'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { ResetSchema } from '@/types'
import { resetPassword } from '@/actions/auth/password'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Image from 'next/image'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useRouter, useSearchParams } from 'next/navigation'
import { verify } from '@/actions/auth/verify'
import { setNewPassword } from '@/actions/auth/password'

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [curTab, setCurTab] = useState(0)

  const emailform = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const otpform = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      otp: '',
    },
  })

  const passform = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev)
  }

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev)
  }

  const onEmailSubmit = (values: z.infer<typeof ResetSchema>): void => {
    startTransition(() => {
      resetPassword(values).then((data) => {
        if (!data?.success && data?.type === 'error') {
          emailform.reset()
          toast({
            variant: 'destructive',
            title: data.title,
            description: data.message,
          })
        } else {
          emailform.reset()
          toast({
            variant: 'default',
            title: data.title,
            description: data.message,
          })
          // onsuccess
          setCurTab(1)
        }
      })
    })
  }

  const onOtpSubmit = (values: z.infer<typeof ResetSchema>): void => {
    const otpValue = values.otp
    startTransition(() => {
      verify(otpValue).then((data) => {
        if (!data?.success && data?.type === 'error') {
          otpform.reset()
          toast({
            variant: 'destructive',
            title: data.title,
            description: data.message,
          })
        } else {
          otpform.reset()
          toast({
            variant: 'default',
            title: data.title,
            description: data.message,
          })
          // onsuccess
          setCurTab(2)
        }
      })
    })
  }

  const onPassSubmit = (values: z.infer<typeof ResetSchema>): void => {
    const token = searchParams.get('token')

    if (!token) {
      toast({
        variant: 'destructive',
        title: 'Missing token',
        description: 'The token is missing. Please check your email link.',
      })
      return
    }

    if (values.password !== values.confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Passwords do not match',
        description: 'Please ensure both password fields are the same.',
      })
      return
    }

    startTransition(() => {
      setNewPassword(
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        token as string
      )
        .then((data) => {
          if (data?.success && data?.type === 'success') {
            toast({
              variant: 'default',
              title: data.title,
              description: data.message,
            })
          } else {
            toast({
              variant: 'destructive',
              title: data?.title || 'Error',
              description:
                data?.message || 'An error occurred. Please try again later.',
            })
          }
        })
        .catch((error) => {
          toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: 'Please try again later.',
          })
          console.error(error)
        })
      setCurTab(3)
      // show the countdown timer such that redirecting in 3 2 1 and update the counter every second
      setTimeout(() => {
        router.push('/login')
      }, 3000)
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
        <div className="flex h-auto w-auto justify-between gap-12 rounded-3xl bg-neutral-50 p-12 shadow-navbar dark:shadow-neutral-100">
          <div className="font-CaviarDreams">
            <p className="text-5xl font-bold leading-tight tracking-wide">
              Forgot your key to <span className="text-primary">LEARNING</span>?
            </p>
            <p className="text-xl font-normal text-neutral-700">
              Recover your password quickly!
            </p>
          </div>

          <div className="flex w-full max-w-96 flex-col flex-nowrap gap-3">
            <div
              className={`w-full ${curTab === 0 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="mb-3 flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary ${curTab === 0 ? '' : 'bg-primary'}`}
                >
                  {curTab === 0 ? (
                    <span className="font-Roboto text-base font-extrabold text-primary">
                      1
                    </span>
                  ) : (
                    <Image
                      src={'/icons/form/check.svg'}
                      alt="check"
                      height={16}
                      width={16}
                      quality={100}
                    />
                  )}
                </div>
                <p className="font-Roboto text-base font-normal">
                  Enter your information
                </p>
              </div>
              <Form {...emailform}>
                <form
                  onSubmit={emailform.handleSubmit(onEmailSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={emailform.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isPending}
                              {...field}
                              label="Username or Email"
                              type="email"
                              placeholder="johndoe"
                              leadingIcon={
                                <Image
                                  src={'/icons/form/Mention.svg'}
                                  alt={'Mention'}
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
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full"
                  >
                    Send OTP
                  </Button>
                </form>
              </Form>
            </div>
            <div className="w-full">
              <div
                className={`w-full ${curTab === 1 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary ${curTab < 2 ? '' : 'bg-primary'}`}
                  >
                    {curTab < 2 ? (
                      <span className="font-Roboto text-base font-extrabold text-primary">
                        2
                      </span>
                    ) : (
                      <Image
                        src={'/icons/form/check.svg'}
                        alt="check"
                        height={16}
                        width={16}
                        quality={100}
                      />
                    )}
                  </div>
                  <p className="font-Roboto text-base font-normal">
                    Verify your email
                  </p>
                </div>
                <Form {...otpform}>
                  <form
                    onSubmit={otpform.handleSubmit(onOtpSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <FormField
                        control={otpform.control}
                        name="otp"
                        render={() => (
                          <FormItem>
                            <FormLabel className="-mb-2 px-5 text-sm">
                              Enter the OTP you received in your inbox
                            </FormLabel>
                            <InputOTP maxLength={6}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={1} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={2} />
                              </InputOTPGroup>

                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={3} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={4} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
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
                      Verify OTP
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="w-full">
              <div
                className={`w-full ${curTab === 2 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary ${curTab <= 2 ? '' : 'bg-primary'}`}
                  >
                    {curTab <= 2 ? (
                      <span className="font-Roboto text-base font-extrabold text-primary">
                        3
                      </span>
                    ) : (
                      <Image
                        src={'/icons/form/check.svg'}
                        alt="check"
                        height={16}
                        width={16}
                        quality={100}
                      />
                    )}
                  </div>
                  <p className="font-Roboto text-base font-normal">
                    Enter your Password
                  </p>
                </div>
                <Form {...passform}>
                  <form
                    onSubmit={passform.handleSubmit(onPassSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <FormField
                        control={passform.control}
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
                                onTrailingIconClick={togglePasswordVisibility}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={passform.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isPending}
                                {...field}
                                label="Confirm Password"
                                type={
                                  isConfirmPasswordVisible ? 'text' : 'password'
                                }
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
                                      isConfirmPasswordVisible
                                        ? '/icons/form/EyeOpen.svg'
                                        : '/icons/form/EyeClosed.svg'
                                    }
                                    alt="toggle visibility"
                                    height={24}
                                    width={24}
                                    quality={100}
                                  />
                                }
                                onTrailingIconClick={
                                  toggleConfirmPasswordVisibility
                                }
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
                      Update Password
                    </Button>
                  </form>
                </Form>
              </div>

              <div
                className={`w-full ${curTab === 3 ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <p className="font-Roboto text-base font-normal text-success">
                  Redirecting to Login
                </p>
              </div>
            </div>
            <div className="font-Roboto">
              <p className="text-nowrap pt-2 text-center text-neutral-950">
                Back to{' '}
                <Link
                  href={'/login'}
                  className="text-primary-600 underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
