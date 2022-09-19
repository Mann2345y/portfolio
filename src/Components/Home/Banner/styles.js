import styled from "styled-components";

export const Bannerwrapper = styled.div`
  height: 800px;
  width: 100%;
  background: url("/pattern.jpg");
  margin: 0;
`;
export const Innerwrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    font-size: 4em;
    letter-spacing: 1.5px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      font-size: 2em;
      padding: 0 25px;
    }
  }
  h5 {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    width: 800px;
    font-weight: 600;
    letter-spacing: 1.5px;
    @media (max-width: 900px) {
      width: auto;
      padding: 0 25px;
      font-size: 1em;
    }
  }
  .heading {
    height: fit-content;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    h1 {
      margin: 0;
    }
    @media (max-width: 968px) {
      flex-direction: column;
    }
  }
`;
export const ScrollWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: center;
`;
