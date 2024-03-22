import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

const Root = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`ui-container ${props.className}`}>{children}</div>
}

const AutoWidthSize = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`ui-container-auto-width-size ${props.className}`}>{children}</div>
}

export { Root, AutoWidthSize };