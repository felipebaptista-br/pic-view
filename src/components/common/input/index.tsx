'use client';

import React, { HTMLAttributes } from 'react';

import './style.css';

interface InputRootProps extends HTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const Root = ({ type, placeholder, onChange, value, ...props }: InputRootProps) => {
    return <input onChange={onChange} value={value} placeholder={placeholder} {...props} type={type ? type : 'text'} className={`ui-input ${props.className}`} />
};

export { Root };