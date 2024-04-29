import React from "react";
import { Link } from "react-router-dom";
import Ellispe from "../assets/Ellipse 1.png"
import Ellispe2 from "../assets/Ellipse 2.png"
import Ellispe3 from "../assets/Ellipse 3.png"

const Accueil2 = () => {
    
return (
    <div className="flex flex-col w-auto h-auto xl:h-[800px] bg-white mt-4 xl:mt-0">
        <div className="h-1/4 w-auto flex justify-center items-center">
            <h1 className="font-kalam font-bold text-accent text-2xl text-center xl:text-5xl mt-4 xl:mt-0">Le Patronage au coeur de votre vie</h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-x-24 mt-4">
            <div className="flex flex-col justify-center items-center gap-y-4">
                <Link to="/activites">
            <img src={Ellispe} alt="Ellispe" className="h-48 w-48 xl:w-auto xl:h-auto object-cover
            cursor-pointer hover:border-accent hover:border-4 hover:rounded-full mt-4 xl:mt-0"/>
                </Link>
            <h2 className="font-kalam font-bold text-accent text-2xl xl:text-4xl text-center">Nos activités</h2>
            <p className="font-kalam font-light text-accent text-xl xl:text-2xl text-center">Découvrez les animations<br></br>
                et activités proposées au<br></br>
                Patronage</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <Link to="/Quisommesnous">
            <img src={Ellispe2} alt="Ellispe" className="h-48 w-48 xl:w-auto xl:h-auto object-cover cursor-pointer hover:border-accent hover:border-4 hover:rounded-full mt-8 xl:mt-0"/>
            </Link>
            <h2 className="font-kalam font-bold text-accent text-2xl xl:text-4xl text-center">Qui sommes-nous ?</h2>
            <p className="font-kalam font-light text-accent text-xl xl:text-2xl text-center">Découvrez le Patronage,<br></br>
            ses valeurs, ses objectifs<br></br>
            et son équipe</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <a href="https://www.helloasso.com/associations/patronage-d-allauch"
                target="_blank"
                rel="noopener noreferrer">
            <img src={Ellispe3} alt="Ellispe" className="h-48 w-48 xl:w-auto xl:h-auto object-cover cursor-pointer hover:border-accent hover:border-4 hover:rounded-full mt-8 xl:mt-0"/>
            </a>
            <h2 className="font-kalam font-bold text-accent text-2xl xl:text-4xl text-center">Faites un don</h2>
            <p className="font-kalam font-light text-accent text-xl xl:text-2xl text-center">Soutenez le Patronage<br></br>
            avec un donc ponctuel<br></br>
            ou régulier</p>
            </div>
        </div>
    </div>
)
}

export default Accueil2