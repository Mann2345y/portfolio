import React from "react";
import {
  AboutWrapper,
  Content,
  Header,
  LeftBlock,
  RightBlock,
  SkillBlockWrapper,
  SkillBlock,
} from "./styles";

const About = () => {
  return (
    <AboutWrapper id="about">
      <Header>
        <h1>About Me</h1>
        <div className="indicator" />
      </Header>
      <Content>
        <LeftBlock>
          <h1>Something About me &#128512;</h1>
          <p>
            I am a <b> Full stack developer</b>, MERN (to be specific) and i
            love to design websites and web apps that can stand apart from the
            crowd. You can check out my works below.
          </p>
          <p>
            I love to explore the world and i love watching animes and tv shows
            in my free time. Feel free to connect me on the Instagram and Linked
            to connect with me
          </p>
          <p>
            I am currently a fresher and i am looking for an opportunity to hone
            my skills and to contribute, learn and grow. If you feel i could be
            a worthy addition in your team, feel free to contact me
          </p>
        </LeftBlock>
        <RightBlock>
          <h1>My Tech ToolBox</h1>
          <SkillBlockWrapper>
            <SkillBlock>
              <h4>HTML</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>CSS</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>JAVASCRIPT</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>REACT</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>NODE JS</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>RESPONSIVE DESIGN</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>FIGMA</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>GITHUB</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>MONGO DB</h4>
            </SkillBlock>
            <SkillBlock>
              <h4>BASICS OF SQL</h4>
            </SkillBlock>
          </SkillBlockWrapper>
        </RightBlock>
      </Content>
    </AboutWrapper>
  );
};

export default About;
