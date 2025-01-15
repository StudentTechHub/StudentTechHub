'use client'

import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/separator'
import Image from 'next/image'

const tags = ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Backend', 'Frontend']

const Filter: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleDropdown = () => () => {
    const dropdown = document.querySelector('#filter-dropdown')
    dropdown?.classList.toggle('hidden')
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearSelection = () => setSelectedTags([])

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 rounded-full border border-neutral-500 px-4 py-3 text-sm text-neutral-950 shadow-sm"
        onClick={toggleDropdown()}
      >
        <Image
          src={'/icons/tools/Filter.svg'}
          alt="list-filter"
          height={16}
          width={16}
          quality={100}
        />
        <span>Filter</span>
      </button>
      {/* dropdown */}
      <div
        id="filter-dropdown"
        className="absolute z-10 mt-2 hidden w-44 rounded-lg bg-neutral-50 shadow-navbar"
      >
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-neutral-900">Filter by</h3>
            <button
              onClick={clearSelection}
              className="text-sm text-primary-600 hover:underline"
            >
              Clear
            </button>
          </div>
          <Separator className="dark:invert" />
          <div className="mt-4">
            <h4 className="text-sm font-medium text-neutral-500">Tags</h4>
            <div className="mt-2 space-y-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between"
                >
                  <label className="text-sm text-neutral-950">{tag}</label>
                  <Checkbox
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
