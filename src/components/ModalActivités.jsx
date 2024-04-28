import React from "react";
import Image1Modal from "../assets/Modal1.png"
import Image2Modal from "../assets/Modal2.png"
import Image3Modal from "../assets/Modal3.png"
const ModalActivités = () => {
    return (
        <div className="absolute bottom-[-400px] left-10 flex flex-col h-[800px] w-[calc(100%-6rem)] bg-white gap-y-12 ">
            <h1 className="text-5xl font-bold font-kalam text-secondary py-8 text-center">Vacances</h1>
            <div className="flex flex-row justify-center items-center gap-x-16 ">
                <img src={Image1Modal} alt="Jeuxdenfants" className="h-auto w-auto object-cover" />
                <p className="text-center font-laila text-accent text-2xl">Faites vivres à vos enfants des vacances<br></br>
                inoubliables ! <br></br><br></br>

                    Des Jeux Olympiques au cinéma,<br></br>
                    en passant par la mythologie grec,<br></br>
                    vos enfants vivrons chaque semaines<br></br>
                    un thème différent pour rêver de grandes<br></br>
                    aventures !<br></br><br></br>

                    Inscription à la  journée de 7h45 à 18h15,<br></br> 
                    ou à la demi-journée.</p>
        </div>

        <div className="text-5xl font-bold font-kalam text-secondary py-16 text-center ">Les mercredis</div>
            <div className=" flex flex-row justify-center items-center gap-x-16 ">
                <p className="text-center font-laila text-accent text-2xl">
                Donnez à vos enfants de vivre <br></br>
                dans un monde à l’envers, une <br></br>
                grande enquête archéologique ou <br></br>
                encore une épopée à travers le désert.<br></br>
                Chaque thème dure sur une période<br></br>
                scolaire.<br></br><br></br>

                Aide aux devoirs et animations pour<br></br>
                chaque mercredis !<br></br><br></br>

                Inscription à la  journée de 7h45 à 19h15,<br></br>
                ou à la demi-journée.</p>
                <img src={Image2Modal} alt="Jeuxdenfants" className="h-auto w-auto object-cover" />
        </div>
        <h1 className="text-5xl font-bold font-kalam text-secondary py-16 text-center">Les soirs de la semaine</h1>
            <div className="flex flex-row justify-center items-center gap-x-16 ">
                <img src={Image3Modal} alt="Jeuxdenfants" className="h-auto w-auto object-cover" />
                <p className="text-center font-laila text-accent text-2xl">
                Chaque soirs de la semaine, un temps de<br></br>
                soutien scolaire est mis en place.<br></br>
                Des groupes de trois enfants et un adulte<br></br>
                sont faits pour permettre un accompagnement<br></br>
                personnalisé.<br></br>
                En plus de l’accompagnement, les enfants<br></br>
                apprendront à travailler en groupe comme en<br></br>
                autonomie.<br></br><br></br>

                Inscription à la soiree,<br></br>
                du lundi au vendredi de 15h à 19h15</p>
        </div>
        </div>
    )
}

export default ModalActivités