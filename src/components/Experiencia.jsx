import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiBootstrap,
  DiJavascript1,
  DiPhp,
} from "react-icons/di";
import NetFlix from "../assets/img/Netflix-Clon.webp";
import { SiPostgresql } from "react-icons/si";
export function Habilidades() {
  return (
    <div className="max-w-[1200px] grid md:grid-cols-2 grid-cols-1 mx-auto text-left gap-8 mb-40" id="experiencia">
      <div className='p-6'>
        <h2 className="my-2 font-bold">Experiencia</h2>
        <p className='my-4'>
          Durante la universidad, participé en un equipo de desarrollo de
          software. Durante este período, las actividades que me fueron
          asignadas incluyeron la implementación de funcionalidades como la
          creación de API Rest, validación de formularios, el manejo de información de
          bases de datos y la implementación de un sistema de recomendación
          utilizando PHP como lenguaje de programación. Sin embargo, no he
          tenido la oportunidad de trabajar fuera del entorno escolar, por lo
          que espero seguir aprendiendo y mejorando mis habilidades como programador.
        </p>
        <div className="flex flex-warp justify-center gap-4 text-6xl mb-8">
          <DiHtml5 className="text-orange-500 hover:scale-110 transition-all  duration-300"></DiHtml5>
          <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-300"></DiCss3>
          <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-300"></DiJavascript1>
          <DiReact className="text-blue-600 hover:scale-110 transition-all duration-300"></DiReact>
          <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-300"></DiBootstrap>
          <DiGit className="text-red-600 hover:scale-110 transition-all duration-300"></DiGit>
          <DiPhp className="text-gray-300 hover:scale-110 transition-all duration-200"></DiPhp>
          <SiPostgresql className="text-blue-700 hover:scale-110 transition-all duration-200"></SiPostgresql>
        </div>
      </div>
      <div className="relative group">
      <div className="absolute -inset-1 place-items-center  w-full bg-gradient-to-r from-purple-100 to-orange-500 rounded-lg backdrop-blur-lg blur opacity-25 group-hover:opacity-100 transition-all duration-300">
      </div>
        <div className="relative p-4 h-full bg-white bg-opacity-25 backdrop-blur-lg rounded-lg">
        <img className="h-full rounded-lg" src={NetFlix} alt="foto de proyecto"></img>
        </div>
      </div>
    </div>
  );
}
