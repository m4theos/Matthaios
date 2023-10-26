import React, { Component } from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

interface AboutState {
  expanded: boolean;
  activeKey: string;
}

class About extends Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const one = (
      <p>
        I am currently a <b>Student</b> at
        <a href="https://www.utwente.nl/en/"> University of Twente</a>, I take the course of Technical Computer Science,
        while I simultaneously work Part-time as a Teaching Assistant and Mentor helping students in coding labs.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in developing full-stack responsive websites.
        I also like watching football. And go to the gym.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:matheospetrou@gmail.com">
          matheospetrou@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "React.js",
      "Typescript",
      "Node.js",
      "HTML",
      "CSS Tailwind",
    ];

    const tech_items = tech_stack.map((stack, i) => (
      <li key={i}>{stack}</li>
    ));

    return (
      <div id="about">
        <FadeInSection delay="0.3s">
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/matt_profile.jpg"} alt="My Image" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
