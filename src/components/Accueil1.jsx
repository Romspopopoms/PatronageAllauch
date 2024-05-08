import React from "react";
import Group from "../assets/Group1.png"

const Accueil1 = () => {

return (

<div className="flex flex-col w-full xl:w-auto  h-auto">
<img src={Group} alt="Group" className="w-full h-auto object-cover"/>
<div className="bg-secondary h-[110px] xl:h-[130px] w-full flex flex-col xl:flex-row justify-center items-center gap-y-2 xl:gap-x-48">
    <h1 className="font font-lalezar text-center xl:text-4xl text-white">
    INSCRIVEZ VOS ENFANTS DÈS MAINTENANT
    </h1>
    <a href="https://patronage-allauch.holi-d.fr/" target="_blank"
    rel="noopener noreferrer">
    <div className="bg-primary rounded p-2 w-auto h-auto xl:w-[314px] xl:h-[112px] flex justify-center items-center">
        <div className="text-white font-lalezar xl:text-4xl">Par ici</div>
    </div>
    </a>

</div>
</div>
);
}

export default Accueil1