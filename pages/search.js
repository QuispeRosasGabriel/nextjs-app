import Layout from '../components/layouts/Layout'; 
import {useRouter} from 'next/router';

const Search = () => {

  const router = useRouter();
  const {query: {q}} = router; 

  return (
    <div>
      <Layout>
        <h1>Inicio</h1>       
      </Layout>
    </div>
  )
}

export default Search; 