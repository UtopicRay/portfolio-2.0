import React from 'react'

export default function ProjectCard({title, description, imgUrl, gitUrl, previewUrl,skills}) {
  return (
    <div className=" glass w-full col-span-5 max-w-[600px] mx-auto hover:scale-105 duration-200 transition-all animate-fade-left">
        <div className="w-full h-auto">
          <img
            src={imgUrl}
            alt={`imagen de ${title}`}
            className="w-full h-full object-cover rounded-lg mb-4"
          ></img>
        </div>
        <div className="p-6">
          <p className="text-gray-200 my-4 text-left">
            {description}
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <div className="space-x-4 mt-4 md:mt-0 ">
              <a
                href={previewUrl}
                className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300"
              >
                Visitar
              </a>
              <a
                className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300"
              href={gitUrl}
              >
                Código
              </a>
            </div>
            <div className="flex mt-4 justify-start items-start ">
              {skills?.map((skill, index) => (
                <div className="" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
