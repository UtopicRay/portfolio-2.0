export function Contacto(){
    return(
        <section className="max-w-[1200px] grid grid-cols-2 mx-auto px-6 place-items-center">
            <div className="">
                <h3 className="text-left text-gray-200 text-3xl font-bold my-3 p-2">Listo para <span>Acción</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eveniet iusto voluptatibus provident quis repellendus voluptatum asperiores dolorem nobis quibusdam repudiandae eaque obcaecati error aspernatur harum, itaque natus laborum illo sed expedita. Pariatur voluptatum excepturi nostrum minima porro consequuntur quibusdam.</p>
            </div>
            <form method="post" action="endpoint" className="max-w-6xl p-5 md:p-12" id="form">
                <input type="text" placeholder="Su Nombre... " name="name" id="name"></input>
                <input type='email' placeholder="example@gmail.com" name="email" id="email"></input>
                <textarea placeholder="Envie su mensaje ..." cols={30} rows={4}
                name="text" id="text"></textarea>
                <button type="submit" className="w-full rounded-md text-gray-100 font-semibold text-xl bg-color-primary">
                    Envie su mensaje
                </button>
            </form>
        </section>
    )
}