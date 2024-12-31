// import React from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { DarkTheme } from "./Themes";
// import PowerButton from "../subComponents/PowerButton";
// import BigTitle from "../subComponents/BigTitlte";
// import aboutImg from "../assets/Images/mabia.png";

// const Box = styled.div`
//   background-color: rgba(40, 38, 65, 0.9);
//   width: 100vw;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
// `;

// const AboutImg = styled.div`
//   position: absolute;
//   top: 30%;
//   width: 48vw;
//   backdrop-filter: blur(4px);
//   img {
//     width: 80%;
//     height: auto;
//   }
// `;
// const Main = styled.div`
//   color: ${(props) => props.theme.text};
//   right: 1%;
//   margin: 5rem;
//   padding-y: 2rem;
//   width: 45vw;
//   height: 60vh;
//   z-index: 3;
//   line-height: 1.5;
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   font-size: calc(0.6rem + 0.7vw);
//   position: absolute;
//   top: 8rem;
//   font-family: "Ubuntu Mono", monospace;
//   font-style: italic;
// `;

// const AboutPage = () => {
//   return (
//     <ThemeProvider theme={DarkTheme}>
//       <Box>
//         <PowerButton />
//         <AboutImg className="d-none d-md-block">
//           <img src={aboutImg} alt="spaceman" />
//         </AboutImg>
//         <Main className="w-full" style={{ padding: 10 }}>
//           I'm experienced in MERN Stack Development for more than 1 year. I am
//           eager to be challenged in order to grow and further improve my skills.
//           Seeing for an industry in which I can put into practice my knowledge
//           and experience.
//           <br /> <br />
//           ✦Learning and exploring includes:- React JS, Node JS, Express JS,
//           MongoDB, Javascript, ES6, Firebase, HTML/HTML5,CSS/CSS3,
//           Bootstrap/Bootstrap5, Tailwind, Material UI, Figma
//           <br /> <br />
//           ✦Familiar with:- ASP.NET Core, MVC Model, Razor Page, c#, MySQL
//         </Main>
//         {/* <AboutImg>
//           <img src={aboutImg} alt="spaceman" />
//         </AboutImg> */}

//         <BigTitle text="ABOUT" top="10%" left="7%" />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default AboutPage;
