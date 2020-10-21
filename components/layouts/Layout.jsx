import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
            <Global
            styles={css`
                :root {
                    --gris: #3d3d3d;
                    --gris2: #6f6f6f;
                    --naranja: #DA552F;
                }

                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                *. *:before, *:after {
                    box-sizing:inherit;
                }

                body {
                    font-size:1.6rem;
                    line-height: 1.5;
                }

                h1,h2,h3 {
                    margin: 0 0 2rem 0;
                    line-height: 1.5;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                }
            `}
            />

            <Head>
                <html lang="es" />
                <title>Proyecto con Next.js</title>
                <link rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
                    crossorigin="anonymous" />
            </Head>
            <Header />
            <main>
             {props.children}
            </main>
        </>
    )
}

export default Layout;
