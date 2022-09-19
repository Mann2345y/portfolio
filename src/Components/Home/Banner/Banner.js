import React from "react";
import { Bannerwrapper, Innerwrapper, ScrollWrapper } from "./styles";
import Lottie from "lottie-react";
import helloAnimation from "../../../Reusables/hello.json";
import scrollAnimation from "../../../Reusables/scroll.json";

const Banner = () => {
  return (
    <Bannerwrapper id="home">
      <Innerwrapper>
        <div className="heading">
          <Lottie
            animationData={helloAnimation}
            style={{ height: "200px", width: "auto" }}
          />
          <h1>Mahesh Arya here</h1>
        </div>
        <h5>
          A young and passionate full stack developer. Loves to create web apps
          and websites and to explore my creativity
        </h5>
        <ScrollWrapper>
          <Lottie
            animationData={scrollAnimation}
            loop
            style={{ height: "100px", width: "100px" }}
          />
        </ScrollWrapper>
      </Innerwrapper>
    </Bannerwrapper>
  );
};

export default Banner;
