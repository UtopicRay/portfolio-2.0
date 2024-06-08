import React, { useState } from "react";
import LaVelada from "../assets/img/Clon-LaVelada.webp";
import Esland from "../assets/img/esland-clon.webp";
import NetFlix from "../assets/img/Netflix-Clon.webp";
import { DiReact } from "react-icons/di";
export default function Proyectos() {
  const proyectos = [
    {
      name: "Clon de la Velado 3",
      description: "Clon de la landing page la Velada del Año 3.",
      img: LaVelada,
      link: [
        {
          site: "https://clon-la-velada-e68ehyfz7-utopicrays-projects.vercel.app/",
          github: "https://github.com/UtopicRay/Clon-la-VeladaIII",
        },
      ],
      stack: [`${<DiReact></DiReact>}`],
    },
    {
      name: "Clon de los Premios Esland",
      description:
        "Clon del sitio de la segunda edición de los premios esland. Dicho clon corresponde con la versión del sitio correspondiente a enero de 2024.",
      img: Esland,
      link: [
        {
          site: "https://esland-clon.vercel.app/",
          github: "https://github.com/UtopicRay/esland-clon",
        },
      ],
      stack: [],
    },
    {
      name: "Clon de Netflix",
      description:
        "Proyecto basada en Netflix como plataforma de audiovisuales. Cuenta con servicio de autenticación y la información de la peliculas es gracias al consumo de la api de 'themoviedb.org'. Proyecto propio.",
      img: NetFlix,
      link: [
        {
          site: "https://mi-clon-de-netflix.vercel.app/",
          github: "https://github.com/UtopicRay/Mi-clon-de-Netflix",
        },
      ],
      stack: [],
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <section
      className="my-24 max-w-[1200px] mx-auto grid grid-cols-8 gap-6"
      id="proyectos"
    >
      <div className="relative z-10 col-span-3 grid place-items-center grid-cols-1">
        <p className="text-gray-200 font-bold text-4xl">
          Seleccione el Proyecto
        </p>
        <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl text-left">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`cursor-pointer text-gray-300 ${
                currentProject === index ? "active-project" : ""
              }`}
              onClick={() => setCurrentProject(index)}
            >
              {proyecto.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 glass w-full col-span-5 max-w-[600px] mx-auto">
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
          <div className="flex justify-between items-center">
            <div className="space-x-4 ">
            <a href={proyectos[currentProject].link.site} className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300">
              Visitar
            </a>
            <a href={proyectos[currentProject].link.github} className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300">
            Código
            </a>
            </div>
            <div>
              {proyectos[currentProject].stack?.map((stack,index)=>{
                <img key={index} src={stack}></img>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
