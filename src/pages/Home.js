import React from "react";
import Accueil1 from "../components/Accueil1";
import Accueil2 from "../components/Accueil2";
import AccueilActu from "../components/AccueilActu";
import Accueil4 from "../components/AccueilInsta";
import Footer from "../components/Footer"


const Home = () => {
    
  return (
    <div className="flex flex-col w-auto h-auto">
        <Accueil1 />
        <Accueil2 />
        <AccueilActu />
        <Accueil4 />
        <Footer />
    </div>
  );
}

export default Home;