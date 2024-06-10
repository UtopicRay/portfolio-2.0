import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yen6efm", "template_7fiu3mq", form.current, {
        publicKey: "aKSBVKOiowvq4CCQk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      className="max-w-[1200px] mx-auto px-6 place-items-center"
      ref={form}
    >
      <h2>Comencemos a hablar!!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Su Nombre... "
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="from_email"
          required
        />
        <label>Message</label>
        <textarea name="message" />
        <input
          type="submit"
          className="w-full font-semibold text-xl bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300"
          value="Envie su mensaje"
        />
      </form>
    </section>
  );
}
