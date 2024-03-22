'use client'

// Importação de todas as bibliotecas
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPictures } from '@/api/images-endpoints';
import { Button, Container, Loader } from '@/components';
import { Picture } from '@/@types/picture';
import Image from 'next/image';
import SadIcon from '@/assets/icons/sad.svg';

import './style.css';

// Definindo o componente Principal que será exportado.
const Root = ({ query }: { query?: string }) => {
    // Declaração de estados do Componente.
    const [currentPage, setCurrentPage] = useState(1);
    const [pictures, setPictures] = useState([] as Picture[]);

    useEffect(() => {
        // Fazendo a requisição de todas as imagens da API e armazenando em um estado para renderização. Sempre que a query for alterada, a requisição é feita novamente.
        const fetchPictures = async () => {
            const response = await getPictures({ query: query, page: currentPage, perPage: 10 });
            setPictures(response);
        }

        fetchPictures();
    }, [query]);

    // Função que faz a requisição de novas imagens da API e adiciona as novas imagens ao estado de acordo com o evento de clique.
    const handleClickNewPictures = async () => {
        const newPicturesByApi = await getPictures({ page: currentPage + 1, query: query, perPage: 10 });
        setCurrentPage(currentPage + 1);
        setPictures([...pictures, ...newPicturesByApi]);
    }

    // Verificação da chamada da API, caso ainda não chamada e respondida, o componente Loading é renderizado.
    if (pictures.length === 0) {
        return (
            <Container.Root>
                <Container.AutoWidthSize>
                    <Loading />
                </Container.AutoWidthSize>
            </Container.Root>
        )
    };

    // Verificação se existem imagens para renderizar, caso existam, o componente GalleryGrid é renderizado.
    if (pictures.length > 0) {
        return (
            <Container.Root>
                <Container.AutoWidthSize className='ui-gallery'>
                    <GalleryGrid pictures={pictures} />
                    {query === '' ?
                        <Button.Root onClick={() => handleClickNewPictures()} size='medium' variant='sub-primary'>Ver Mais</Button.Root> : <></>
                    }
                </Container.AutoWidthSize>
            </Container.Root>
        )
    };

    // Caso a consulta seja vazia, o componente GalleryNotFound e renderizado apresentando ao usuário a inexistência de conteúdos.
    return (
        <Container.Root>
            <Container.AutoWidthSize className='ui-gallery ui-gallery-nothing-found'>
                <h2>Nenhuma imagem encontrada!</h2>
                <Image src={SadIcon} alt="Sad Icon" width={200} height={200} />
            </Container.AutoWidthSize>
        </Container.Root>
    );
};

// Definindo os componentes secundários, que serão renderizados dentro do componente Root, o GalleryGrid é um componente interno de Gallery e só é chamado quando encontradas imagens.
const GalleryGrid = ({ pictures }: { pictures: any }) => {
    const router = useRouter();

    return (
        <div className='ui-gallery-grid'>
            {pictures.map((photo: { id: string, urls: { regular: string | undefined; }; description: string | undefined; }, index: React.Key | null | undefined) => (
                <div key={index} className='ui-gallery-grid-item'>
                    <img onClick={() => router.push(`/details/${photo.id}`)} src={photo.urls.regular} alt={photo.description} />
                </div>
            ))}
        </div>
    )
};

// Definindo o componente Loading, que só será renderizado caso não haja imagens para renderizar.
const Loading = () => {
    return <div className='ui-gallery-loader'><Loader.Root /></div>
};

// Exportação do Componente Principal
export { Root };