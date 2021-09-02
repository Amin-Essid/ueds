import React from "react";
import "./Actions.scss";
// import Service from "./service/Service";

import { StaticImage } from "gatsby-plugin-image";

// markup
const Services = () => {
  let actions = [
    {
      title: "Une nouvelle salle d'informatique et de lecture -EP Batrou",
      img: "../../images/magic-rentrée.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
    },
    {
      title: "Action Daffini 9 - Ecole Joua 2 Thala",
      img: "../../images/dafinni.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
    },
    {
      title: "Hofret Ejjena rentrée 2018",
      img: "../../images/renovation.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
    },
    {
      title: "Cantine Scolaire + jardin -potager (Ecole Tabouba)",
      img: "../../images/renovation.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
    },
  ];

  return (
    <div className="actions_container">
      <div className="actions_title">NOS ACTIONS:</div>
      <div className="action_container action_flipped">
        <div className="action_info">
          <div className="action_title">{actions[0].title}</div>
          <div className="action_text">{actions[0].text}</div>
        </div>
        <div className="action_image">
          <StaticImage
            src="../../images/actions/one.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="action_image_img"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="action_container ">
        <div className="action_info">
          <div className="action_title">{actions[1].title}</div>
          <div className="action_text">{actions[1].text}</div>
        </div>
        <div className="action_image">
          <StaticImage
            src="../../images/actions/two.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="action_image_img"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="action_container action_flipped">
        <div className="action_info">
          <div className="action_title">{actions[2].title}</div>
          <div className="action_text">{actions[2].text}</div>
        </div>
        <div className="action_image">
          <StaticImage
            src="../../images/actions/three.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="action_image_img"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="action_container ">
        <div className="action_info">
          <div className="action_title">{actions[3].title}</div>
          <div className="action_text">{actions[3].text}</div>
        </div>
        <div className="action_image">
          <StaticImage
            src="../../images/actions/four.png"
            alt="service image"
            placeholder="blurred"
            // layout="fixed"
            className="action_image_img"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
