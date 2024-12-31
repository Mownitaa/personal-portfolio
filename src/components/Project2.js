import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";
import expressExit from "../assets/Images/expressImg.png";
import SnackbarContent from "@mui/material/SnackbarContent";

const Box = styled.div`
  // background-color: ${(props) => props.theme.body};
  background-color: rgba(40, 38, 65, 0.9);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateX(-10px) }
50% { transform: translateX(15px) translateX(15px) }
100% { transform: translateX(-10px) }`;

const ProjectImg = styled.div`
  // filter: grayscale(55%);
  top: 15rem;
  width: 48vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(9px);
  position: absolute;
  left: calc(0.01rem + 5vw);
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  // border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  position: absolute;
  padding-y: 1rem;
  padding-left: 0.4rem;
  top: 14rem;
  right: 6%;
  width: 38vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  z-index: 3;
  line-height: 1.5;
  font-size: calc(0.6rem + 1vw);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const Project2 = () => {
  return (
    <div>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <PowerButton />
          <Main>
            <h1>Express Exit</h1> <span>MERN stack project</span>
            <div>
              <p className="text-secondary fs-5">
                ‣ Implemented CRUD operation and login with google sign in
                method
              </p>
            </div>
            <div>
              <a
                style={{ fontSize: 40, marginRight: 10, color: "white" }}
                target="_blank"
                href="https://github.com/Mownitaa/express-exit-client-site"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                style={{ fontSize: 40, color: "white" }}
                target="_blank"
                href="https://express-exit.web.app/"
              >
                <ion-icon name="open-outline"></ion-icon>
              </a>
            </div>
          </Main>
          <ProjectImg>
            <a
              target="blank"
              href="https://github.com/Mownitaa/express-exit-client-site"
            >
              <img src={expressExit} alt="express-exit" />
            </a>
          </ProjectImg>

          <BigTitle text="PROJECTS" top="10%" bottom="10%" left="5%" />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Project2;
