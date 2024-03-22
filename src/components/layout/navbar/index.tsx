'use client'

import React, { HTMLAttributes, ReactNode } from 'react';
import { Container, Input } from '@/components';
import Image from 'next/image';
import ProfileIcon from '@/assets/icons/profile.svg';

import './style.css';

interface NavbarRootProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode };

const Root = ({ children, ...props }: NavbarRootProps) => {
    return <nav {...props} className={`ui-nav-bar`}><Container.AutoWidthSize className='ui-nav-bar-content'>{children}</Container.AutoWidthSize></nav>
}

const Logo = () => {
    return <h3 className='ui-nav-bar-logo'>Visual <span className='ui-nav-bar-logo-span'>Trek</span></h3>
}

interface SearchProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
    return <Input.Root onChange={onChange} value={value} type='text' placeholder='Pesquisar' className='ui-nav-bar-search' />
}

const Profile = () => {
    return <Image src={ProfileIcon} className='ui-nav-bar-profile' alt="Profile Icon" />
}

export { Root, Logo, Search, Profile };