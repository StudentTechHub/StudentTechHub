'use client'

import Link from 'next/link'
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { verify } from '@/actions/auth/verify'
import { useToast } from '@/hooks/use-toast'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

const NewVerificationForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const { toast } = useToast()

  const onSubmit = useCallback(() => {
    if (!token) {
      return
    }
    verify(token)
      .then((data) => {
        if (!data?.success && data?.type === 'error') {
          toast({
            variant: 'destructive',
            title: data.title,
            description: data.message,
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
  }, [token, toast])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <h1 className={cn('text-3xl font-semibold')}>🔑Auth</h1>
            <p className="text-muted-foreground text-sm">Enter new password</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex w-full items-center justify-center">
            <BeatLoader />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant={'link'}
            className="w-full font-normal"
            size={'sm'}
            asChild
          >
            <Link href={'/login'}>Back to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default NewVerificationForm
