import React from "react";
import "./Services.scss";
import "./Service.scss";
// import Service from "./service/Service";

import { StaticImage } from "gatsby-plugin-image";

// markup
const Services = () => {
  let services = [
    {
      title: "Magic rentrée",
      img: "../../images/magic-rentrée.png",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      url: "https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM",
      btnText: "FAITES UN DON",
    },
    {
      title: "Daffini",
      img: "../../images/dafinni.png",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      url: "https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM",
      btnText: "FAITES UN DON",
    },
    {
      title: "Rénovation des écoles",
      img: "../../images/renovation.png",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      url: "https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM",
      btnText: "FAITES UN DON",
    },
    //   {
    //     title: "",
    //     img: "",
    //     text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    //     url: "https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM",
    //     btnText: "REJOIGNEZ NOTRE EQUIPE",
    //   },
  ];

  return (
    <div className="servoces_container">
      <div className="service_container">
        <div className="service_image">
          <StaticImage
            src="../../images/magic-rentrée.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="service_image_img"
            width={270}
            height={200}
          />
        </div>
        <div className="service_title">{services[0].title}</div>
        <div className="service_text">{services[0].text}</div>
        <a href={services[0].url} target="_blank">
          <div className="service_btn">{services[0].btnText}</div>
        </a>
      </div>

      <div className="service_container">
        <div className="service_image">
          <StaticImage
            src="../../images/dafinni.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="service_image_img"
            width={270}
            height={200}
          />
        </div>
        <div className="service_title">{services[1].title}</div>
        <div className="service_text">{services[1].text}</div>
        <a href={services[1].url} target="_blank">
          <div className="service_btn">{services[1].btnText}</div>
        </a>
      </div>

      <div className="service_container">
        <div className="service_image">
          <StaticImage
            src="../../images/renovation.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="service_image_img"
            width={270}
            height={200}
          />
        </div>
        <div className="service_title">{services[2].title}</div>
        <div className="service_text" style={{ marginTop: "9px" }}>
          {services[2].text}
        </div>
        <a href={services[2].url} target="_blank">
          <div className="service_btn">{services[2].btnText}</div>
        </a>
      </div>
    </div>
  );
};

export default Services;
