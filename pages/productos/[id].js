import { useRouter } from "next/router";
import { css } from '@emotion/core';
import { es } from 'date-fns/locale';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FirebaseContext } from '../../firebase';
import { useContext, useEffect, useState } from "react";
import styled from '@emotion/styled';
import Error404 from "../../components/layouts/404";
import Layout from '../../components/layouts/Layout';
import { Campo, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';

const ContenedorProducto = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Producto = () => {

    // state del componente 
    const [producto, setProducto] = useState('');
    const [error, setError] = useState(false);
    // Router para obtener el id actual
    const router = useRouter();
    const { query: { id } } = router;

    // pasando context
    const { firebase, usuario } = useContext(FirebaseContext);

    useEffect(() => {
        if (id) {
            const obtenerProducto = async () => {
                const productQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productQuery.get();
                if (producto.exists) {
                    setProducto(producto.data());
                } else {
                    setError(true);
                }
            }
            obtenerProducto();
        }
    }, [id])

    if (Object.keys.length === 0) return 'Cargando...';

    const { comentarios,
        creado,
        description,
        votos,
        empresa,
        nombre,
        url,
        urlImage,
        creador } = producto;

    return (
        <Layout>
            {error && <Error404 />}
            <div className="contenedor">
                <h1 css={css`
                    text-align: center;
                    margin-top: 5rem;
                `}>{nombre}</h1>
                <ContenedorProducto>
                    <div>
                        <img src={urlImage} alt="" />
                        <p>{description}</p>
                        {
                            usuario && <>
                                <h2>Agrega un comentario</h2>
                                <form>
                                    <Campo>
                                        <input
                                            type="text"
                                            name="mensaje"
                                        />
                                    </Campo>
                                    <InputSubmit
                                        type="submit"
                                        value="Agregar comentario"
                                    />
                                </form>
                            </>
                        }
                        <h2 css={css`
                            margin: 2rem 0;

                        `}>Comentarios</h2>
                        {comentarios?.map((comentario) => (
                            <li>
                                <p>{comentario.nombre}</p>
                                <p>Escrito por: {comentario.usuarioNombre}</p>
                            </li>
                        ))}
                    </div>
                    <aside>
                        <Boton
                            target="_blank"
                            bgColor="blue"
                            href={url}
                        >Visitar Url</Boton>

                        <p>Publicado por: {creador.nombre}</p>

                        <div css={css`
                            margin-top: 5rem;
                        `}>
                            <p css={css`
                            text-align: center;
                        `}>{votos} votos</p>
                            {usuario &&
                                <Boton>Votar</Boton>
                            }
                        </div>
                    </aside>
                </ContenedorProducto>
            </div>
        </Layout>
    );
}

export default Producto;