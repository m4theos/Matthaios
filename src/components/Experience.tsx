import React, { Component } from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

interface ExperienceState {
  expanded: boolean;
  activeKey: string;
}

class Experience extends Component<{}, ExperienceState> {
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
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div id="experience">
        <FadeInSection delay="0.3s">
          <div className="section-header">
            <span className="section-title">/ experience</span>
          </div>
          <JobList />
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
