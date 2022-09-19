import React, { useState } from "react";
import {
  Button,
  ContactsWrapper,
  Content,
  DetailsWrapper,
  Header,
  Inputwrapper,
  LeftBlock,
  RightBlock,
} from "./styles";
import { Locationicon, Mailicon, Phoneicon } from "../../../Reusables/Icons";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ContactsWrapper id="contact">
      <Header>
        <h1>Contact Me</h1>
        <div className="indicator"></div>
      </Header>
      <Content>
        <LeftBlock>
          <h2>Contact Details</h2>
          <p>
            You can either contact me on below given details or you can fill the
            form attaches beside and i will contact to you as soon as possible
          </p>
          <DetailsWrapper>
            <div className="detailsIcon">
              <Mailicon size={21} />
            </div>
            <h5>manish0075arya@gmail.com</h5>
          </DetailsWrapper>
          <DetailsWrapper>
            <div className="detailsIcon">
              <Phoneicon size={21} />
            </div>
            <h5>+91 - 7987 045 017</h5>
          </DetailsWrapper>
          <DetailsWrapper>
            <div className="detailsIcon">
              <Locationicon size={21} />
            </div>
            <h5>
              Gurudev Colony, Jawahar Jyoti <br />
              Damuadhunga, Haldwani, <br />
              Uttarakhand - 263126
            </h5>
          </DetailsWrapper>
        </LeftBlock>
        <RightBlock>
          <Inputwrapper>
            <h3>Name :</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Inputwrapper>
          <Inputwrapper>
            <h3>Email :</h3>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Inputwrapper>
          <Inputwrapper>
            <h3>Your Message :</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Inputwrapper>
          <Button>
            <h4>SUBMIT</h4>
          </Button>
        </RightBlock>
      </Content>
    </ContactsWrapper>
  );
};

export default Contacts;
