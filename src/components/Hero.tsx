import React from "react";
import "../styles/Hero.css";
import Typist from "react-typist-component";
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection";

class Hero extends React.Component {
  state = {
    expanded: true,
    activeKey: "1",
    visible: true,
  };

  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <div id="intro">
        <Typist typingDelay={120} cursor={<span className='cursor'>|</span>}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"matthaios"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection delay="0.1s">
          <div className="intro-subtitle">React.js and Front-end engineer.</div>
          <div className="intro-desc">
            I'm a software engineer based in the Netherlands. I have a great
            interest in full-stack development, and I like building projects
            related to my interests.
          </div>
          <a href="mailto:matheospetrou@gmail.com" className="intro-contact">
            <EmailIcon />
            {"  " + "Reach out!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Hero;
