import React, { useEffect, useState } from 'react'

const AnimatedEmojis: React.FC = () => {
  const EmojiUrls = [
    '/icons/emojis/ConfoundedCircle.svg',
    '/icons/emojis/SmileCircle.svg',
    '/icons/emojis/SmileSquare.svg',
    '/icons/emojis/EmojiFunnySquare.svg',
    '/icons/emojis/EmojiFunnyCircle.svg',
    '/icons/emojis/BrokenSmileFace.svg',
    '/icons/emojis/HandStars.svg',
    '/icons/emojis/Like.svg',
    '/icons/emojis/StarShine.svg',
  ]

  const [numLines, setNumLines] = useState(6)

  useEffect(() => {
    const calculateLines = () => {
      const lines = Math.max(Math.floor(window.innerWidth / 200), 3) // At least 3 lines, one per ~200px
      setNumLines(lines)
    }

    calculateLines()
    window.addEventListener('resize', calculateLines)

    return () => window.removeEventListener('resize', calculateLines)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {Array.from({ length: numLines - 1 }).map((_, index) => (
        <div
          key={index + 1}
          className="absolute bottom-0 top-0 border-l-2 border-gray-500"
          style={{
            left: `${((index + 1) / numLines) * 100}%`,
          }}
        >
          <SingleEmoji emoji={EmojiUrls[(index + 1) % EmojiUrls.length]} />
        </div>
      ))}
    </div>
  )
}

const SingleEmoji: React.FC<{ emoji: string }> = ({ emoji }) => {
  const animationDuration = `${Math.random() * 8 + 8}s`
  const randomStart = Math.random() * 100
  const randomDirection = Math.random() > 0.5 ? 'up' : 'down'

  return (
    <div
      className={`absolute h-8 w-8 ${
        randomDirection === 'up' ? 'animate-up' : 'animate-down'
      }`}
      style={{
        top: `${randomStart}%`,
        animationDuration,
      }}
    >
      <img
        src={emoji}
        alt="emoji"
        className="h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-contain dark:invert"
      />
    </div>
  )
}

export default AnimatedEmojis
