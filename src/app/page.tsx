'use client';

import React, { ChangeEvent, useState } from 'react';
import { NavBar, Gallery } from '@/components';

import './style.css';

export default function HomePage() {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => { setQuery(event.target.value); };

  return (
    <main className='home-page'>
      <NavBar.Root>
        <NavBar.Logo />
        <NavBar.Search value={query} onChange={(event) => handleChangeQuery(event)} />
        <NavBar.Profile />
      </NavBar.Root>
      <Gallery.Root query={query} />
    </main>
  )
}
