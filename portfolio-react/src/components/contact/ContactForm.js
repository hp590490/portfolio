import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j3a4abq", "template_q2vg5yf", form.current, {
        publicKey: "boezUkOUWz9utA2cq",
      })
      .then(
        () => {
          console.log("Message bien envoyé!");
          setShowPopup(true);
          form.current.reset(); // reset du form

          setTimeout(() => {
            setShowPopup(false);
          }, 3000); // 3 sec après la popup se ferme
        },
        (error) => {
          console.log("ERREUR...", error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-contact"
        autoComplete="off"
      >
        <label>Nom</label>
        <input type="text" name="randomName123" placeholder="Votre nom" />
        <label>Email</label>

        <input
          type="email"
          name="no-autofill-email"
          placeholder="Votre.email@exemple.com"
          autoComplete="new-password"
        />
        <label>Message</label>
        <textarea name="message" placeholder="Votre message..." />
        <input
          type="submit"
          value="Envoyer le message"
          className="submit-btn"
        />
        <p>
          <i className="fa-regular fa-clock"></i>Réponse sous 24 heures.
        </p>
      </form>

      {showPopup && (
        <div className="popup-message">
          <p>Message bien envoyé, merci !</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
