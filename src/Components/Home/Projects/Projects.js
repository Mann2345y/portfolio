import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProjectWrapper,
  Header,
  Projectblock,
  Image,
  Description,
  Button,
} from "./styles";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <ProjectWrapper id="projects">
      <Header>
        <h1>Projects</h1>
        <div className="indicator"></div>
      </Header>
      <Projectblock>
        <Image image="./ss1.png" />
        <Description>
          <h1>Shop On The GO</h1>
          <p>
            Shop on the go is a complete e-commerce solution. Loaded with all
            the features of a modern e-commerce site such as authentication,
            searching, pagination, etc. but also comes with additional features
            such as Virtual Trial Room and Group Cart
          </p>
          <Button onClick={() => navigate("/0")}>Check Out</Button>
        </Description>
      </Projectblock>
      <Projectblock>
        <Image image="./ss2.png" />
        <Description>
          <h1>Chatter</h1>
          <p>
            Inspired from whatsapp, chatter is my effort to create a one to one
            chat application where users can chat among themselves and also they
            can chat in group chats.
          </p>
          <Button onClick={() => navigate("/1")}>Check Out</Button>
        </Description>
      </Projectblock>
      <Projectblock>
        <Image image="./ss3.png" />
        <Description>
          <h1>Planner</h1>
          <p>
            Planner is a all-in-one planner app which serves as a complete
            solution for someone who needs a planner. Users can set the events,
            can write daily journals, can create to-do lists and also can make
            short notes.
          </p>
          <Button onClick={() => navigate("/2")}>Check Out</Button>
        </Description>
      </Projectblock>
      <Projectblock>
        <Image image="./ss4.png" />
        <Description>
          <h1>Crypadda</h1>
          <p>
            Crypadda is a crypto tracking web app which gives the real-time
            prices of approx. 1000 cryptocurrencies and also contains a news
            section where users can get all the latest crypto related news.
          </p>
          <Button onClick={() => navigate("/3")}>Check Out</Button>
        </Description>
      </Projectblock>
    </ProjectWrapper>
  );
};

export default Projects;
