import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Error404 from "../../components/layouts/404";
import { FirebaseContext } from '../../firebase';
import Layout from '../../components/layouts/Layout';

const Producto = () => {

    // state del componente 
    const [product, setProducto] = useState('');
    const [error, setError] = useState(false);
    // Router para obtener el id actual
    const router = useRouter();
    const { query: { id } } = router;

    // pasando context
    const { firebase } = useContext(FirebaseContext);

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

    return (
        <Layout>{error && <Error404 />}</Layout>
    );
}

export default Producto;