import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  padding: 0 50px;
  @media (max-width: 968px) {
    height: 500px;
  }
  @media (max-width: 768px) {
    height: 350px;
    padding: 20px;
    margin: 50px 0;
  }
`;
const Innerwrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Banner = ({ image }) => {
  return (
    <Wrapper>
      <Innerwrapper image={image} />
    </Wrapper>
  );
};

export default Banner;
