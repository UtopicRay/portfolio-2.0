import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Proyectos from "./components/Proyectos";
import  Experiencia from "./components/Experiencia";
import { Contacto } from "./components/Contacto";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <Navbar/>
      <main>
        <Hero></Hero>
        <section className="mt-20" id="about">
          <Experiencia />
        </section>
        <Proyectos />
        <Contacto></Contacto>
      </main>
     <Footer></Footer>
    </>
  );
}

export default App;
