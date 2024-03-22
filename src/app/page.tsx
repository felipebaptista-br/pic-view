'use client';

// Importação de todas as bibliotecas
import React, { ChangeEvent, useState } from 'react';
import { NavBar, Gallery } from '@/components';

import './style.css';

// Exportação da página Principal
export default function HomePage() {
  // Definindo os estados do Componente, query é uma variável manipulada no NavBar e enviada para o Gallery, que utiliza o mesmo para a requisição de novas imagens.
  const [query, setQuery] = useState('');

  // Função que altera a query da requisição de novas imagens.
  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => { setQuery(event.target.value); };

  // Retorno da página principal.
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
