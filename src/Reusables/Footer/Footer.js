import React from "react";
import {
  Footerwrapper,
  Content,
  LeftBlock,
  RightBlock,
  Iconswrapper,
  Iconwrapper,
} from "./styles";
import { Instagramicon, Twittericon, Githubicon, Linkedinicon } from "../Icons";

const Footer = () => {
  return (
    <Footerwrapper>
      <Content>
        <LeftBlock>
          <h1>Mahesh Arya</h1>
          <h4>
            A young and passionate full stack developer. Loves to create web
            apps and websites that can stand apart from the crowd
          </h4>
        </LeftBlock>
        <RightBlock>
          <h2>SOCIALS</h2>
          <Iconswrapper>
            <Iconwrapper>
              <Instagramicon size={21} />
            </Iconwrapper>
            <Iconwrapper>
              <Twittericon size={21} />
            </Iconwrapper>
            <Iconwrapper>
              <Githubicon size={21} />
            </Iconwrapper>
            <Iconwrapper>
              <Linkedinicon size={21} />
            </Iconwrapper>
          </Iconswrapper>
        </RightBlock>
      </Content>
      <div className="bottomtext">
        <p>Made with </p> <h1> &hearts;</h1> <p>, by Mahesh Arya</p>
      </div>
    </Footerwrapper>
  );
};

export default Footer;
