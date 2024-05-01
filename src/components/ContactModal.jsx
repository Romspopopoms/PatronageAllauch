import React, { useState } from "react";

const ContactModal = () => {
    const [See, SetSee] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target[0].value,
            firstName: e.target[1].value,
            email: e.target[2].value,
            phone: e.target[3].value,
            message: e.target[4].value,
        };
    
        try {
            const response = await fetch('/api/SendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Email sent successfully");
                SetSee(true);
                setTimeout(() => {
                    SetSee(false);
                    e.target.reset();
                }, 5000);
            } else {
                console.log("HTTP-Error: " + response.status);
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    


    return (
        <div className="relative flex justify-center items-center">
            <div className="xl:absolute xl:top-[-500px] flex flex-col bg-white h-auto w-auto xl:w-[1205px] xl:h-[800px]">
                <div className="text-3xl xl:text-5xl font-bold font-kalam text-secondary text-center mt-8">Formulaire de contact</div>
                <p className="text-center font-laila text-[#74A7BE] text-xl xl:text-2xl mt-4">Vous souhaitez nous contacter ? <br></br> Remplissez le formulaire ci-dessous
                    <br></br> avec vos coordonnèes pour que nous puissions vous rèpondre.</p>

                <div className="flex flex-row xl:justify-between justify-center items-center xl:px-40 xl:mt-14">

                    <div className="hidden xl:flex flex-col justify-center items-center font-laila font-light text-[#74A7BE] text-xl xl:text-2xl text-center xl:mt-0 mt-12">
                        <div className=" ">
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
                                <input type="phone"
                                    className="h-12 xl:w-48 rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent text-center" placeholder="Téléphone"
                                    required />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <textarea type="message"
                                    className="xl:h-[347px] h-[150px] w-full rounded-md border-2 border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent text-center" placeholder="Votre Message"
                                    required />
                                
                                {See && <h1 className="text-2xl font-semibold text-green-600">Soumission faites! Merci</h1>}


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