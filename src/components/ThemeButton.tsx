import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-10 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-50 dark:hover:bg-neutral-100"
        onClick={() => setTheme(!theme || theme === 'dark' ? 'light' : 'dark')}
      >
        <Image
          src={'./svg/sun.svg'}
          height={20}
          width={20}
          quality={100}
          alt="light-theme"
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Image
          src={'./svg/moonStars.svg'}
          height={20}
          width={20}
          quality={100}
          alt="dark-theme"
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
