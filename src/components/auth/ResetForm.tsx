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

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const [curTab, setCurTab] = useState(0);

  const emailform = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

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
        }
      })
    })

    // onsuccess
    setCurTab(1)
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
            <p className="text-5xl font-bold tracking-wide leading-tight">
              Forgot your key to{' '}<span className="text-primary">LEARNING</span>?
            </p>
            <p className="text-xl font-normal text-neutral-700">
              Recover your password quickly!
            </p>
          </div>

          <div className="w-full max-w-96 flex flex-col flex-nowrap gap-3">
            <div className={`w-full ${curTab === 0 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className='flex items-center gap-2 mb-4'>
                <div className='rounded-full h-12 w-12 flex justify-center items-center border-2 border-primary'>1</div>
                <p>Enter your information</p>
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
            <div className='w-full'>
              <div className={`w-full ${curTab === 1 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='rounded-full h-12 w-12 flex justify-center items-center border-2 border-primary'>2</div>
                  <p>Verify your email</p>
                </div>
                
                lorem ipsum dollar shit
              </div>
            </div>
            <div className='w-full'>
              <div className={`w-full ${curTab === 2 ? 'max-h-96' : 'max-h-12'} overflow-hidden transition-all duration-300 ease-in-out`}>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='rounded-full h-12 w-12 flex justify-center items-center border-2 border-primary'>3</div>
                  <p>Enter your Password</p>
                </div>
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
