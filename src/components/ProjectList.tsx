import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { fetchResource } from "../api";

const ProjectCardsWrapper = styled.div`
  width: 85%;
  max-width: 1470px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 92%;
  }
`;

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchResource("projects").then((projects: Project[]) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div>
      <ProjectCardsWrapper>
        {projects.map((project: Project) => {
          let stuffs = [];
          for (let i = 0; i < 5; ++i) {
            stuffs.push(<ProjectCard key={i} project={project} />);
          }
          return stuffs;
        })}
      </ProjectCardsWrapper>
    </div>
  );
}
