import styled from "styled-components";

export const Footerwrapper = styled.div`
  height: 350px;
  width: 100%;
  padding: 0 5%;
  background: #393536;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bottomtext {
    height: 50px;
    display: flex;
    align-items: baseline;
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 968px) {
    height: fit-content;
  }
`;
export const Content = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  @media (max-width: 968px) {
    height: fit-content;
    flex-direction: column;
    > div {
      margin: 50px 0;
      width: 100%;
    }
  }
`;
export const LeftBlock = styled.div`
  height: 100%;
  width: 450px;
  h4 {
    margin-top: 25px;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    font-weight: 400;
  }
`;
export const RightBlock = styled.div`
  height: 100%;
  width: 300px;
  h2 {
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
  }
`;
export const Iconswrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: 968px) {
    justify-content: center;
  }
`;
export const Iconwrapper = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #eeeeee;
  transition: all 0.2s ease-in;
  color: #353639;
  cursor: pointer;
  &:hover {
    background: #daa520;
  }
  @media (max-width: 968px) {
    margin: 0 10px;
  }
`;
