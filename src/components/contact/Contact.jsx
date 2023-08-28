import React, { useEffect, useState } from "react";
import "./Contact.scss";
import MainButton from "../../utils/buttons/mainbutton/MainButton";
import Title from "../title/Title";
import axios from "axios";

const Contact = () => {
  const url = "http://localhost:3000";

  const [contact, setContact] = useState("");

  const GetContact = async () => {
    await axios.get(`${url}/contact`).then((res) => {
      setContact(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    GetContact();
  });

  return (
    <section id="section">
      <div className="container">
        <Title title="CONTACT" />
        <div className="contact__content">
          <div className="contact__content--left">
            <div className="contact__content--form">
              <input type="text" placeholder="NAME, SURNAME" />
              <input type="email" placeholder="E-MAIL ADRESS" />
              <input type="text" placeholder="THEME" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="YOUR MESSAGE"
              ></textarea>
            </div>
            <MainButton>SEND</MainButton>
          </div>
          <div className="contact__content--right">
            <img src={contact.image} alt="contactimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
