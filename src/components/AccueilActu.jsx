import React from "react";
import Photo1 from "../assets/Photo1.png"

const AccueilActu = () => {
    return (
        <div className="relative w-auto h-auto bg-white flex flex-col items-center xl:mt-16">
        <div className="font-kalam font-bold text-accent text-2xl xl:text-5xl text-center mt-12 xl:mt-0">Les actualités du Patronage</div>
        <img src={Photo1} alt="ImagePatro" className="mt-4 xl:mt-8 w-full h-auto object-cover"></img>
        <div className="absolute bottom-4 xl:bottom-16 font-bold font-laila text-2xl xl:text-5xl text-white ">Du chant au Patronage</div>
        </div>
    )
}

export default AccueilActu