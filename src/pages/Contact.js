import React from "react";
import BanniereContact from "../assets/BanniereContact.png"
import Footer from "../components/Footer"
import ContactModal from "../components/ContactModal";
const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div>
      <img src={BanniereContact} alt="bannière" className="h-auto w-full object-cover" />
      <ContactModal />
      </div>
      <div className="mt-14 xl:mt-64">
      <Footer />
      </div>
    </div>
  );
};

export default ContactPage;