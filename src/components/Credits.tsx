import React, { Component } from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

interface CreditsState {
  expanded: boolean;
  activeKey: string;
}

class Credits extends Component<{}, CreditsState> {
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
    return (
      <FadeInSection delay="0.1s">
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Matthaios Petrou. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Credits;
