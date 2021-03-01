import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { fetchResource } from "../api";

const ProjectCardsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default function ProjectList() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetchResource("projects").then((projects: IProject[]) => {
      setProjects(projects);
    });
  }, []);

  return (
    <ProjectCardsWrapper>
      {projects.map((project: IProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectCardsWrapper>
  );
}
