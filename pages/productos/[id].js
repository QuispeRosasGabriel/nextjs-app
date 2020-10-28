import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import {FirebaseContext} from '../../firebase';

const Producto = () => {

    // state del componente 
    const [producto, setProducto] = useState(''),

    // Router para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;

    // pasando context
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        if(id) {
            const obtenerProducto = async () => {
                const productQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productQuery.get();
                setProducto(producto.data());
            }
            obtenerProducto();
        }
    }, [id])

    return ( 
    <h1>Desde producto xd {id}</h1>
     );
}
 
export default Producto;