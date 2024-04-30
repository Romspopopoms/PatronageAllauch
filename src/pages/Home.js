import React from "react";
import Accueil1 from "../components/Accueil1";
import Accueil2 from "../components/Accueil2";
import AccueilActu from "../components/AccueilActu";
import Accueil4 from "../components/AccueilInsta";
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
        <div className="flex xl:flex-row justify-center items-center gap-x-8 gap-y-4 ">
        <InstagramPost />
        <Accueil4 />
        </div>
        <Footer />
    </div>
  );
}

export default Home;