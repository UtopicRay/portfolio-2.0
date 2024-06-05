import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Proyectos from './components/Proyectos';
import {Habilidades} from './components/Habilidades';
import {Contacto} from  './components/Contacto';
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero></Hero>
        <Proyectos/>
        <Habilidades/>  
      </main>
      <footer>
        <Contacto></Contacto>
      </footer>
    </>
  )
}

export default App
