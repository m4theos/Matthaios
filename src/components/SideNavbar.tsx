import React from "react";
import { Sidenav } from "rsuite";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/SideNavbar.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

const SidebarNav: React.FC = () => {
  const links = [
    <a href="#intro">/home</a>,
    <a href="#about">/about</a>,
    <a href="#experience">/experience</a>,
    <a href="#projects">/projects</a>,
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <Sidenav expanded defaultOpenKeys={["3", "4"]} appearance={"subtle"}>
          <Sidenav.Body>
            <div className="sidebar-links">
              {links.map((link, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <div>{link}</div>
                </FadeInSection>
              ))}
            </div>
          </Sidenav.Body>
        </Sidenav>
      )}
      <div className="sidebar-logos">
        <a href="mailto:matheospetrou@gmail.com">
          <EmailIcon style={{ fontSize: 20 }} />
        </a>
        <a href="https://github.com/m4theos">
          <GitHubIcon style={{ fontSize: 19 }} />
        </a>
        <a href="https://www.linkedin.com/in/matheos1/">
          <LinkedInIcon style={{ fontSize: 21 }} />
        </a>
      </div>
    </div>
  );
};

export default SidebarNav;
