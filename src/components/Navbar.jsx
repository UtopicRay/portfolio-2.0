import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <header className="fixed top-0 p-5 w-full flex flex-wrap bg-white bg-opacity-20 backdrop-blur-2xl text-[#F9E8C9] md:justify-center items-center z-10 justify-end">
      <ul className="md:flex gap-2 [&&>li]:p-5 hidden text-white font-bold text-xl">
        <li>
          <Link to="/about"> Sobre Mí</Link>
        </li>
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li>
          <Link to="/skill">Habilidades</Link>
        </li>
      </ul>
      <button className="md:block hidden bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300">
        <Link to='/contact' className='text-white font-bold'>Contact</Link>
      </button>
      <div className="z-40 block md:hidden j" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
        <ul className={nav?`text-gray-300 text-left text-xl [&&>li]:p-5 fixed left-0 top-0 w-[60%] bg-black h-full border-r border-r-gray-900 ease-in-out duration-500`:" text-left fixed left-[-100%] ease-in-out duration-500 top-0 h-full [&&>li]:p-5 w-[60%]"}>
          <h1 className="ml-2 text-3xl font-bold ">Ray</h1>
          <li>
            <Link to="/about"> Sobre Mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/skill">Habilidades</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </header>
  );
}
