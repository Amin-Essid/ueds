import React, { useState } from "react";
// import { Navbar, Container } from "react-bootstrap";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./Nav.scss";

const links = [
  {
    name: "Rénovation des écoles",
    url: "/",
  },
  {
    name: "Magic rentrée",
    url: "/",
  },
  {
    name: "Daffini",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
];

// markup
const Nav = () => {
  const [mobileMode, setMobileMode] = useState(false);

  const nav = links.map((link, index) => (
    <Link key={index} href={link.url}>
      {link.name}
    </Link>
  ));
  const mobileNav = links.map((link, index) => (
    <div key={index}>
      <Link href={link.url}>{link.name}</Link>
    </div>
  ));
  return (
    <div className="headerLargeContainer">
      <div className="headerContainer">
        <Link href="/" style={{ display: "flex" }}>
          <div className="headerLogo">
            <StaticImage
              src="../../images/logo.jpg"
              alt="logo"
              placeholder="blurred"
              // layout="fixed"
              className="nav_logo"
              width={75}
              height={75}
            />
          </div>
          <div className="headerTitle">
            Un Enfant
            <br />
            Des Sourires
          </div>
        </Link>
        <div className="headerNav">
          {nav}
          <a
            href="https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM"
            target="_blank"
            className="headerButton"
          >
            FAITES UN DON
          </a>
        </div>
        <div
          className="headerMobileNavIcon"
          onClick={() => {
            setMobileMode(!mobileMode);
          }}
        >
          <StaticImage
            src="../../images/mobileNavIcon.png"
            alt="logo"
            placeholder="blurred"
            // layout="fixed"
            className="nav_logo"
            width={50}
            height={50}
          />
        </div>
        {/* <Link href="/checkout">
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </div>
        </Link> */}
      </div>

      <div
        className={mobileMode ? "openHeaderMobileNav" : "closedHeaderMobileNav"}
      >
        {mobileNav}
        <a
          href="https://www.cha9a9a.tn/fund/detail/magic-rentree-11-eme-edition-260710?fbclid=IwGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiYwEd9oOg29Z4Y4LdXu-aojrKM"
          target="_blank"
          className="headerButton"
        >
          FAITES UN DON
        </a>
      </div>
    </div>
  );
};

export default Nav;
