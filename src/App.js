import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
// import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
// import SoundBar from "./subComponents/SoundBar";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import initializeAuthentication from "./Firebase/firebase.initialize";
import { Projects } from "./components/Projects";



initializeAuthentication();


function App() {

  const location = useLocation();
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>



      {/* <SoundBar /> */}

      {/* For framer-motion animation on page change! */}
      <AnimatePresence exitBeforeEnter>

        <Switch location={location} key={location.pathname}>
          {/* <Route exact path="/" component={Intro} /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          {/* <Route exact path="/work" component={WorkPage} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/1" component={Project1} />
          <Route exact path="/projects/2" component={Project2} />
          <Route exact path="/projects/3" component={Project3} />
          <Route exact path="/footer" component={Footer} />

        </Switch>
      </AnimatePresence>


    </ThemeProvider>



  </>

}

export default App

