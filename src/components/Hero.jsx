import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin, AiFillGithub, AiFillMessage } from "react-icons/ai";
import Avatar from "../assets/img/Avatar2.png";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiBootstrap,
  DiJavascript1,
} from "react-icons/di";
import { MdEmail } from "react-icons/md";
export function Hero() {
  return (
    <section
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 mb-16 mt-36"
      id="home"
    >
      <div className="grid grid-cols-2 col-span-5 p-8 glass">
        <div className="place-items-center">
          <img className="h-auto aspect-auto" src={Avatar}></img>
        </div>
        <div className="mx-2 flex justify-center items-start flex-col">
          <p className="text-2xl md:text-3xl font-bold text-left">
            Hola, soy Ray Rendón<br></br>
            <TypeAnimation
              sequence={[
                "Desarrollador Frontend",
                1000,
                "Ing. Ciencias Informáticas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            ></TypeAnimation>
          </p>
          <button className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300 mt-16">
            Descargar CV
          </button>
        </div>
      </div>

      <div className="grid md:col-span-3  gap-6">
        <div className="text-5xl md:p-12 p-6 glass w-full">
          <h2 className="font-bold text-center mb-4">
            Habilidades
          </h2>
          <div className="grid grid-cols-4 gap-y-4 gap-x-5">
            <DiHtml5 className="text-orange-500 hover:scale-110 transition-all duration-200"></DiHtml5>
            <DiCss3 className="text-blue-500 hover:scale-110 transition-all duration-200"></DiCss3>
            <DiJavascript1 className="text-yellow-500 hover:scale-110 transition-all duration-200"></DiJavascript1>
            <DiReact className="text-blue-600 hover:scale-110 transition-all duration-200"></DiReact>
            <DiBootstrap className="text-purple-700 hover:scale-110 transition-all duration-200"></DiBootstrap>
            <DiGit className="text-red-600 hover:scale-110 transition-all duration-200"></DiGit>
          </div>
        </div>
        <div className="text-5xl gap-4 flex justify-center items-center glass text-white p-2 ">
          <AiFillGithub className="hover:scale-110 transition-all duration-200"></AiFillGithub>
          <AiFillLinkedin className="hover:scale-110 transition-all duration-200"></AiFillLinkedin>
          <MdEmail className="hover:scale-110 transition-all duration-200"></MdEmail>
        </div>
      </div>
    </section>
  );
}
