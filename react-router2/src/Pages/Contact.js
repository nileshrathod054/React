import React from "react";
import "./Pages/Contact.css";
//import hand from "./Pages/Images/hand.jpeg";
//import phone from "./Pages/Images/phone.jpeg";
//import email from "./Pages/Images/email.jpeg";
//import address from "./Pages/Images/address.jpeg";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h2 className="touch">Get In Touch</h2>
        <div className="box1">
          <div className="contactdetail">
            <div className="contact1">
              <img src={phone} height={30} width={30} alt="hand" />
              Phone : +91 45789521158
            </div>
          </div>
        </div>

        <div className="box2">
          <div className="contactdetail">
            <div className="contact1">
              <img src={email} height={30} width={30} alt="hand" />
              Email : nileshrathore98@gamil.com
            </div>
            <div></div>
          </div>
        </div>

        <div className="box3">
          <div className="contactdetail">
            <div className="contact1">
              <img src={address} height={30} width={30} alt="hand" />
              Address : Amravati
            </div>
          </div>
        </div>
        <div className="hand1"></div>
        <div className="hand2">
          <img src={hand} height={350} width={500} alt="hand" />
        </div>

        <div className="hand3"></div>
      </div>
    </div>
  );
};

export default Contact;
