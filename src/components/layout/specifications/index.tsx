'use client';

// Importação de todas as bibliotecas
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Picture } from '@/@types/picture';
import { getPictureById } from '@/api/images-endpoints';
import { Container, Loader } from '@/components';

import './style.css';

// Definindo o componente que será exportado.
const Root = () => {
    // Declaração de estados, sendo params a variável que contém o identificador da imagem que será renderizada pelo componente.
    const params = useParams<{ id: string }>();
    const [pictureData, setPictureData] = useState<Picture>();

    useEffect(() => {
        // Ao carregar a página, realização da requisição de imagem pelo ID, caso o ID exista.
        if (params.id) {
            const fetchPictureById = async () => {
                const picture = await getPictureById({ id: params.id });
                setPictureData(picture);
            };

            fetchPictureById();
        }
    }, []);

    // Verificação da chamada da API para a renderização principal.
    if (pictureData) {
        return (
            <Container.Root >
                <Container.AutoWidthSize className='ui-specifications'>
                    <BackgroundPicture urlPicture={pictureData?.urls?.raw} altDescriptionPicture={pictureData?.alt_description} />
                    <ContentPicture descriptionPicture={pictureData?.description} urlProfilePicture={pictureData?.user?.profile_image?.medium} nameProfile={pictureData?.user?.name} />
                </Container.AutoWidthSize>
            </Container.Root>
        )
    }

    // Caso a imagem ainda não tenha sido carregada, o componente Loading será renderizado.
    return (
        <Container.Root >
            <Container.AutoWidthSize className='ui-specifications'>
                <Loading />
            </Container.AutoWidthSize>
        </Container.Root>
    )
};

// Componente utilizado para renderizar a imagem de fundo.
const BackgroundPicture = ({ urlPicture, altDescriptionPicture }: { urlPicture: string, altDescriptionPicture: string }) => {
    return <img className='ui-specifications-background' src={urlPicture} alt={altDescriptionPicture} />
};

// Componente utilizado para renderizar o conteúdo da imagem.
const ContentPicture = ({ descriptionPicture, urlProfilePicture, nameProfile }: { descriptionPicture: string, urlProfilePicture: string, nameProfile: string }) => {
    return (
        <div className='ui-specifications-content'>
            <div className='ui-specifications-content-profile'>
                <img src={urlProfilePicture} alt="Profile Image" />
                <h3>{nameProfile}</h3>
            </div>
            <p className='ui-specifications-content-description'>{descriptionPicture}</p>
        </div>
    )
};

// Definindo o componente Loading, que será renderizado caso não realizada a chamada da API.
const Loading = () => {
    return <div className='ui-specifications-loader'><Loader.Root /></div>
};

// Exportando o componente Root.
export { Root };