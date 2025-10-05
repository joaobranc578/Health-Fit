import Topo from '../Components/Topo';
import Banner from '../Components/Banner';
import Categorias from '../Components/Categorias';
import Serviços from '../Components/Serviços';
import Link from '../Components/Link';
import Footer from '../Components/Footer';

function Home() {


  return (
    <>
    
    <Topo />
    <Link />
    <div className='Espaço'></div>
    <Banner />
    <Serviços />
    <Categorias />
    <Footer />

    </>
  )
}

export default Home