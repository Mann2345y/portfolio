import styled from "styled-components";

export const AboutWrapper = styled.div`
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
  }
`;
export const Content = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  @media (max-width: 968px) {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 100px;
      padding: 10px;
    }
  }
`;
export const LeftBlock = styled.div`
  height: 100%;
  width: 45%;
  padding-left: 100px;
  h1 {
    font-size: 2.5em;
    margin-bottom: 40px;
  }
  p {
    font-family: "Roboto Slab", sans-serif;
    font-size: 1.2em;
    margin-bottom: 25px;
    color: rgb(108, 110, 107);
  }
  @media (max-width: 968px) {
    padding: 0;
  }
`;
export const RightBlock = styled.div`
  height: 100%;
  width: 30%;
  margin-left: 100px;
  @media (max-width: 968px) {
    margin-left: 0;
  }
`;
export const SkillBlockWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
`;
export const SkillBlock = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 15px 30px;
  background: #eeeeee;
  border-radius: 5px;
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
`;
