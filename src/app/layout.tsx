import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'StudentTechHub',
  description:
    'A platform to help students learn new skills and grow in their careers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-neutral-50 antialiased">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
