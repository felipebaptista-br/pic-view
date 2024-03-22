'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPictureById } from '@/api/images-endpoints';
import { Container, Loader } from '@/components';

import './style.css';

const Root = () => {
    const params = useParams<{ id: string }>()
    const [pictureData, setPictureData] = useState<any>();

    useEffect(() => {
        if (params.id) {
            const fetchPictureById = async () => {
                const picture = await getPictureById({ id: params.id });
                setPictureData(picture);
            };

            fetchPictureById();
        }
    }, []);

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

    return (
        <Container.Root >
            <Container.AutoWidthSize className='ui-specifications'>
                <Loading />
            </Container.AutoWidthSize>
        </Container.Root>
    )
};

const BackgroundPicture = ({ urlPicture, altDescriptionPicture }: { urlPicture: string, altDescriptionPicture: string }) => {
    return <img className='ui-specifications-background' src={urlPicture} alt={altDescriptionPicture} />
};

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

const Loading = () => {
    return <div className='ui-specifications-loader'><Loader.Root /></div>
}

export { Root };