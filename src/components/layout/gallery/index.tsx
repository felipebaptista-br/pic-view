'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPictures } from '@/api/images-endpoints';
import { Button, Container, Loader } from '@/components';
import Image from 'next/image';
import SadIcon from '@/assets/icons/sad.svg';

import './style.css';

const Root = ({ query }: { query?: string }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pictures, setPictures] = useState([] as any);

    useEffect(() => {
        const fetchPictures = async () => {
            const response = await getPictures({ query: query, page: currentPage, perPage: 10 });
            setPictures(response);
        }

        fetchPictures();
    }, [query]);

    const handleClickNewPictures = async () => {
        const newPicturesByApi = await getPictures({ page: currentPage + 1, query: query, perPage: 10 });
        setCurrentPage(currentPage + 1);
        setPictures([...pictures, ...newPicturesByApi]);
    }

    if (pictures.length === 0) {
        return (
            <Container.Root>
                <Container.AutoWidthSize>
                    <Loading />
                </Container.AutoWidthSize>
            </Container.Root>
        )
    };

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

    return (
        <Container.Root>
            <Container.AutoWidthSize className='ui-gallery ui-gallery-nothing-found'>
                <h2>Nenhuma imagem encontrada!</h2>
                <Image src={SadIcon} alt="Sad Icon" width={200} height={200} />
            </Container.AutoWidthSize>
        </Container.Root>
    );
};

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

const Loading = () => {
    return <div className='ui-gallery-loader'><Loader.Root /></div>
};

export { Root };