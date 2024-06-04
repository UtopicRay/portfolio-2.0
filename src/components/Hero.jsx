import { TypeAnimation } from "react-type-animation"
import { AiFillLinkedin,AiFillGithub,AiFillMessage } from "react-icons/ai"
import { DiHtml5,DiCss3,DiReact,DiJavascript,DiGit, DiBootstrap, DiJavascript1 } from "react-icons/di"
import { MdEmail } from "react-icons/md"
export function Hero(){
    return (
        <section className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0" id="home">
           <div className="grid grid-cols-2 col-span-5 p-8 glass">
            <p className="text-2xl md:text-4xl font-bold text-left">Hola, soy Ray Rendón <br></br>
            <TypeAnimation sequence={[
                    "Desarrollador Frontend"
                ]}
               wrapper="span" >
            </TypeAnimation>
            </p>
            <button className="mt-4 bg-color-primary py-2 px-4 text-white rounded-xl">
                Descargar CV
            </button>
            </div> 
            <div className="grid md:col-span-3 gap-6">
                <div className="text-5xl p-12 glass">
                    <p className="text-gray-200 text-xl font-bold text-center mb-4">Habilidades</p>
                    <div className="grid grid-cols-4 gap-y  -4 gap-x-5">
                         <DiHtml5 className="text-orange-500"></DiHtml5>
                         <DiCss3 className="text-blue-500"></DiCss3>
                         <DiJavascript1 className="text-yellow-500"></DiJavascript1>
                         <DiReact className="text-blue-600"></DiReact>
                         <DiBootstrap className="text-purple-700"></DiBootstrap>
                         <DiGit className="text-red-600"></DiGit>
                    </div>
                </div>
                <div className="text-6xl gap-4 flex justify-center items-center glass text-gray-600">
                   <AiFillGithub></AiFillGithub>
                   <AiFillLinkedin></AiFillLinkedin>
                   <MdEmail></MdEmail> 
                </div>
            </div>
        </section>
    )
}