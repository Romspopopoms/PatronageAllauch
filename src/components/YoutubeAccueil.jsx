import React from "react";
import { Link } from "react-router-dom";

const YoutubeAccueil = () => {
    return (
        <div>
        <div className="relative bg-black h-[400px] w-auto mt-8 xl:mt-0">
            <div className="absolute bottom-48 left-4 xl:left-0 xl:right-0 font-laila font-extrabold text-center xl:text-5xl text-secondary">VIDEO YOUTUBE EN COURS DE CREATION</div>
            </div>
            <div className="bg-secondary h-[110px] xl:h-[130px] w-screen flex flex-col xl:flex-row justify-center items-center gap-y-2 xl:gap-x-48">
    <h1 className="font font-lalezar text-center xl:text-4xl text-white">
    S’IINVESTIR POUR LA JEUNESSE AU PATRONAGE
    </h1>
    <Link to="recrutement">
    <div className="bg-primary rounded p-2 w-auto h-auto xl:w-[314px] xl:h-[112px] flex justify-center items-center">
        <div className="text-white font-lalezar xl:text-4xl">Par ici</div>
    </div>
    </Link>

</div>

            

        </div>
    )
}

export default YoutubeAccueil