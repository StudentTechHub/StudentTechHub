'use client'

import React, { useState } from 'react'
import { Separator } from '@/components/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'

const sortOptions = ['Name', 'Newest', 'Oldest']

const Sort: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const toggleDropdown = () => () => {
    const dropdown = document.querySelector('#sort-dropdown')
    dropdown?.classList.toggle('hidden')
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown()}
        className="flex items-center gap-2 rounded-full border border-neutral-500 px-4 py-3 text-sm text-neutral-950 shadow-sm"
      >
        <Image
          src={'/icons/tools/Sort.svg'}
          alt="sort"
          height={16}
          width={16}
          quality={100}
        />
        <span>Sort by</span>
      </button>
      <div
        id="sort-dropdown"
        className="absolute z-10 mt-2 hidden w-44 rounded-lg bg-neutral-50 shadow-navbar"
      >
        <div className="p-4">
          <h3 className="mb-2 text-sm font-medium text-neutral-900">Sort by</h3>
          <Separator className="dark:invert" />
          <RadioGroup
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
            className="mt-4 space-y-2"
          >
            {sortOptions.map((option) => (
              <div
                key={option}
                className="flex items-center justify-between"
              >
                <label
                  htmlFor={`sort-${option}`}
                  className="text-sm text-neutral-950"
                >
                  {option}
                </label>
                <RadioGroupItem
                  value={option}
                  id={`sort-${option}`}
                />
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default Sort
