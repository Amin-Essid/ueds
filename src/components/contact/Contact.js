import React from "react";
import "./Contact.scss";

// markup
const Contact = () => {
  return (
    <div className="conatct_container">
      <div className="contact_title_one">
        APPELEZ-NOUS
        <span style={{ fontWeight: "600" }}> +(216) 71 919 753</span>
      </div>
      <div className="contact_title_two">
        CONTACTEZ-NOUS{" "}
        <span style={{ fontWeight: "600" }}>
          parrainage.enfants@sos-tunisie.org
        </span>
      </div>
    </div>
  );
};

export default Contact;
