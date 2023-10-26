import React from "react";
import SideNav from "./components/SideNavbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import "./App.css";
import "./styles/Global.css";
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Credits/>
      </div>
      <SideNav />
    </div>
  );
}

export default App;
