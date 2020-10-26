import { useEffect, useState, useContext } from 'react';
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
        <h1>Inicio</h1>       
      </Layout>
    </div>
  )
}

export default Home;