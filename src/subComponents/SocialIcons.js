import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 1.5rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      {/* github */}
      <div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "white" }}
          target="_blank"
          href="https://github.com/mownitaa"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      {/* linkedin */}
      <div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "white" }}
          target="_blank"
          href="https://www.linkedin.com/in/mabia-zaman-mownita/"
        >
          <i
            style={{ color: "white", fontSize: "25px" }}
            width={75}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            className="fab fa-linkedin"
          ></i>
        </a>
      </div>
      {/* <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <Link style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://twitter.com/" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </Link>
            </motion.div> */}
      {/* facebook */}
      <div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "white" }}
          target="_blank"
          href="https://www.facebook.com/mownita3344"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      {/* <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} /> */}
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
