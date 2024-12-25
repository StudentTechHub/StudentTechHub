import { useEffect, useRef, useState } from 'react'

const PolkaDots: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    const calculateDots = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      const dotSize = 6
      const gap = 6
      const totalSize = dotSize + gap

      const dotsPerRow = Math.ceil((screenWidth + gap) / totalSize)
      const dotsPerColumn = Math.ceil((screenHeight + gap) / totalSize)

      setDotCount(dotsPerRow * dotsPerColumn)
    }

    calculateDots()

    window.addEventListener('resize', calculateDots)

    return () => window.removeEventListener('resize', calculateDots)
  }, [])

  useEffect(() => {
    if (!gridRef.current) return

    const dots = Array.from(gridRef.current.children) as HTMLDivElement[]

    const updateOpacity = () => {
      dots.forEach((dot) => {
        if (Math.random() > 0.8) {
          dot.style.opacity = (Math.random() * 0.4 + 0.1).toFixed(2)
        }
      })
    }

    const interval = setInterval(updateOpacity, 500)

    return () => clearInterval(interval)
  }, [dotCount])

  const createDots = () => {
    return Array.from({ length: dotCount }, (_, i) => (
      <div
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-neutral opacity-0 transition-opacity duration-500 ease-linear"
      ></div>
    ))
  }

  return (
    <div
      ref={gridRef}
      className="grid h-screen w-full grid-cols-[repeat(auto-fit,_16px)] gap-3 overflow-hidden bg-neutral-50"
    >
      {createDots()}
    </div>
  )
}

export default PolkaDots
