import React from "react"
import Marie from "../assets/Marie.png"
import Jb from "../assets/Jb.png"
import Père from "../assets/Père.png"
import Bénévoles from "../assets/Bénévoles.png"
import Autres from "../assets/Autres.png"

const Quisommesnous2 = () => { 
    return (
        <div className="h-auto w-auto flex flex-col justify-center items-center gap-y-6 xl:gap-y-24">
            <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center">L'équipe Permanente</div>
            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <img src={Marie} alt="Marie" className="xl:w-auto xl:h-auto h-48 w-48 object-cover" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center mt-4 xl:mt-0 ">Marie-Amélie Marinho</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Directrice du Patronage.</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Marie-Amélie à valider une licence en psychologie.<br></br>
                    Inscrite comme collégienne à l’ouverture
                    <br></br>
                    du Patronage en 2012, elle s’engagea dans l’animation des
                    <br></br>
                    Patronages dès son lycée. Après un service civique au
                    <br></br>
                    Patronage de Gréasque en 2018, elle pris la direction 
                    <br></br>
                    du Patronage d’Allauch en Septembre 2020.</p>
                </div>               
            </div>

            <div className="flex flex-row gap-x-12 mt-8 xl:mt-0">
                <div className="flex flex-col gap-y-4 xl:gap-y-0 justify-center items-center">
                <img src={Jb} alt="Jb" className="xl:w-auto xl:h-auto h-48 w-48 object-cover xl:hidden" />
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Jean-Baptiste Bellido</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Directeur adjoint du Patronage.</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Directeur adjoint du Patronage.
                Jean-Baptiste passa trois années au Séminaire de la Castille.<br></br>
                Avec un Bac+3 en philosophie, il s’engagea dans les Patronages<br></br>
                en montant en 2020 le Patronage d’Aix au poste de directeur.<br></br>
                Il exerça en parallèle comme directeur par intérim au <br></br>
                Patronage de Gréasque.<br></br>
                Il arriva en 2022 au Patronage d’Allauch comme<br></br>
                directeur par interim avant de prendre le poste d’adjoint.</p>
                </div>
                <img src={Jb} alt="Jb" className="xl:w-auto xl:h-auto h-48 w-48 object-cover hidden xl:block" />
                
            </div>

            <div className="flex  flex-col xl:flex-row gap-x-12 gap-y-4 xl:gap-y-0 justify-center items-center mt-8 xl:mt-0 ">
                <img src={Père} alt="PèreMatthieu" className="xl:w-auto xl:h-auto h-48 w-48 object-cover" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Abbé Matthieu Desjardins</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Aumonier du Patronage et curé de la paroisse.</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Après 8 ans au séminaire Saint Luc d’Aix, l’Abbé Matthieu fut <br></br>
                ordonné prêtre le 22 juin 2014, il devint curé des <br></br>
                paroisses Saint Laurent et Saint Sébastien d’Allauch, <br></br>
                chapelin de Notre Dame du Château et aumonier<br></br>
                du Patronage en 2020. Il célèbre chaque mercredi la Sainte Messe<br></br>
                au Patronage et est présent le jeudi soir pour l’aide aux devoirs</p>
                </div>               
            </div>

            <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-8 xl:mt-0">Nos bénévoles et animateurs ponctuels</div>

            <div className="flex flex-col xl:flex-row gap-x-12 gap-y-4 xl:gap-y-0 justify-center items-center ">
                <img src={Bénévoles} alt="NosBénévoles" className="xl:w-auto xl:h-auto h-48 w-48 object-cover" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Nos bénévoles</div>
                
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Le Patronage reçois chaque jours l’aide de nombreux bénévoles, <br></br>
                que ce soit pour l’aide au devoirs ou les animations, nos bénévoles<br></br>
                de tout age se mettent au service des enfants du Patronage.<br></br>
                Grâce à eux, le Patronage a la possibilité de proposer aux familles<br></br>
                des services de qualité à la hauteur de leurs attentes.<br></br>
                Le Patronage ne les remerciera jamais assez pour tout le temps<br></br>
                qu’ils donnent à la jeunesse.</p>
                </div>               
            </div>

            <div className="flex flex-col xl:flex-row gap-x-12 gap-y-4 xl:gap-y-0 justify-center items-center mt-8 xl:mt-0">
                <div className="flex flex-col gap-y-4 justify-center items-center">
                <img src={Autres} alt="AnimateursPonctuels" className="xl:w-auto xl:h-auto h-48 w-48 object-cover xl:hidden" />
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Les animateurs ponctuels</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Que ce soit des stagiaires ou titulaires du BAFA, de nombreux <br></br>
                animateurs viennent au cour de l’année pour renforcer l’équipe<br></br>
                dans les temps d’animations et d’aides aux devoirs.<br></br>
                Leur motivation et leur jeunesse donne un souffle nouveau au<br></br>
                Patronage à chaque jours de présence.
                Le Patronage leur est reconnaissant pour l’excellent travail<br></br>
                qu’ils accomplissent auprès de la jeunesse. </p>
                </div>  
                <img src={Autres} alt="AnimateursPonctuels" className="xl:w-auto xl:h-auto h-48 w-48 object-cover hidden xl:block" />             
            </div>
        </div>
    )
}

export default Quisommesnous2