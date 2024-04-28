import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import logo from "../assets/logo.png"
import Icon from "../assets/icon.png"

const Menu = [
    {
        name: "Accueil",
        href: "/"
    },
    {
        name: "Activités",
        href: "/activités"
    },
    {
        name: "Inscription",
        href: "/inscription"
    },
    {
        name: "Qui-sommes-nous?",
        href: "/Qui-sommes-nous?"
    },
    {
        name: "Faire un don",
        href: "/Faireundon"
    },
]


const Navbar = () => {
  return (
    <div className="flex w-full justify-between h-[100px] bg-primary">
     <div className="flex px-8 items-center">
        <img src={logo} alt="logo" className="h-16 w-16" />
        </div> 
        <div className="flex flex-row justify-center items-center gap-x-8">
        {Menu.map((item, index) => {
            return (
                <div className="text-center text-white font-bold font-kalam" key={index}>
                    <Link to={item.href} className="flex items-center justify-center w-full h-full cursor-pointer hover:underline hover:decoration-[#EA5863] hover:underline-offset-8">
                        {item.name}
                    </Link>
                    
                </div>
            )
        })}
        </div>
        <div className="flex flex-row justify-center items-center gap-x-4 px-8">
        
        <a
        href="https://www.instagram.com/patronageallauch?igsh=ZThrbGJ2MnBuM21l"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaInstagram className="text-white" />
        </a>


        <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FiFacebook className="text-white" />
        </a>
        <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img src={Icon} alt="logo" className="h-6 w-6" />
        </a>
        </div>
     </div>
  );
};

export default Navbar;