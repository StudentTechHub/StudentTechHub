'use client'

import Image from "next/image";
import React, { useState } from "react";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-60">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-60 rounded-full border border-neutral-500 bg-transparent py-3 px-4 pr-11 font-Montserrat placeholder:text-neutral-500 text-sm text-neutral-950 shadow focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-4"
      >
        <Image src={'/icons/tools/Magnifer.svg'} alt="search" height={24} width={24} quality={100}/>
      </button>
    </form>
  );
};

export default Search;
