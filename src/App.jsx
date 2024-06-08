import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Proyectos from "./components/Proyectos";
import { Habilidades } from "./components/Experiencia";
import { Contacto } from "./components/Contacto";
function App() {
  return (
    <>
      <div class="fixed left-0 top-0 -z-10 h-full w-full">
        <div class="absolute h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <Navbar />
      <main>
        <Hero></Hero>
        <section className="mt-20" id="about">
          <Habilidades />
        </section>
        <Proyectos />
        <Contacto></Contacto>
      </main>
    </>
  );
}

export default App;
