import React, { useState,useRef, useEffect } from "react";
import VueCommerce from "../assets/img/VueCommerce.webp";
import Esland from "../assets/img/esland-clon.webp";
import NetFlix from "../assets/img/Netflix-Clon.webp";
import Acortador from "../assets/img/Acortador.webp";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { DiReact,DiPhp } from "react-icons/di";
import { SiAstro, SiVuetify } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
export default function Proyectos() {
  const proyectos = [
    {
      name: "VueCommerce",
      description:
        "Proyecto basado en un ecommerce. Cuenta con la funcionalidad de añadir a al carrito de la compra, asi como buscar productos y ver los detalles de los mismos. La información de los productos es gracias al consumo de la api de 'dummyjson.com'. Proyecto propio.",
      img: VueCommerce,
      link: {
        site: "https://vuetify-ecommerce.vercel.app/",
        github: "https://github.com/UtopicRay/Clon-la-VeladaIII",
      },

      stack: [
        <FaVuejs className=" text-green-500 text-4xl hover:scale-110 transition-all duration-200" />,
        <SiVuetify className=" text-blue-500 text-4xl hover:scale-110 transition-all duration-200" />,
      ],
    },
    {
      name: "Clon de los Premios Esland",
      description:
        "Clon del sitio de la segunda edición de los premios esland. Dicho clon corresponde con la versión del sitio correspondiente a enero de 2024.",
      img: Esland,
      link: {
        site: "https://esland-clon.vercel.app/",
        github: "https://github.com/UtopicRay/esland-clon",
      },
      stack: [
        <SiAstro className="text-orange-500 text-4xl hover:scale-110 transition-all duration-200" />,
        <DiReact className="text-4xl text-blue-600 hover:scale-110 transition-all duration-200" />,
        <RiTailwindCssFill className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200" />,
      ],
    },
    {
      name: "Clon de Netflix",
      description:
        "Proyecto basada en Netflix como plataforma de audiovisuales. Cuenta con servicio de autenticación y la información de la películas es gracias al consumo de la api de 'themoviedb.org'. Proyecto propio.",
      img: NetFlix,
      link: {
        site: "https://mi-clon-de-netflix.vercel.app/",
        github: "https://github.com/UtopicRay/Mi-clon-de-Netflix",
      },
      stack: [
        <DiReact className="text-4xl text-blue-600 hover:scale-110 transition-all duration-200" />,
        <RiTailwindCssFill className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200" />,
        <RiFirebaseFill className="text-4xl text-yellow-400 hover:scale-110 transition-all duration-200"></RiFirebaseFill>,
      ],
    }, {
      name: "Acortador de URL y Generador de QR",
      description:
        "Servicio de Generador de QR y acortador de URL. Proyecto propio.",
      img: Acortador,
      link: {
        site: "https://shorturlqr.000webhostapp.com/",
        github: "https://github.com/UtopicRay/Acortador-Url-Generador-QR",
      },
      stack: [
        <DiPhp className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200"></DiPhp>
      ],
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  const style=useRef()
  useEffect(()=>{
    style.current.classList.add("animate-fade-left")
    setTimeout(()=>{
      style.current.classList.remove("animate-fade-left")
    },501)
  },[currentProject])
  return (
    <section
      className="my-24 max-w-[1200px] mx-auto grid md:grid-cols-8 grid-cols-2 gap-6"
      id="projects"
    >
      <div className="relative col-span-3 grid place-items-center grid-cols-1">
        <h2 className=" text-4xl font-bold ">Proyecto</h2>
        <ul className="ml-6 flex  md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl text-left">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`cursor-pointer text-gray-300 md:text-2xl text-sm ${
                currentProject === index ? "active-project" : "list-item"
              }`}
              onClick={() => setCurrentProject(index)}
            >
              {proyecto.name}
            </li>
          ))}
        </ul>
      </div>
      <div className=" glass w-full col-span-5 max-w-[600px] mx-auto hover:scale-105 duration-200 transition-all place-content-end" ref={style}>
        <div className="w-full h-auto">
          <img
            src={proyectos[currentProject].img}
            alt={`imagen de ${proyectos[currentProject].name}`}
            className="w-full h-full object-cover rounded-lg mb-4"
          ></img>
        </div>
        <div className="p-6">
          <p className="text-gray-200 my-4 text-left">
            {proyectos[currentProject].description}
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <div className="space-x-4 mt-4 md:mt-0 ">
              <a
                href={proyectos[currentProject].link.site}
                className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300"
              >
                Visitar
              </a>
              <a
                className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300"
              href={proyectos[currentProject].link.github}
              >
                Código
              </a>
            </div>
            <div className="flex mt-4 justify-start items-start ">
              {proyectos[currentProject].stack?.map((skill, index) => (
                <div className="" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
