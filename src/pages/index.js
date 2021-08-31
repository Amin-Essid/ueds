import * as React from "react";
import "../style/main.scss";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";

// markup
const IndexPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <main>remember that you are doing this to reduce children suffering</main>
    </>
  );
};

export default IndexPage;
