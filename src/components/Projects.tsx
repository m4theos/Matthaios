import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

interface ProjectInfo {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open: string;
  image: string;
}

const projects: { [key: string]: ProjectInfo } = {
  "Matthaios's Portfolio": {
    title: "Matthaio's Portfolio",
    desc:
      "A website created to showcase my portfolio projects and depict my overall personality and experience.",
    techStack: "React.js, Typescript, Material UI, CSS",
    link: "",
    open: "",
    image: "/assets/tdsb.png",
  },
  "Mattbnb": {
    title: "Mattbnb",
    desc:
      "A clone of Airbnb created with an ultimate purpose of increasing my hands-on experience with Javascript and Front-end practice.",
    techStack: "Next.js, React.js, CSS Tailwind",
    link: "https://github.com/m4theos/mattbnb",
    open: "",
    image: "/assets/tdsb.png",
  },
  "Odyssia": {
    title: "Odyssia",
    desc:
      "A clone of Uber created to gain a better insight on react native and Google APIs.",
    techStack: "React.js, GoogleAPIs, CSS Tailwind",
    link: "https://github.com/m4theos/odyssia",
    open: "",
    image: "/assets/tdsb.png",
  },
  "React Movie Database": {
    title: "React Movie Database",
    desc:
      "An application created to search for movies using the TMDB API, built using React.js.",
    techStack: "React.js, CSS",
    link: "https://github.com/m4theos/movie-database",
    open: "",
    image: "/assets/tdsb.png",
  },
  "React Social Media": {
    title: "React Social Media",
    desc:
      "A very simple social media application created to learn and understand the CRUD operations in React.js.",
    techStack: "React.js, Firestore, CSS",
    link: "https://github.com/m4theos/react-social-media",
    open: "",
    image: "/assets/tdsb.png",
  },
  // Add more projects here...
};

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }}></FolderOpenRoundedIcon>
                  </div>
                  <ExternalLinks githubLink={projects[key].link} openLink={projects[key].open} />
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
