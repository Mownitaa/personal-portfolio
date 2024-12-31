import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
// import AboutPage from "./components/AboutPage";
// import BlogPage from "./components/BlogPage";
// import WorkPage from "./components/WorkPage";
// import MySkillsPage from "./components/MySkillsPage";
// import { AnimatePresence } from "framer-motion";
// import SoundBar from "./subComponents/SoundBar";
// import Footer from "./components/Footer";
// import Project1 from "./components/Project1";
// import Project2 from "./components/Project2";
// import Project3 from "./components/Project3";
import { Projects } from "./components/Projects";
// import Intro from "./components/Intro";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* <SoundBar /> */}

        {/* For framer-motion animation on page change! */}
        {/* <AnimatePresence mode="wait"> */}
        {/* <AnimatePresence exitBeforeEnter> */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route exact path="/about" element={AboutPage} /> */}
          {/* <Route path="/blog" element={BlogPage} /> */}
          {/* <Route exact path="/work" component={WorkPage} /> */}
          {/* <Route exact path="/footer" component={Footer} /> */}
        </Routes>
        {/* </AnimatePresence> */}
      </ThemeProvider>
    </>
  );
}

export default App;
