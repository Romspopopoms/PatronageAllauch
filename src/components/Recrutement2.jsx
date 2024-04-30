import React from "react";
import Aide from "../assets/aideauxdevoirs.png"
import FormaPro from "../assets/stagebafa.png"
import BAFD from "../assets/stagebafd.png"
import CPJEPS from "../assets/formacpjeps.png"
import BAFA from "../assets/BAFABAFD.png"
import PERMA from "../assets/BAFABAFDPERMA.png"

const Recrutement2 = () => { 
    return (
        <div className="h-auto w-auto flex flex-col justify-center items-center xl:gap-y-16">
            <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-6 xl:mt-8">Devenir bénévole</div>
            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <img src={Aide} alt="Aideauxdevoirs" className="xl:w-auto xl:h-auto h-48 w-48 object-cover mt-6 xl:mt-0" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center mt-4 xl:mt-0 ">Aide aux devoirs</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Un soir par semaine</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Si vous souhaitez donner de votre temps auprès de la jeunesse,<br></br>
                le Patronage a besoin de vous pour les temps d’aide aux devoirs<br></br>
                des enfants. 
                Avec le grand nombre d’enfants inscrits, il est essentiel d’avoir<br></br>
                un grande équipe pour accompagner les enfants de manière<br></br>
                personnalisé.
                Le temps bénévolat est défiscalisé et n’engage que sur un soir<br></br>
par semaine.</p>
                </div>               
            </div>
            
            <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-8 xl-mt-0 ">BAFA/BAFD et formation professionnel</div>

            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <div className="flex flex-col xl:flex-row gap-y-4  justify-center items-center xl:gap-x-24">
                <img src={FormaPro} alt="FormationPro" className="xl:w-auto xl:h-auto h-48 w-48 object-cover mt-6 xl:mt-0" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Stage BAFA</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Quinze jours de vacances</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">Vous voulez passer votre BAFA, vous cherchez un stage ou la <br></br>
                possibilité de financer votre formation ?<br></br>
                Le Patronage permet de validé votre stage BAFA sur les <br></br>
                périodes de vacances. De plus, le Patronage finance les<br></br>
                formations BAFA des animateurs dès 16 ans.</p>
                </div>  
                </div>        
            </div>

            <div className="flex  flex-col xl:flex-row gap-x-24 gap-y-4 justify-center items-center mt-8 xl:mt-0 ">
                <img src={BAFD} alt="StageBAFD" className="xl:w-auto xl:h-auto h-48 w-48 object-cover xl:hidden" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Stage BAFD</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Deux fois quinze jours de vacances</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">
                Vous souhaitez devenir directeur de structure ou <br></br>
                de séjour de vacances. Vous cherchez un lieu où passer<br></br>
                vos deux stages BAFD ou financer votre formation ?<br></br>
                Le Patronage donne la possibilité de financer et passer<br></br>
                les stages BAFD dès 18 ans.<br></br>
                La validation des stage se faits sur les périodes de vacances,<br></br>
                comme Directeur-adjoint pour le premier stage pratique,<br></br>
                et directeur pour le second stage pratique.</p>
                </div> 
                <img src={BAFD} alt="StageBAFD" className="xl:w-auto xl:h-auto h-48 w-48 object-cover hidden xl:block" />               
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <div className="flex flex-col xl:flex-row gap-y-4  justify-center items-center xl:gap-x-24">
                <img src={CPJEPS} alt="FormationPro" className="xl:w-auto xl:h-auto h-48 w-48 object-cover mt-6 xl:mt-0" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Formation CPJEPS et BPJEPS</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Une année scolaire</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">
                Vous souhaitez passer les diplômes professionnels<br></br>
                d’animation CPJEPS et BPJEPS-LTP. Le patronage est une<br></br>
                structure permettant l’alternance des formations.<br></br>
                L’expertise de l’équipe et des tuteurs permet un cadre idéal<br></br>
                pour la validation des diplômes professionnel.</p>
                </div>  
                </div>        
            </div>

            <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-8 xl-mt-0 ">Recrutement</div>

            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <img src={BAFA} alt="Formateur" className="xl:w-auto xl:h-auto h-48 w-48 object-cover mt-6 xl:mt-0" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center mt-4 xl:mt-0 ">Animateur BAFA/BAFD ponctuel</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">Pèriodes de Vacances </div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">
                Le Patronage recrute tout au long de l’année des animateurs<br></br>
                titulaire du BAFA ou du BAFD pour les périodes de vacances.<br></br>
                Participer à l’élaboration de projets d’animation spécifiques,<br></br>
                Animer des grands jeux et les moments de vie-quotidienne,<br></br>
                faire partie d’une équipe soudé et dynamique, donner un<br></br>
                vrai sens aux animations... Tout un ensemble de de choses<br></br>
                que vous pouvez vivre au Patronage.</p>
                </div>               
            </div>
            <div className="flex  flex-col xl:flex-row gap-x-24 gap-y-4 justify-center items-center mt-8 xl:mt-0 ">
                <img src={BAFD} alt="StageBAFD" className="xl:w-auto xl:h-auto h-48 w-48 object-cover xl:hidden" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center">Service Civique</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">28h par semaine durant 8 mois</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">
                Vous êtes étudiant ou à la recherche de la bonne voie d’avenir,<br></br>
                vous voulez faire quelque-chose qui a du sens durant ce temps<br></br>
                avec des horaires adaptable?<br></br>
                Le Patronage recrute des jeunes de 18 à 30 ans en Service Civique.<br></br>
                La mission ? Participer à l’aide aux devoirs et mettre en place des<br></br>
                activités et animations.<br></br>
                Pendant l’engagement, le Patronage propose différentes formations<br></br>
                tels que le PSC1, le BAFA, la Protection des mineurs etc...</p>
                </div> 
                <img src={BAFD} alt="StageBAFD" className="xl:w-auto xl:h-auto h-48 w-48 object-cover hidden xl:block" />               
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-x-12 justify-center items-center">
                <img src={PERMA} alt="Formateur" className="xl:w-auto xl:h-auto h-48 w-48 object-cover mt-8 xl:mt-0" />
                <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-extrabold font-kalam text-accent text-center mt-4 xl:mt-0 ">Animateur BAFA/BAFD permanant</div>
                <div className="text-2xl font-semibold font-kalam text-[#74A7BE] text-center">CDI en temps plein</div>
                <p className="font-laila text-[#74A7BE] text-center px-4 xl:px-0">
                Le Patronage recrute un animateur titulaire du BAFA ou<br></br>
                du BAFD en CDI à temps plein.<br></br>
                Sa mission est de participer à la mise en place de<br></br>
                divers projets d’animations, projets pédagogique ainsi<br></br>
                qu’animer les activités et temps de vie quotidienne.<br></br>
                Le tout en lien avec l’équipe de direction, les bénévoles et<br></br>
                les animateurs ponctuel.<br></br>
                35h par semaine lissé sur l’année. </p>
                </div>               
            </div>
        </div>
    )
}

export default Recrutement2