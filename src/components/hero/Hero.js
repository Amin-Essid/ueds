import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./Hero.scss";

// markup
const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_title_one">ناقفوا لأولادنا</div>
      <div className="hero_title_two">
        Grâce à votre générosité l'Association "Un enfant, des sourires" a pu
        créer jusqu'à ce jour 10 bibliothèques scolaires dans les régions les
        plus isolées du pays.
      </div>
      <div className="hero_title_three">
        <div>RIB: 00000000000000000000</div>
        <div>SWIFT: 0000</div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Hero;
