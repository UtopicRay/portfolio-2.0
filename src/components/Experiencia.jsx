import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiBootstrap,
  DiJavascript1,
} from "react-icons/di";
import NetFlix from "../assets/img/Netflix-Clon.webp";
export function Habilidades() {
  return (
    <div className="max-w-[1000px] grid grid-cols-2 mx-auto text-left gap-8 place-item-center">
      <div className='p-6'>
        <h2 className="my-2 font-bold">Experiencia</h2>
        <p className='mb-4'>
          Durante la universidad, participé en un equipo de desarrollo de
          software. Durante este período, las actividades que me fueron
          asignadas incluyeron la implementación de funcionalidades como la
          creación y validación de formularios, el manejo de información de
          bases de datos y la implementación de un sistema de recomendación
          utilizando PHP como lenguaje de programación. Sin embargo, no he
          tenido la oportunidad de trabajar fuera del entorno escolar, por lo
          que espero aprender y mejorar mis habilidades como programador.
        </p>
        <div className="md:flex flex-warp justify-center gap-4 text-6xl mb-8">
          <DiHtml5 className="text-orange-500 hover:scale-110 transition-all  duration-300"></DiHtml5>
          <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-300"></DiCss3>
          <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-300"></DiJavascript1>
          <DiReact className="text-blue-600 hover:scale-110 transition-all duration-300"></DiReact>
          <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-300"></DiBootstrap>
          <DiGit className="text-red-600 hover:scale-110 transition-all duration-300"></DiGit>
        </div>
      </div>
      <div className="relative group max-w-[600px]">
        <div class="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-500 to-[#FFDA78] blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="w-full p-4 bg-white relative bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={NetFlix}
            alt="foto del Clon de Netflix"
            className="rounded-lg md:max-w-[360px]"
          ></img>
        </div>
      </div>

      <div className="relative group">
        <div class="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-500 to-[#FFDA78] blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="w-full p-4 bg-white relative bg-opacity-10 backdrop-blur-lg rounded-lg ">
          <img
            src={NetFlix}
            alt="foto del Clon de Netflix"
            className="rounded-lg md:max-w-[360px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
