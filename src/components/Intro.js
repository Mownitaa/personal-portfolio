import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import me from "../assets/Images/mabia.png";
import cv from "../assets/files/Mownita-Resume.pdf";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 64vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;
const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: auto;
    height: 100%;
  }
`;
const TextBox = styled.div`
  width: 100%;
  margin-right: 5;
  position: relative;
  display: flex;
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 1rem;
  cursor: cursor;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <>
      <Box
        initial={{ height: 0 }}
        animate={{ height: "55vh" }}
        transition={{ type: "spring", duration: 2, delay: 1 }}
      >
        <TextBox className="w-100 w-md-50 justify-content-sm-center justify-content-md-start">
          <Text>
            <h5 style={{ fontSize: "0.5em" }}>Hello! I'm </h5>
            <h2 style={{ fontSize: "0.9em" }}>Mabia Zaman Mownita</h2>
            <h3 style={{ fontSize: "0.8em" }}>Software Developer</h3>
            <div>
              <button
                className="w-100 w-md-50"
                style={{
                  borderRadius: 9,
                }}
              >
                <a
                  href={cv}
                  download
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "17px",
                    padding: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{ marginRight: "0.6%" }}
                    className="fas fa-download"
                  ></i>
                  Get Resume
                </a>
              </button>
            </div>
          </Text>
        </TextBox>
        <SubBox className="w-100 w-md-50 d-none d-md-block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <img className="pic" src={me} alt="Profile Pic" />
          </motion.div>
        </SubBox>
      </Box>
    </>
  );
};

export default Intro;
