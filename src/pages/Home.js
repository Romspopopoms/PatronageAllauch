import React from "react";
import Accueil1 from "../components/Accueil1";
import Accueil2 from "../components/Accueil2";
import AccueilActu from "../components/AccueilActu";
import Footer from "../components/Footer"
import YoutubeAccueil from "../components/YoutubeAccueil";
import InstagramPost from "../components/InstagramPost";


const Home = () => {
    
  return (
    <div className="flex flex-col w-full h-full">
        <Accueil1 />
        <Accueil2 />
        <YoutubeAccueil />
        <AccueilActu />
        <InstagramPost /> 
        <Footer />
    </div>
  );
}

export default Home;