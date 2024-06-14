import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin, AiFillGithub, AiFillMessage } from "react-icons/ai";
import Avatar from "../assets/img/Avatar2.webp";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiBootstrap,
  DiJavascript1,
  DiPhp,
} from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { FaVuejs } from "react-icons/fa";
import { SiAstro, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
export function Hero() {
  return (
    <section
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 mb-16 h-auto md:h-screen place-items-center"
      id="about"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 md:col-span-5 col-span-8 p-8 glass">
        <div className="place-items-center">
          <img className="max-w-full h-auto aspect-auto" src={Avatar} alt="imagen de Avatar"></img>
        </div>
        <div className="mx-2 flex justify-center items-start flex-col">
          <p className="text-xl md:text-3xl font-bold text-left">
            Hola, soy Ray Rendón<br></br>
            <span className="text-2xl font-bold text-left">
              <TypeAnimation
                sequence={[
                  "Desarrollador FullStack Jr.",
                  1000,
                  "Ing. Ciencias Informáticas",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              ></TypeAnimation>
            </span>
          </p>
          <a href="/document/CV.pdf" download="Ray Rendón Mesa Currículum.pdf">
            <button className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300 mt-16">
              Descargar CV
            </button>
          </a>
          <div className="flex md:justify-center justify-start items-center mt-4">
            <a
              className="text-white  hover:scale-110 transition-all duration-200 underline"
              href="mailto:rayrm2021@gmail.com?subject=Interesado%20en%20sus%20servicios"
            >
              rayrm2021@gmail.com
            </a>
            <MdEmail className="text-gray-500 text-2xl mx-2 hover:scale-125 transition-all duration-300"></MdEmail>
          </div>
        </div>
      </div>

      <div className="grid md:col-span-3 col-span-8  gap-6">
        <div className="text-5xl md:p-12 p-6 glass w-full ">
          <h2 className="font-bold text-center mb-4">Habilidades</h2>
          <div className="grid grid-cols-4 gap-y-4 gap-x-5 ">
            <DiHtml5 className="text-orange-500 hover:scale-110 transition-all duration-200"></DiHtml5>
            <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-200"></DiCss3>
            <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-200"></DiJavascript1>
            <DiReact className="text-blue-600 hover:scale-110 transition-all duration-200"></DiReact>
            <FaVuejs className="text-green-500 hover:scale-110 transition-all duration-200"></FaVuejs>
            <SiAstro className="text-orange-500 text-4xl hover:scale-110 transition-all duration-200" />
            <SiTailwindcss className="text-blue-300 hover:scale-110 transition-all duration-200"></SiTailwindcss>
            <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-200"></DiBootstrap>
            <DiGit className="text-red-600 hover:scale-110 transition-all duration-200"></DiGit>
            <DiPhp className="text-gray-300 hover:scale-110 transition-all duration-200"></DiPhp>
            <SiPostgresql className="text-blue-700 hover:scale-110 transition-all duration-200"></SiPostgresql>
            <RiFirebaseFill className="text-yellow-300 hover:scale-110 transition-all duration-200"></RiFirebaseFill>
          </div>
        </div>
        <div className="text-5xl gap-4 flex justify-center items-center glass text-white p-2 ">
          <AiFillGithub className="hover:scale-110 transition-all duration-200"></AiFillGithub>
          <AiFillLinkedin className="hover:scale-110 transition-all duration-200"></AiFillLinkedin>
        </div>
      </div>
    </section>
  );
}
