import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiBootstrap,
  DiJavascript1,
  DiPhp,
} from "react-icons/di";
import Programador from "../assets/img/Programador.gif";
import { SiPostgresql, SiVuetify } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
function Experiencia() {
  return (
    <div
      className="max-w-[1200px] grid md:grid-cols-2 grid-cols-1 mx-auto text-left gap-8 mb-40"
      id="experiencia"
    >
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            PROGRAMADOR WEB
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Ministerio de Relaciones Exteriores, 2024-Actualidad
          </time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Encargado de la creación de aplicaciones web escalables y de alto
            rendimiento utilizando tecnologías frontend como son Vue.js y
            Vuetify. Especializado en el desarrollo de interfaces de usuario
            intuitivas y responsivas para diversos servicios empresariales.
          </p>
          <div className="flex flex-warp  gap-4 text-4xl mb-8">
            <p class="text-blue-500">Tech stack:</p>
            <DiHtml5 className="text-orange-500 hover:scale-110 transition-all  duration-300"></DiHtml5>
            <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-300"></DiCss3>
            <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-300"></DiJavascript1>
            <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-300"></DiBootstrap>
            <DiGit className="text-red-600 hover:scale-110 transition-all duration-300"></DiGit>
            <FaVuejs className=" text-green-500  hover:scale-110 transition-all duration-300" />
            <SiVuetify className=" text-blue-500 hover:scale-110 transition-all duration-300" />
          </div>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            PRACTICANTE DE DESARROLLO
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Universidad de Ciencias Informática, 2021 -2023
          </time>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            En el centro SeoWebMas asociado a la universidad, me especialice en
            la implementación de vistas, clases y funcionalidades en bases de
            datos. Durante ese periodo desarrolle una herramienta de búsqueda
            que mejoro los productos recomendados a los clientes mejorando así
            su experiencia.
          </p>
          <div className="flex flex-warp  gap-4 text-4xl mb-8">
            <p class="text-blue-500">Tech stack:</p>
            <DiHtml5 className="text-orange-500 hover:scale-110 transition-all  duration-300"></DiHtml5>
            <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-300"></DiCss3>
            <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-300"></DiJavascript1>
            <DiReact className="text-blue-600 hover:scale-110 transition-all duration-300"></DiReact>
            <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-300"></DiBootstrap>
            <DiGit className="text-red-600 hover:scale-110 transition-all duration-300"></DiGit>
            <DiPhp className="text-gray-300 hover:scale-110 transition-all duration-200"></DiPhp>
            <SiPostgresql className="text-blue-700 hover:scale-110 transition-all duration-200"></SiPostgresql>
          </div>
        </li>
      </ol>
      <div className="relative group">
        <div className="absolute -inset-1 place-items-center  w-full bg-gradient-to-r from-purple-100 to-orange-500 rounded-lg backdrop-blur-lg blur opacity-25 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="relative p-4 h-full bg-white bg-opacity-25 backdrop-blur-lg rounded-lg">
          <img
            className="h-full rounded-lg"
            src={Programador}
            alt="foto de proyecto"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Experiencia;
