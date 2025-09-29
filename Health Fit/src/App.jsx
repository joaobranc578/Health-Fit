import './App.css'
import Topo from './Components/Topo'
import Link from './Components/Link'
import Banner from './Components/Banner'
import Serviços from './Components/Serviços'
import Categorias from './Components/Categorias'
import Footer from './Components/Footer'

function App() {


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

export default App
