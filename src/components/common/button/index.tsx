'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    size: 'small' | 'medium' | 'large',
    variant?: 'primary' | 'sub-primary' | 'secondary' | 'disabled' | 'destruct-primary' | 'destruct-secondary' | 'success-primary' | 'success-secondary' | 'warning-primary' | 'warning-secondary',
    onClick?: () => void,
};

const Root = ({ children, size, variant, onClick, ...props }: ButtonRootProps) => {
    return <button onClick={onClick} {...props} className={`${props.className} ui-button ui-button-${size} ${variant ? `ui-button-${variant}` : 'ui-button-default'}`}>{children}</button>
};

export { Root };
