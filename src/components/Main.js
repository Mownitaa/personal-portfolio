import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
// import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
    ;

// import img1 from './appointment-modal.PNG'
// import img2 from './salon-loginPNG.PNG'
// import img3 from './salon-apponitment.PNG'



import bg from './welcomeBg.jpg'




import Footer from './Footer'
import HomePortfolio from './HomePortfolio'
const MainContainer = styled.div`
// background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`




const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>

            <MainContainer

                className="img-fluid"

                style={{
                    backgroundImage:
                        `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '90%', paddingBottom: '28px',
                    paddingBottom: '10%',
                    backgroundColor: 'rgba(40, 38, 65, 0.9)',

                    backgroundBlendMode: 'darken,luminosity',
                }}
            >


                <DarkDiv click={click} />
                <Container>


                    <PowerButton />
                    {/* <LogoComponent theme={click ? 'dark' : 'light'} /> */}
                    {/* boxShadow: '2px 2px 7px 14px black', */}
                    <SocialIcons theme={click ? 'dark' : 'light'} />


                    <Center click={click}>
                        <YinYang
                            style={{ color: 'white', marginTop: '40%' }}
                            onClick={() => handleClick()} width={click ? 80 : 200} height={click ? 80 : 200} fill='currentColor' />
                        <span style={{ color: 'white', fontSize: '20px' }}>click here</span>
                    </Center>





                    <Contact target="_blank" to={{ pathname: "mailto:mabiamownita@gmail.com" }}>
                        <motion.h2
                            style={{ color: 'white' }}
                            initial={{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}

                        >
                            Contact Me..
                        </motion.h2>
                    </Contact>


                    <BLOG to="/blog">
                        <motion.h2
                            style={{ color: 'white' }}
                            initial={{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Blog
                        </motion.h2>
                    </BLOG>
                    <WORK to="/work" click={+click}>
                        <motion.h2
                            style={{ color: 'white' }}
                            initial={{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Work
                        </motion.h2>
                    </WORK>
                    <BottomBar>
                        <ABOUT to="/about" click={+click}>
                            <motion.h2
                                style={{ color: 'white' }}
                                initial={{
                                    y: 200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                About.
                            </motion.h2>
                        </ABOUT>
                        <SKILLS to="/skills">
                            <motion.h2
                                style={{ color: 'white' }}
                                initial={{
                                    y: 200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                My Skills.
                            </motion.h2>
                        </SKILLS>

                    </BottomBar>

                    <a

                        style={{ textDecoration: 'none', color: 'white', fontSize: '25px', padding: 5, borderRight: 'double' }}

                        target="blank" href="https://drive.google.com/file/d/1Vgik3yvYb6dbEhLYIxDl8AU2YxGzm6X3/view?fbclid=IwAR0uTayss08i4qHEV8h8RWh9FAOLS34GBMT0GhUN2C4efbYbNNDe1cZ2dNk">
                        <i style={{ marginRight: '0.5%' }} className="fas fa-download"></i>
                        Get Resume
                    </a>

                </Container>
                {click ? <Intro click={click} /> : null}
            </MainContainer >
            <HomePortfolio></HomePortfolio>
            <Footer></Footer>
        </>
    )
}

export default Main
