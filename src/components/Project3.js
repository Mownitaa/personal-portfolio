import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import medicare from '../assets/Images/medicare.png'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }`


const ProjectImg = styled.div`
position: absolute;
// filter: grayscale(55%);
top: 20rem;
right: 6%;
width: 48vw;
height: 40vh;
display: flex;
  justify-content: center;
  align-items: center;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
// border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  top: 21rem;
  padding-y:1rem;
  padding-left:0.4rem;
  width: 38vw;
  height: 40vh;
  display:flex;
  flex-direction:column;
  z-index: 3;
  line-height: 1.5;
  justify-content: center;
  align-items: right;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(9px);
  position: absolute;
  left: calc(0.01rem + 5vw);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Project3 = (props) => {

    return (
        <div>
            <ThemeProvider theme={DarkTheme}>
            <Box>
                <PowerButton />
                <Main>
                <h1>Medicare</h1> <span>React.JS project</span>
                <div>
                    <p className='text-secondary fs-5'>‣ Fetched data from API and created private route using firebase auth</p>
                </div>
               <div>
               <a style={{fontSize: 40, marginRight:10, color: 'white' }} target="_blank" href="https://github.com/Mownitaa/medicare">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
               <a style={{fontSize: 40, color: 'white'}} target="_blank" href="https://medicare-d32ee.web.app/">
               <ion-icon name="open-outline"></ion-icon>
                </a>                
            </div>
                </Main>
                <ProjectImg>
                    <a target="blank" href="https://medicare-d32ee.web.app/"><img src={medicare} alt="appopintlet" /></a>
                </ProjectImg>

                <BigTitle text="PROJECTS" top="10%" bottom="10%" left="5%" />
            </Box>

        </ThemeProvider>
        </div>
    );
};

export default Project3;