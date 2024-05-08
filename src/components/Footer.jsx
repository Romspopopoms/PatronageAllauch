import React from "react";
import { Link } from "react-router-dom";
import Logobleu from "../assets/logobleu.png"
import LogoVox from "../assets/LogoVox.png"

const Menu1 = [
    {
        name: "Activites",
        href: "/activites"
    },
    {
        name: "Nous Contacter",
        href: "/contact"
    },
    {
        name: "Newsletter",
        href: "/newsletter"
    }
]

const Footer = () => {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col xl:flex-row h-[396px] w-full bg-white justify-between items-center px-24 py-6 xl:py-0">
    <div className="flex flex-col">
        <img src={Logobleu} alt="Logo2" className="h-auto w-auto xl:w-[200px] xl:h-[100px] object-cover"/>
        {Menu1.map((item, index) => {
            return (
                <div className="text-center text-[#74A7BE] font-light font-laila xl:py-2" key={index}>
                    <Link to={item.href} className="flex items-center justify-center w-full h-full cursor-pointer hover:text-accent">
                    {item.name}
                    </Link>            
        </div>
        )
    })}
    </div>
    <div className=" flex-col justify-center items-center xl:gap-y-4 hidden xl:flex">
        <h1 className="text-[#74A7BE] font-laila text-4xl">Inscriptions en ligne</h1>
        <a
        href="/https://patronage-allauch.holi-d.fr/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className=" flex justify-center items-center w-[297px] h-[71px] bg-primary shadow rounded-sm">
        <div className="text-white font-laila text-3xl">Par ici</div>
        </div>
        </a>
    </div>
    <div className="text-center font-laila text-[#74A7BE]">
        <div className="text-2xl xl:text-3xl underline">Contact</div>
        <p className="font-light">Patronage d’Allauch<br></br>
        495 Avenue Leï Rima,<br></br>
        13190 Allauch<br></br>
        <br></br><br></br>
        06 28 92 09 98<br></br>
        patronageallauch@gmail.com</p>
    </div>
    </div>
    <div className="w-auto h-auto bg-primary flex flex-col justify-center items-center">
        <div className="text-center text-light font-laila text-white mt-4">2024 Patronage Saint Laurent d’Allauch - Conception et rèalisation :</div>
        <img src={LogoVox} alt="Logo_VoxUnity" className="size-auto object-cover"/>
    </div>
    </div>
  );
};

export default Footer;