import { useState } from "react"

export function Navbar(){
    const [nav,setNav]=useState();
    return(
        <header className="w-[60%] flex justify-between items-center">
            <h1>Ray </h1>
            <ul className="flex gap-2">
                <li>Sobre Mí</li>
                <li>Experiencia</li>
                <li>Proyectos</li>
            </ul>
        </header>
    )
}