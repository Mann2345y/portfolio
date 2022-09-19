import React, { useEffect } from "react";
import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import Contacts from "../Components/Home/Contacts/Contacts";
import Footer from "../Reusables/Footer/Footer";
import Navbar from "../Reusables/Navbar/Navbar";
import Projects from "../Components/Home/Projects/Projects";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <About id="about" />
      <Projects id="projects" />
      <Contacts id="contact" />
      <Footer />
    </>
  );
};

export default Home;
