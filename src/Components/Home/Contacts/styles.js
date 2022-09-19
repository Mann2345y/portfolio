import styled from "styled-components";

export const ContactsWrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 100px 5%;
`;
export const Header = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .indicator {
    height: 5px;
    width: 50px;
    background: #daa520;
    border-radius: 25px;
  }
  h1 {
    font-size: 3em;
    margin-bottom: 10px;
    letter-spacing: 1.5px;
  }
`;
export const Content = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 968px) {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 25px;
      padding: 10px;
    }
  }
`;
export const LeftBlock = styled.div`
  height: 100%;
  width: 50%;
  padding: 0 100px;
  h2 {
    font-family: "Montserrat", sans-serif;
    margin-bottom: 25px;
    font-weight: 900;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
`;
export const DetailsWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  .detailsIcon {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #daa520;
  }
  h5 {
    font-family: "Roboto Slab", sans-serif;
    font-size: 0.9em;
    margin-left: 20px;
    font-weight: 400;
  }
`;
export const RightBlock = styled.div`
  height: 550px;
  width: 600px;
  background: rgb(250, 250, 255);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  margin-left: 100px;
  padding: 30px 50px;
  @media (max-width: 968px) {
    margin-left: 0;
  }
`;
export const Inputwrapper = styled.div`
  height: fit-content;
  width: 100%;
  margin-bottom: 30px;
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 10px;
  }
  input {
    height: 40px;
    width: 100%;
    padding: 0 20px;
    background: rgb(230, 230, 230);
    color: black;
    border-radius: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  textarea {
    height: 100px;
    width: 100%;
    background: rgb(230, 230, 230);
    border: none;
    border-radius: 5px;
    resize: none;
    padding: 15px;
    font-size: 1.2em;
    color: black;
    &:focus {
      outline: none;
    }
  }
`;
export const Button = styled.div`
  height: 60px;
  width: 200px;
  background: #daa520;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #daa520;
  margin-top: 50px;
  transition: all 0.2s ease-in;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  &:hover {
    background: rgb(250, 250, 255);
  }
`;
