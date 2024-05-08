import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import logo from '../assets/logo.png';
import Icon from '../assets/icon.png';

const Menu = [
  {
    name: 'Accueil',
    href: '/'
  },
  {
    name: 'Activités',
    href: '/activites'
  },
  {
    name: 'Inscription',
    href: 'https://patronage-allauch.holi-d.fr/'
  },
  {
    name: 'Qui-sommes-nous?',
    href: '/Quisommesnous'
  },
  {
    name: 'Recrutement',
    href: '/recrutement'
  },
  //{
    //name: 'Nos News',
   // href: '/nosnews'
 // },
  {
    name: 'Faire un don',
    href: 'https://www.helloasso.com/associations/patronage-d-allauch' 
  },
  
];

const Navbar = () => {
  const location = useLocation();

  const isLinkActive = (href) => {
    // On utilise la méthode startsWith pour vérifier si le lien est interne ou externe
    return !href.startsWith('http') && location.pathname === href;
  };

  return (
    <div className="flex w-full justify-between items-center h-[100px] bg-primary">
      <div className="flex xl:px-8">
        <img src={logo} alt="logo" className="h-16 w-16" />
      </div>
      <div className="flex flex-row items-center gap-x-8">
        {Menu.map((item, index) => (
          <div className="text-center text-white font-bold font-kalam" key={index}>
            {item.href.startsWith('http') ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full cursor-pointer hover:underline hover:decoration-[#EA5863] hover:underline-offset-8"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className={`flex items-center justify-center w-full h-full cursor-pointer 
                  ${isLinkActive(item.href) ? 'underline decoration-[#EA5863] underline-offset-8' : 'hover:underline hover:decoration-[#EA5863] hover:underline-offset-8'}`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-4 px-8">
        <a
          href="https://www.instagram.com/patronageallauch?igsh=ZThrbGJ2MnBuM21l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white" />
        </a>
        
        <a href="https://www.facebook.com/profile.php?id=100013825624457" target="_blank" rel="noopener noreferrer">
          <FiFacebook className="text-white" />
        </a>
    
        <a href="https://www.helloasso.com/associations/patronage-d-allauch" target="_blank" rel="noopener noreferrer">
          <img src={Icon} alt="logo" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
