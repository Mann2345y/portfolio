import styled from "styled-components";

export const Navwrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 768px) {
    border-bottom: 1px solid #d3d3d3;
    padding: 20px;
  }
  position: sticky;
  top: 0;
  background: white;
  z-index: 5;
`;
export const Logo = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  > h1 {
    margin-left: 10px;
    font-size: 1.8em;
    @media (max-width: 425px) {
      font-size: 1.5em;
    }
  }
  &:hover {
    color: #daa520;
  }
`;
export const LogoIcon = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-image: url("./logo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 425px) {
    display: none;
  }
`;
export const NavLinks = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  > div h3 {
    width: 70px;
    margin: 0 25px;
    cursor: pointer;
    transition: all 0.25s ease-in;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    &:hover {
      color: #daa520;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const HammenuIcon = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1.5px solid #353639;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    height: 40px;
    width: 40px;
  }
`;
export const HammenuContent = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 5;
  > div {
    border-bottom: 1px solid #d3d3d3;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div h4 {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    color: #353639;
  }
  @media (min-width: 768px) {
    display: none;
  }
  transition: all 0.2s ease-in;
  transform-origin: top right;
  transform: ${(props) => (props.open ? "scale3d(1,1,1)" : "scale3d(0,0,0)")};
`;
