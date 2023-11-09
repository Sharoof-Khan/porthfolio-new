import {  Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/header/Header";
import Education from "./component/education/Education";
import Experince from "./component/Experince";
import Skills from "./component/Skills";
import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import { AnimatePresence } from "framer-motion";
import HomeButton from "./component/Home/HomeButton";

function App() {

  const location = useLocation();

  return (
    <div className="App bg-slate-800">
        <Header /> 
        <AnimatePresence initial={false}  mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/experince" element={<Experince/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/contactme" element={<ContactMe/>}></Route>
        </Routes>
        </AnimatePresence>
        <HomeButton/>
        </div>
  );
}

export default App;
