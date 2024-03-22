// Importação de todas as bibliotecas.
import React, { HTMLAttributes, ReactNode } from 'react';

import './style.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

// Componente principal, responsável por centralizar seus elementos filhos e padronizá-los no tamanho da tela.
const Root = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`ui-container ${props.className}`}>{children}</div>
}

// Componente responsável por determinar um tamanho específico em pixeis, criado em pattern de composição para estar dentro de um container Root.
const AutoWidthSize = ({ children, ...props }: ContainerProps) => {
    return <div {...props} className={`ui-container-auto-width-size ${props.className}`}>{children}</div>
}

// Exportação dos Containers
export { Root, AutoWidthSize };