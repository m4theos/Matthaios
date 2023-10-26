import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

interface ExternalLinksProps {
  githubLink: string;
  openLink?: string;
}

const ExternalLinks: React.FC<ExternalLinksProps> = ({ githubLink, openLink }) => {
  return (
    <span className="external-links">
      <a className="github-icon" href={githubLink}>
        <GitHubIcon
          style={{
            fontSize: 20,
            color: "var(--lightest-slate)",
          }}
        ></GitHubIcon>
      </a>
      {openLink && (
        <a className="open-icon" href={openLink}>
          <OpenInBrowserIcon
            style={{
              fontSize: 25,
              color: "var(--lightest-slate)",
            }}
          ></OpenInBrowserIcon>
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
