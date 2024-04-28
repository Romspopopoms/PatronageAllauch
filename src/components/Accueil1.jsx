import React from "react";
import { Link } from "react-router-dom";
import Group from "../assets/Group1.png"

const Accueil1 = () => {

return (

<div className="flex flex-col w-auto h-auto">
<img src={Group} alt="Group" className="w-full h-auto object-cover"/>
<div className="bg-secondary h-[130px] w-auto flex flew-row justify-center items-center gap-x-48">
    <h1 className="font font-lalezar text-4xl text-white">
    INSCRIVEZ VOS ENFANTS DÈS MAINTENANT
    </h1>
    <Link to="/KOAs">
    <div className="bg-primary rounded w-[314px] h-[112px] flex justify-center items-center">
        <div className="text-white font-lalezar text-4xl">Par ici</div>
    </div>
    </Link>

</div>
</div>
);
}

export default Accueil1