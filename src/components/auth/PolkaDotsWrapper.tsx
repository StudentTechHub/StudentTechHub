'use client'

import dynamic from 'next/dynamic'

const PolkaDots = dynamic(() => import('@/components/backgrounds/PolkaDots'), {
  ssr: false,
})

export default function PolkaDotsWrapper() {
  return <PolkaDots />
}
