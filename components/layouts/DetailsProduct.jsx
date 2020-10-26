import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';

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
        <li>
            <div>
                <div>
                    <Imagen src={urlImage} alt="" />
                </div>
                <div>
                    <h1>{nombre}</h1>
                    <p>{description}</p>
                    <div>
                        <img src="" alt="" />
                        <p>{comentarios.length}</p>
                    </div>
                    <p>Publicado hace: {formatDistanceToNow(new Date(creado), 
                    {locale:es})}</p>
                </div>
            </div>

            <div>
                <div>
                    &#9650;
                </div>
                    <p>{votos}</p>
            </div>
        </li>
    );
}

export default DetailsProduct;