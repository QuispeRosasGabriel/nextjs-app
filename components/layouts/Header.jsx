import React, { Fragment } from 'react'
import Search from '../ui/Search'
import Navbar from './Navbar'
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Boton from '../ui/Boton';

const ContenedorHeader = styled.div`
    max-width:1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px) {
        display: flex;
        justify-content: space-between;
    }    
`

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    margin-right: 2rem;
`

const Header = () => {

    const usuario = true;

    return (
        <header
            css={
                css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;    
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                    display: flex;
                    align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    <Search />
                    <Navbar />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {
                        usuario ? (
                        <Fragment>
                            <p
                                css={css`
                                margin-right: 2rem;
                                `}
                            >Hola Gabriel</p>
                            <Boton
                                bgColor="true"
                                type="button">
                                 Cerrar Sesión
                            </Boton>
                        </Fragment>
                        ) : (
                        <Fragment>
                           <Link href="/">
                                <Boton
                                  bgColor="true"
                                        >
                                     Login
                                </Boton>
                            </Link>
                            <Link href="/">
                                <Boton>
                                   Crear cuenta
                                </Boton>
                            </Link>
                        </Fragment>
                        )
                    }
                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header
