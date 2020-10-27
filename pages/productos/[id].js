import { useRouter } from "next/router";
import { useEffect } from "react";

const Producto = () => {

    // Router para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;

    useEffect(() => {
        if(id) {
            console.log();
        }
    }, [id])

    return ( 
    <h1>Desde producto xd {id}</h1>
     );
}
 
export default Producto;