import React from "react";
import Photo1 from "../assets/Photo1.png"

const AccueilActu = () => {
    return (
        <div className="relative w-auto h-auto bg-white flex flex-col items-center">
        <div className="font-kalam font-bold text-accent text-5xl">Les actualités du Patronage</div>
        <img src={Photo1} alt="ImagePatro" className="mt-8 w-full h-auto object-cover"></img>
        <div className="absolute bottom-16 font-bold font-laila text-5xl text-white ">Du chant au Patronage</div>
        </div>
    )
}

export default AccueilActu