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
      <a
        href="https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM"
        target="_blank"
      >
        <div className="hero_title_three">FAITES UN DON</div>
      </a>
    </div>
  );
};

export default Hero;
