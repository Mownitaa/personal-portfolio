import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";

import appointlet from "../assets/Images/appointletImg.png";

const Box = styled.div`
  //   background-color: ${(props) => props.theme.body}
  background-color: rgba(40, 38, 65, 0.9);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Main = styled.div`
  // border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 18rem;
  padding-y: 1rem;
  padding-left: 0.4rem;
  width: 38vw;
  height: 40vh;
  right: 6%;
  display: flex;
  flex-direction: column;
  z-index: 3;
  line-height: 1.5;
  justify-content: center;
  align-items: left;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(9px);
  left: calc(0.01rem + 5vw);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;
const float = keyframes`
0% { transform: translateX(-10px) }
50% { transform: translateX(15px) translateX(15px) }
100% { transform: translateX(-10px) }`;

const ProjectImg = styled.div`
  position: absolute;
  filter: grayscale(55%);
  top: 20rem;
  right: 6%;
  width: 48vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Project1 = () => {
  return (
    <div>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <PowerButton />
          <Main>
            <h1>Appointlet</h1> <span>MERN stack project</span>
            <div>
              <p className="text-secondary fs-5">
                ‣ Implemented appointment booking system by using mui date
                picker
              </p>
            </div>
            <div>
              <a
                style={{ fontSize: 40, marginRight: 10, color: "white" }}
                target="_blank"
                href="https://github.com/Mownitaa/Appointlet"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                style={{ fontSize: 40, color: "white" }}
                target="_blank"
                href="https://appointlet-764cd.web.app/"
              >
                <ion-icon name="open-outline"></ion-icon>
              </a>
            </div>
          </Main>
          <ProjectImg>
            <a target="blank" href="https://github.com/Mownitaa/Appointlet">
              <img src={appointlet} alt="appopintlet" />
            </a>
          </ProjectImg>
          <BigTitle text="PROJECTS" top="10%" bottom="10%" left="5%" />
        </Box>
      </ThemeProvider>
    </div>
  );
};
export default Project1;
