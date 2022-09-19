import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { details } from "../Reusables/projectdetails";
import Navbar from "../Reusables/Navbar/Navbar";
import Banner from "../Components/ProjectDetails/Banner";
import Content from "../Components/ProjectDetails/Content";
import Footer from "../Reusables/Footer/Footer";

const Projectdetails = () => {
  const { id } = useParams();
  const currproject = details[id];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {Object.keys(currproject).length > 0 ? (
        <>
          <Banner image={currproject.image} />
          <Content content={currproject} />
        </>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default Projectdetails;
