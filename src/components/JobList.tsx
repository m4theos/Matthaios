import React, { useState } from "react";
import { styled, Theme } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";
import { makeStyles } from "tss-react/mui";
import "../styles/About.css";

const isHorizontal = window.innerWidth < 600;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

interface JobItem {
  jobTitle: string;
  duration: string;
  desc: string[];
}

const experienceItems: { [key: string]: JobItem } = {
  "University of Twente": {
    jobTitle: "Student and Teaching Assistant @",
    duration: "SEP 2021 - PRESENT",
    desc: [
      "wip.",
      "wip.",
      "wip.",
    ],
  },
  "I.C.T.S.V. Inter-Actief": {
    jobTitle: "Tutor @",
    duration: "OCT 2023 - PRESENT",
    desc: [
      "wip.",
      "wip.",
      "wip.",
    ],
  },
  // Add more job items as needed
};

const a11yProps = (index: number) => {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
};

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.ba,
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList: React.FC = () => {
  const { classes } = useStyles(); 
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : undefined}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key].jobTitle + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key].duration}</div>
          <ul className="job-description">
            {experienceItems[key].desc.map(function (descItem, j) {
              return (
                <FadeInSection delay={`${j + 1}00ms`} key={j}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
