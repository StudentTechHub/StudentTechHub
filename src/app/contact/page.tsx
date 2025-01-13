'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useState, useTransition } from 'react'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
})

export default function ContactPage() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [charCount, setCharCount] = useState(0)

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length)
    form.setValue('message', e.target.value)
  }

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    startTransition(() => {
      // Backend API Call

      setTimeout(() => {
        toast({
          variant: 'default',
          title: 'Message Sent!',
          description:
            'Thank you for reaching out, we will get back to you soon.',
        })
        form.reset()
      }, 1000)
    })
  }

  return (
    <>
        <div className="flex flex-col space-y-2 text-center font-CaviarDreams font-bold">
          <p className="text-5xl text-neutral-950">
            Get in touch, we&apos;d love to hear from{' '}
            <span className="text-primary">you!</span>
          </p>
          <p className="text-xl text-neutral-800">
            Questions, feedback, or just want to say hi? Drop us a line.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-neutral/1 inline-flex w-1/2 flex-col items-center gap-2 rounded-2xl p-12 shadow-card backdrop-blur-lg dark:shadow-cardDark">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label="Name"
                        type="text"
                        placeholder="John Doe"
                        leadingIcon={
                          <Image
                            src="/icons/form/User.svg"
                            alt="user"
                            height={24}
                            width={24}
                            quality={100}
                          />
                        }
                        {...field}
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
                        label="Email Address"
                        type="email"
                        placeholder="johndoe@mail.com"
                        leadingIcon={
                          <Image
                            src="/icons/form/mail.svg"
                            alt="email"
                            height={24}
                            width={24}
                            quality={100}
                          />
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label="Subject"
                        type="text"
                        placeholder="Something Important you wish to tell us"
                        leadingIcon={
                          <Image
                            src="/icons/form/letter-text.svg"
                            alt="subject"
                            height={24}
                            width={24}
                            quality={100}
                          />
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="-mb-2 px-5 text-sm">
                      Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        id="message"
                        rows={3}
                        maxLength={500}
                        placeholder="You can explain your doubts here..."
                        className="placeholder:text-gray/60 flex w-full resize-none overflow-y-hidden rounded-3xl border-2 border-neutral-200 bg-transparent px-5 py-3 font-Montserrat text-base outline-none transition-all duration-200 ease-in-out hover:border-secondary focus:border-secondary focus:shadow-md"
                        {...field}
                        onChange={handleMessageChange}
                      />
                    </FormControl>
                    <FormMessage />
                    <p className="absolute bottom-3 right-4 rounded-md bg-neutral-50 px-2 text-right text-sm font-medium text-primary">
                      {500 - charCount}
                    </p>
                  </FormItem>
                )}
              />

              <Button
                disabled={isPending}
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        <p className="text-center font-Roboto text-neutral-950 backdrop-blur-sm">
          By contacting us, you agree to our{' '}
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
    </>
  )
}
