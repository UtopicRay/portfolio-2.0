import React from "react";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

 function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 max-w-[1200px] place-items-center mx-auto mt-9">
      <div>
        <h2 className="text-gray-300 ">Ray Rendon</h2>
        <div className="flex gap-2">
          <LiaLinkedin className="text-gray-500 text-4xl hover:scale-125 transition-all duration-200"></LiaLinkedin>
          <LiaGithub className="text-gray-500 text-4xl hover:scale-125 transition-all duration-200"></LiaGithub>
        </div>
      </div>
      <div>
        <div className="flex  items-center">
          <MdEmail className="text-gray-500 text-4xl mx-2 hover:scale-125 transition-all duration-200"></MdEmail>
          <a className="text-white  hover:scale-110 transition-all duration-200  underline" href="mailto:rayrm2021@gmail.com?subject=Interesado%20en%20sus%20servicios">rayrm2021@gmail.com.</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;