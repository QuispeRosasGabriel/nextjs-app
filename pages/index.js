import { useEffect, useState, useContext } from 'react';
import DetailsProduct from '../components/layouts/DetailsProduct';
import Layout from '../components/layouts/Layout'; 
import { FirebaseContext } from '../firebase';

const Home = () => {

  const [products, setProducts] = useState([]);
  const {firebase} = useContext(FirebaseContext);  

  useEffect(() => {
    const getProducts = () => {
      firebase.db.collection('productos').orderBy('creado', 'desc')
      .onSnapshot(manejarSnapshot)
    }
    getProducts();
  }, [])

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    setProducts(productos);
  }

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {
                products.map((product) => (
                  <DetailsProduct 
                    key={product.id}
                    product={product}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;