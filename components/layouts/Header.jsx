import React from 'react'
import Search from '../ui/Search'
import Navbar from './Navbar'
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Search />
                    <Navbar  />
                </div> 
                <div>
                    <p>Hola Gabriel</p>
                    <button type="button">Cerrar Sesión</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Crear cuenta</Link>
                </div>   
            </div>
        </header>
    )
}

export default Header
