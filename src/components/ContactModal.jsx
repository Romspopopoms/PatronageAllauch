import React, { useState } from "react";

const ContactModal = () => {
    const [See, SetSee] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        SetSee(true); // Mettre à jour l'état pour afficher le message de soumission
        
        setTimeout(() => {
            SetSee(false); // Réinitialiser l'affichage du message
            e.target.reset(); // Réinitialiser les champs du formulaire
        }, 5000); // 5000 ms = 5 secondes
    };

    return (
        <div className="relative flex justify-center items-center">
            <div className="xl:absolute xl:top-[-700px] flex flex-col bg-white h-auto w-auto xl:w-[1205px] xl:h-[800px]">
                {See && <h1 className="text-2xl font-semibold text-green-600">Soumission faite! Merci</h1>}
                <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-8">Formulaire de contact</div>
                <p className="text-center font-laila text-[#74A7BE] text-xl xl:text-2xl mt-4">Vous souhaitez nous contacter ? <br></br> Remplissez le formulaire ci-dessous
                    <br></br> avec vos coordonnèes pour que nous puissions vous rèpondre.</p>

                <div className="flex flex-row xl:justify-between justify-center items-center xl:px-40 xl:mt-14">

                    <div className="hidden xl:flex flex-col justify-center items-center font-laila font-light text-[#74A7BE] text-xl xl:text-2xl text-center xl:mt-0 mt-12">
                        <div className=" mt-8">
                            Patronage d’Allauch<br></br>
                            495 Avenue Leï Rima,<br></br>
                            13190 Allauch<br></br>
                        </div>
                        <div className="mt-4">06 28 92 09 98</div>
                        <div className="mt-4">patronageallauch@gmail.com</div>
                    </div>
                    <div className="h-auto w-auto flex flex-col justify-center items-center mt-8 xl:mt-0">

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-x-12 gap-y-4">
                                <input type="text" className="h-12 xl:w-48 rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent
                                text-center" placeholder="Nom"
                                    required />
                                <input type="text"
                                    className="h-12 xl:w-48 rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent
                                    text-center" placeholder="Prenom"
                                    required />
                                <input type="email"
                                    className="h-12 xl:w-48 rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent
                                    text-center" placeholder="mail"
                                    required />
                                <input type="VotreEmail"
                                    className="h-12 xl:w-48 rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent text-center" placeholder="Téléphone"
                                    required />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <textarea type="message"
                                    className="xl:h-[347px] h-[150px] w-full rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent text-center" placeholder="Votre Message"
                                    required />


                                <button type="submit" className="bg-[#5D6773] rounded-md w-24 h-12 xl:w-48 xl:h-12 mt-8 text-white">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactModal;