import styled from "styled-components";

export const ProjectWrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 100px 5%;
`;
export const Header = styled.div`
  height: fit-content;
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
export const Projectblock = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  @media (max-width: 968px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;
export const Image = styled.div`
  height: 500px;
  width: 40%;
  margin-right: 50px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  @media (max-width: 968px) {
    margin: 0;
    margin-bottom: 100px;
  }
  @media (max-width: 550px) {
    height: 350px;
  }
`;
export const Description = styled.div`
  width: 40%;
  h1 {
    font-size: 2.5em;
  }
  p {
    width: 100%;
    margin: 50px 0;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;
    line-height: 40px;
  }
`;
export const Button = styled.div`
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
  font-weight: 600;
  cursor: pointer;
  > h4 {
    color: black;
  }
  &:hover {
    background: white;
  }
`;
