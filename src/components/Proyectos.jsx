import React, { useState } from "react";
import VueCommerce from "../assets/img/VueCommerce.webp";
import Esland from "../assets/img/esland-clon.webp";
import NetFlix from "../assets/img/Netflix-Clon.webp";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { DiReact } from "react-icons/di";
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
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
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
      <ProjectCard
        title={proyectos[currentProject].name}
        imgUrl={proyectos[currentProject].img}
        description={proyectos[currentProject].description}
        skills={proyectos[currentProject].stack}
        previewUrl={proyectos[currentProject].link.site}
        gitUrl={proyectos[currentProject].link.github}
      ></ProjectCard>
    </section>
  );
}
