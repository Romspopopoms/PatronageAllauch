import React from "react";
import { Link } from "react-router-dom";

const Recrutement3 = () => {

return (

<div className="flex flex-col w-screen xl:w-auto h-auto mt-4 xl:mt-12">
<div className="bg-secondary h-[110px] xl:h-[130px] w-screen flex flex-col xl:flex-row justify-center items-center gap-y-2 xl:gap-x-48">
    <h1 className="font font-lalezar text-center xl:text-4xl text-white">
    Vous êtes interessez ? Contactez-nous dès maintenant !
    </h1>
    <Link to="/contact">
    <div className="bg-primary rounded p-2 w-auto h-auto xl:w-[314px] xl:h-[112px] flex justify-center items-center">
        <div className="text-white font-lalezar xl:text-4xl">Contact par ici</div>
    </div>
    </Link>

</div>
</div>
);
}

export default Recrutement3