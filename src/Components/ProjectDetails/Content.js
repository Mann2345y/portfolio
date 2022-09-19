import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 5%;
  margin-bottom: 100px;
  text-align: center;
`;
const Header = styled.div`
  height: fit-content;
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  .indicator {
    height: 5px;
    width: 50px;
    background: #daa520;
    border-radius: 25px;
  }
  @media (max-width: 768px) {
    font-size: 2em;
  }
  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;
const Contentblock = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    height: 100%;
    width: 48%;
    padding: 50px;
    text-align: left;
    h1 {
      font-family: "Poiret One", sans-serif;
      letter-spacing: 1.5px;
      font-size: 2.5em;
      margin-bottom: 25px;
    }
    p {
      font-family: "Montserrat", sans-serif;
      letter-spacing: 1px;
      line-height: 40px;
      font-size: 1.2em;
    }
  }
  @media (max-width: 968px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    > div {
      padding: 20px;
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: 1em;
        line-height: 25px;
      }
    }
  }
`;
const StackBlock = styled.div`
  min-height: 400px;
  width: 100%;
  text-align: left;
  padding: 50px;
  > div {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
  }
  h1 {
    font-family: "Poiret One", sans-serif;
    font-size: 2.5em;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
const StackWrapper = styled.div`
  height: 60px;
  width: 200px;
  background: #daa520;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
`;
const ButtonsWrapper = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 768px) {
    margin-top: 100px;
    flex-direction: column;
    align-items: baseline;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
const Button = styled.div`
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #daa520;
  border: 2px solid #daa520;
  transition: all 0.2s ease-in;
  margin-right: 50px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  > h4 {
    color: black;
  }
  &:hover {
    background: white;
  }
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 50px;
  }
`;

const Content = ({ content }) => {
  const stackArray = content.stack.split(",");
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <h1>{content.name}</h1>
        <div className="indicator"></div>
      </Header>
      <Contentblock>
        <div>
          <h1>Introduction :</h1>
          <p>{content.intro}</p>
        </div>
        <div>
          <h1>Goals of Project :</h1>
          <p>{content.Goal}</p>
        </div>
      </Contentblock>
      <StackBlock>
        <h1>Tech Stack Used :</h1>
        <div>
          {stackArray.map((item, index) => (
            <StackWrapper key={index}>
              <h4>{item}</h4>
            </StackWrapper>
          ))}
        </div>
      </StackBlock>
      <ButtonsWrapper>
        <a href={content.link} target="_blank" rel="noreferrer">
          <Button>
            <h4>LIVE LINK</h4>
          </Button>
        </a>

        <Button onClick={() => navigate("/")}>
          <h4>BACK TO HOME</h4>
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Content;
