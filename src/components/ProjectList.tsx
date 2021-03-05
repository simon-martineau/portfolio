import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { fetchResource } from "../api";

const ProjectCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 92%;
  }
`;

interface ProjectListProps {
  tagFilter: Tag[];
}

export default function ProjectList({ tagFilter }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchResource("projects").then((projects: Project[]) => {
      setProjects(projects);
    });
  }, []);

  const projectContainsAllTags = (project: Project, tags: Tag[]) => {
    let allTagsPresent = true;
    tags.forEach(
      (tag: Tag) =>
        (allTagsPresent =
          allTagsPresent &&
          project.tags.find((value: Tag) => value.id === tag.id) !== undefined)
    );
    return allTagsPresent;
  };

  return (
    <div>
      <ProjectCardsWrapper>
        {projects
          .filter((project: Project) =>
            projectContainsAllTags(project, tagFilter)
          )
          .map((project: Project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </ProjectCardsWrapper>
    </div>
  );
}
