import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const Producto = styled.li`
    padding: 4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e1e1e1;
`;

const DecripcionProducto = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template.columns: 1fr 3fr;
    column-gap: 2rem;
`;

const Titulo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    
    :hover {
        cursor: pointer;
    }
`;

const TextoDescripcion = styled.p`
    font-size:1.6rem;
    margin: 0;
    color: #888;
`;

const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }

    img {
        width: 2rem;
        margin-right: 2rem;
    }

    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;

    }
`;

const Imagen = styled.img`
    width: 200px;
`

const DetailsProduct = ({ product }) => {

    const { id,
        comentarios,
        creado,
        description,
        votos,
        empresa,
        nombre,
        url,
        urlImage } = product

    return (
        <Producto>
            <DecripcionProducto>
                <div>
                    <Imagen src={urlImage} alt="" />
                </div>
                <div>
                    <Titulo>{nombre}</Titulo>
                    <TextoDescripcion>{description}</TextoDescripcion>
                    <Comentarios>
                        <div>
                            <img src="" alt="" />
                            <p>{comentarios.length}</p>
                        </div>
                    </Comentarios>
                    <p>Publicado hace: {formatDistanceToNow(new Date(creado),
                        { locale: es })}</p>
                </div>
            </DecripcionProducto>

            <div>
                <div>
                    &#9650;
                </div>
                <p>{votos}</p>
            </div>
        </Producto>
    );
}

export default DetailsProduct;