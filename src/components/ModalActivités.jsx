import React from "react";
import activite1 from "../assets/Activite1.png"
import activite2 from "../assets/Activite2.png"
import activite3 from "../assets/Activite3.png"
import activite4 from "../assets/Activite4.png"

const ModalActivités = () => {
    return (
        <div className="xl:absolute xl:bottom-[-400px] xl:right-40 flex flex-col xl:h-[800px] xl:w-[calc(100%-16rem)] h-auto w-full bg-white xl:gap-y-12  ">
            <h1 className="text-5xl font-bold font-kalam text-secondary py-8 text-center">Vacances</h1>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-x-16 ">
                <img src={activite1} alt="Jeuxdenfants" className="h-auto w-auto object-cover" />
                <p className="text-center font-laila text-accent text-xl xl:text-2xl mt-4">Faites vivres a vos enfants des vacances<br></br>
                inoubliables ! <br></br><br></br>

                    Des Jeux Olympiques au cinèma,<br></br>
                    en passant par la mythologie grec,<br></br>
                    vos enfants vivrons chaque semaines<br></br>
                    un thème diffèrent pour rêver de grandes<br></br>
                    aventures !<br></br><br></br>

                    Inscription a la  journèe de 7h45 a 18h15,<br></br> 
                    ou a la demi-journèe.</p>
        </div>

        <div className="text-5xl font-bold font-kalam text-secondary py-8 xl:py-16 text-center ">Les mercredis</div>
            <div className=" flex flex-col xl:flex-row justify-center items-center gap-x-16 ">
            <img src={activite2} alt="Jeuxdenfants" className="h-auto w-auto object-cover xl:hidden" />
                <p className="text-center font-laila text-accent text-xl xl:text-2xl mt-4">
                Donnez a vos enfants de vivre <br></br>
                dans un monde a l’envers, une <br></br>
                grande enquête archèologique ou <br></br>
                encore une èpopèe a travers le dèsert.<br></br>
                Chaque théme dure sur une pèriode<br></br>
                scolaire.<br></br><br></br>

                Aide aux devoirs et animations pour<br></br>
                chaque mercredis !<br></br><br></br>

                Inscription a la  journèe de 7h45 a 19h15,<br></br>
                ou a la demi-journèe.</p>
                <img src={activite2} alt="Jeuxdenfants" className="h-auto w-auto object-cover hidden xl:block" />
        </div>
        <h1 className="text-5xl font-bold font-kalam text-secondary py-8 xl:py-16 text-center">Les soirs de la semaine</h1>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-x-16 ">
                <img src={activite3} alt="Jeuxdenfants" className="h-auto w-auto object-cover" />
                <p className="text-center font-laila text-accent text-xl xl:text-2xl mt-4">
                Chaque soirs de la semaine, un temps de<br></br>
                soutien scolaire est mis en place.<br></br>
                Des groupes de trois enfants et un adulte<br></br>
                sont faits pour permettre un accompagnement<br></br>
                personnalisè.<br></br>
                En plus de l’accompagnement, les enfants<br></br>
                apprendront à travailler en groupe comme en<br></br>
                autonomie.<br></br><br></br>

                Inscription à la soirèe,<br></br>
                du lundi au vendredi de 15h à 19h15</p>
        </div>
        </div>
    )
}

export default ModalActivités