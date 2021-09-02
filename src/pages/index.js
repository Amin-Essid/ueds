import * as React from "react";
import "../style/main.scss";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import Actions from "../components/actions/Actions";
import Footer from "../components/footer/Footer";

// markup
const IndexPage = () => {
  return (
    <>
      <Nav />
      <Contact />
      <Hero />
      <Services />
      <Actions />
      <Footer />
    </>
  );
};

export default IndexPage;
