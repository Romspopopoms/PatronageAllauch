import React from "react";
import Banniere from "../assets/BanniereAct.png"
import ModalActivités from "./ModalActivités";

const Activités1 = () => {
    return (
        <div className="relative flex flex-col h-auto w-auto">
            <img src={Banniere} alt="bannièreActivités" className="h-auto w-auto object-cover" />
            <ModalActivités />
        </div>
    )
}

export default Activités1