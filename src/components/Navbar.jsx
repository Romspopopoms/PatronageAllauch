import React, { useState } from 'react';
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
  {
    name: 'Faire un don',
    href: 'https://www.helloasso.com/associations/patronage-d-allauch' 
  },
];

const Navbar = () => {
  const location = useLocation();

  const isLinkActive = (href) => {
    return !href.startsWith('http') && location.pathname === href;
  };
  
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className="bg-primary">
      <div className="hidden xl:flex justify-between items-center h-16 px-4 xl:px-8">
        <div>
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
        <div className="flex flex-row items-center gap-x-8 ">
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
      <div className="flex xl:hidden justify-between items-center h-16 px-4">
        <img src={logo} alt="logo" className="h-12 w-12" />
        <div className='text-white xl:hidden font-kalam font-extrabold text-center'>Le Patronage d'Allauch</div>
        <button onClick={handleClick} className='text-white'>
          Menu
        </button>
      </div>
      {open && (
        <div className="absolute right-0 flex flex-col items-center bg-primary border-2 border-white rounded-lg">
          {Menu.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className={`py-2 px-4 text-white hover:underline hover:decoration-[#EA5863] hover:underline-offset-8`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-x-4 py-4 mt-2">
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
      )}
    </div>
  );
};

export default Navbar;
