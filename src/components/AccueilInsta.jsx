import React from "react";
import { Link } from "react-router-dom";
import Insta from "../assets/Instagram.png"
import { TbCircleArrowDownRightFilled } from "react-icons/tb";

const Accueil4 = () => {
   return (
        <div className="relative w-auto h-auto bg-white flex mt-20 justify-center items-center gap-x-24 ">
            <div className="flex flex-col">
            <TbCircleArrowDownRightFilled className="absolute top-0 right-[52%] h-14 w-14 text-accent "/>
            <TbCircleArrowDownRightFilled className="absolute top-14 right-[48%] h-14 w-14 text-secondary "/>

            <div className="flex flex-col gap-y-8">
                <div className="text-5xl text-secondary font-kalam font-bold text-center">Post Instagram</div>
                <p className="font-laila text-accent text-2xl font-bold text-center">Retrouvez toutes nos publications<br></br>
                    Instagram. <br></br>
                    Photos et story de nos meilleurs <br></br>
                    moments !</p>
            </div>
            </div>
            <Link to="">
            <img src={Insta} alt="Instagram" className="h-auto w-auto object-cover" />
            </Link>
        </div>
    )
}

export default Accueil4