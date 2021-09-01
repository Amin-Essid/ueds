import * as React from "react";
import "../style/main.scss";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";

// markup
const IndexPage = () => {
  return (
    <>
      <Nav />
      <Contact />
      <Hero />
      <Services />
      <main>remember that you are doing this to reduce children suffering</main>
    </>
  );
};

export default IndexPage;
