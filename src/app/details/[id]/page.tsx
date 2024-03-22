
import { NavBar, Specifications } from '@/components';
import './style.css';

export default function Details() {
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