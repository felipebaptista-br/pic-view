// Importação de todas as bibliotecas
import { NavBar, Specifications } from '@/components';
import './style.css';

// Exportação da página de Detalhes de Imagem pelo ID
export default function Details() {

    // Retorno da página de Detalhes de Imagem pelo ID
    return (
        <main className='details-page'>
            <NavBar.Root>
                <NavBar.Logo />
                <NavBar.Profile />
            </NavBar.Root>
            <Specifications.Root />
        </main>
    )
}