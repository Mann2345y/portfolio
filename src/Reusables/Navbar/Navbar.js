import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

import {
  HammenuContent,
  HammenuIcon,
  Logo,
  LogoIcon,
  NavLinks,
  Navwrapper,
} from "./styles";
import { Menuicon } from "../../Reusables/Icons";

const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Navwrapper>
      <Logo onClick={() => navigate("/")}>
        <LogoIcon />
        <h1>Mahesh</h1>
      </Logo>
      <NavLinks>
        <ScrollIntoView selector="#home" onClick={() => navigate("/")}>
          <h3>Home</h3>
        </ScrollIntoView>
        <ScrollIntoView selector="#about" onClick={() => navigate("/")}>
          <h3>About</h3>
        </ScrollIntoView>
        <ScrollIntoView selector="#projects" onClick={() => navigate("/")}>
          <h3>Projects</h3>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact" onClick={() => navigate("/")}>
          <h3>Contact</h3>
        </ScrollIntoView>
      </NavLinks>
      <HammenuIcon onClick={() => setOpenmenu(!openmenu)}>
        <Menuicon size={window.innerWidth > 425 ? 38 : 25} color="#353639" />
      </HammenuIcon>
      <HammenuContent open={openmenu}>
        <div>
          <h4>Home</h4>
        </div>
        <div>
          <h4>About</h4>
        </div>
        <div>
          <h4>Projects</h4>
        </div>
        <div>
          <h4>Contact</h4>
        </div>
      </HammenuContent>
    </Navwrapper>
  );
};

export default Navbar;
