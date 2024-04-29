import React from "react";
import Banniere2 from "../assets/BanniereInscr.png"
import Quisommesnous1 from "../components/Quisommesnous1";
import Quisommesnous2 from "../components/Quisommesnous2";
import Footer from "../components/Footer"   

const Quisommesnous = () => {
    return (
        <div className="h-auto w-auto flex flex-col gap-y-12">
            <img src={Banniere2} alt="banniere" className="w-auto h-auto object-cover" />
            <Quisommesnous2 />
            <Quisommesnous1 />
            <Footer />
        </div>
    )
}

export default Quisommesnous