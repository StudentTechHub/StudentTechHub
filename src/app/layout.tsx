import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SessionProvider } from 'next-auth/react'

const montserrat = Montserrat({
  subsets: ['latin'],
})

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
        <link
          rel="icon"
          href="./favicon.ico"
          sizes="any"
        />
      </head>
      <body
        className={`${montserrat.className} bg-neutral-50 antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
