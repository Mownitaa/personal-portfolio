import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import aboutImg from '../assets/Images/portfolioAboutImg.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const AboutImg = styled.div`
position: absolute;
top: 25%;
right: 1%;
width: 40vw;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  color: ${(props) => props.theme.text};
  margin: 5rem;
  padding: 2rem;
  width: 48vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 0.7vw);
 backdrop-filter: blur(4px);
  position: absolute;
  top: 8rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <PowerButton />
                <Main style={{ padding: 10 }}>
                I'm experienced in MERN Stack Development for more than 1 year. I am eager to be challenged in order to grow and further improve my skills. Seeing for an 
industry in which I can put into practice my knowledge and experience.

                    <br /> <br />
                    ✦Learning and exploring includes:- 
 React JS, Node JS, Express JS, MongoDB, Javascript, ES6, Firebase, 
 HTML/HTML5,CSS/CSS3, Bootstrap/Bootstrap5, Tailwind, Material UI, Figma
                    <br /> <br />
                    ✦Familiar with:- 
 ASP.NET Core, MVC Model, Razor Page, c#, MySQL 
                </Main>
                <AboutImg>
                    <img src={aboutImg} alt="spaceman" />
                </AboutImg>

                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
