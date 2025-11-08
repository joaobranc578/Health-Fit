import Topo from '../Components/Topo';
import Banner from '../Components/Banner';
import Categorias from '../Components/Categorias';
import Serviços from '../Components/Serviços';
import HeaderLinks from '../Components/HeaderLinks';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

function Home() {


  return (
    <>
    
    <Topo />
    <HeaderLinks />
    <div className='Espaço'></div>
    <Banner />
    <Serviços />
    <Categorias />
    <Footer />

    </>
  )
}

export default Home