import React from 'react'
import Filter from '@/components/event/Filter'
import Sort from '@/components/event/Sort'
import Search from '@/components/event/Search'

export default function Events() {
  return (
    <>
      <div className="min-h-screen w-full bg-hero-pattern bg-cover px-8 py-6 pt-24 dark:invert md:px-20 lg:px-40">
        <div className="flex w-full items-center justify-between">
          <div className="dark:invert">
            <Search />
          </div>
          <div className="flex items-center space-x-4 dark:invert">
            <Filter />
            <Sort />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </>
  )
}
