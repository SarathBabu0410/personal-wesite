import React from "react";
import styled from "styled-components";

// Container for the page
const ResumeContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem; /* Less padding on mobile */
  }
`;

// Section headings
const SectionHeading = styled.h2`
  color: #333;
  margin: 1.5rem 0 0.5rem; /* Adjusted margin for better spacing */
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
  font-size: 1.5rem; /* Adjusted font size */
`;

// List style for experiences, publications, etc.
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// List items for degrees
const DegreeListItem = styled.li`
  margin-bottom: 1rem; 
  padding: 1rem;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// List items for experiences
const ListItem = styled.li`
  margin-bottom: 2rem; 
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// Job title and dates
const JobTitle = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #2c3e50;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: #7f8c8d;
  display: block;
  margin-bottom: 1rem;
`;

// Description for each experience
const JobDescription = styled.p`
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #333;
`;

// Task list inside each experience
const TaskList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: disc;
`;

// Task list items
const TaskListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
`;

// Navigation Bar
const NavBar = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #3498db;
  }
`;

const DownloadLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #e74c3c;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;

// Skill Container for Progress Bars
const SkillContainer = styled.div`
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SkillLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

// Progress bar background
const ProgressBarBackground = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 5px;
  overflow: hidden;
  height: 18px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

// Progress bar with dynamic width and color
const ProgressBar = styled.div`
  width: ${(props) => props.width || "0%"};
  background-color: ${(props) => props.color || "#3498db"};
  height: 100%;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;

const skillsData = [
  { skill: "NS3", level: "80%", color: "#2ecc71" },
  { skill: "C", level: "85%", color: "#3498db" },
  { skill: "C++", level: "80%", color: "#e67e22" },
  { skill: "Cisco Packet Tracer", level: "70%", color: "#9b59b6" },
  { skill: "Python", level: "75%", color: "#f1c40f" },
  { skill: "MySQL", level: "75%", color: "#1abc9c" },
  { skill: "BookSim", level: "70%", color: "#e74c3c" },
  { skill: "SUMO", level: "65%", color: "#34495e" },
  { skill: "HTML + CSS", level: "60%", color: "#e67e22" },
  { skill: "JavaScript", level: "60%", color: "#f39c12" },
];

// Resume Page Component
const Resume = () => {
  return (
    <ResumeContainer>
      <h1 style={{ textAlign: "center", color: "#333" }}>Resume</h1>

      {/* Navigation Bar */}
      <NavBar>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <DownloadLink href="~/personal-website/public/Sarath_CV.pdf" download>
          Download Resume
        </DownloadLink>
      </NavBar>

      {/* Education Section */}
      <SectionHeading id="education">Education</SectionHeading>
      <List>
        <DegreeListItem>
          <JobTitle>Ph.D., Computer Science And Engineering</JobTitle>
          <Date>National Institute of Technology Calicut, Kozhikode, Kerala, 2023</Date>
        </DegreeListItem>
        <DegreeListItem>
          <JobTitle>M.Tech., Network Engineering</JobTitle>
          <Date>Government Engineering College Idukki, Kerala, 2018</Date>
        </DegreeListItem>
        <DegreeListItem>
          <JobTitle>B.Tech., Computer Science and Engineering</JobTitle>
          <Date>VKCET Chavarcode, Thiruvananthapuram, Kerala, 2015</Date>
        </DegreeListItem>
      </List>

      {/* Experience Section */}
      <SectionHeading id="experience">Experience</SectionHeading>
      <List>
        <ListItem>
          <JobTitle>Project Research Scientist</JobTitle>
          <Date>Indian Institute Of Technology Bombay, August 2023 - Present</Date>
          <JobDescription>
            Developing AI-powered adaptive cyber defense framework, focusing on malware analysis, network flow analysis, and intrusion detection.
          </JobDescription>
          <TaskList>
            <TaskListItem>Developing AI model for malware detection</TaskListItem>
            <TaskListItem>Network flow analysis and intrusion detection</TaskListItem>
            <TaskListItem>Adding security to the next generation network</TaskListItem>
          </TaskList>
        </ListItem>
        <ListItem>
          <JobTitle>Research Intern</JobTitle>
          <Date>Indian Institute of Technology Guwahati, January 2018 - April 2018</Date>
          <JobDescription>
            Application-Aware Routing on Network on Chip, focusing on prioritizing packets based on criticality and rerouting in case of contention.
          </JobDescription>
          <TaskList>
            <TaskListItem>Prioritizing packets based on criticality</TaskListItem>
            <TaskListItem>Measuring packet criticality using slack value</TaskListItem>
            <TaskListItem>Rerouting packets through the alternate shortest path</TaskListItem>
          </TaskList>
        </ListItem>
        <ListItem>
          <JobTitle>Project Intern</JobTitle>
          <Date>Indian Institute of Technology Guwahati, September 2017 - November 2017</Date>
          <JobDescription>
            Congestion Management in Mesh Network on Chip, focusing on designing advanced routing algorithms and congestion control solutions.
          </JobDescription>
          <TaskList>
            <TaskListItem>Analyzing and detecting congestion in Mesh Network on Chip</TaskListItem>
            <TaskListItem>Designing advanced routing algorithms for Network on Chip</TaskListItem>
            <TaskListItem>Implementing congestion control solutions</TaskListItem>
          </TaskList>
        </ListItem>
      </List>

      {/* Skills Section */}
      <SectionHeading id="skills">Skills</SectionHeading>
      {skillsData.map((skill) => (
        <SkillContainer key={skill.skill}>
          <SkillLabel>{skill.skill}</SkillLabel>
          <ProgressBarBackground>
            <ProgressBar width={skill.level} color={skill.color} />
          </ProgressBarBackground>
        </SkillContainer>
      ))}
    </ResumeContainer>
  );
};

export default Resume;
