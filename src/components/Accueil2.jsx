import React from "react";
import Ellispe from "../assets/Ellipse 1.png"
import Ellispe2 from "../assets/Ellipse 2.png"
import Ellispe3 from "../assets/Ellipse 3.png"

const Accueil2 = () => {
    
return (
    <div className="flex flex-col w-auto h-[800px] bg-white">
        <div className="h-1/4 w-auto flex justify-center items-center">
            <h1 className="font-kalam font-bold text-accent text-5xl">Le Patronage au coeur de votre vie</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-24 mt-4">
            <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={Ellispe} alt="Ellispe" className="w-auto h-auto object-cover"/>
            <h2 className="font-kalam font-bold text-accent text-4xl text-center">Nos activités</h2>
            <p className="font-kalam font-light text-accent text-2xl text-center">Découvrez les animations<br></br>
                et activités proposées au<br></br>
                Patronage</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={Ellispe2} alt="Ellispe" className="w-auto h-auto object-cover"/>
            <h2 className="font-kalam font-bold text-accent text-4xl text-center">Qui sommes-nous ?</h2>
            <p className="font-kalam font-light text-accent text-2xl text-center">Découvrez le Patronage,<br></br>
            ses valeurs, ses objectifs<br></br>
            et son équipe</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={Ellispe3} alt="Ellispe" className="w-auto h-auto object-cover"/>
            <h2 className="font-kalam font-bold text-accent text-4xl text-center">Faites un don</h2>
            <p className="font-kalam font-light text-accent text-2xl text-center">Soutenez le Patronage<br></br>
            avec un donc ponctuel<br></br>
            ou régulier</p>
            </div>
        </div>
    </div>
)
}

export default Accueil2