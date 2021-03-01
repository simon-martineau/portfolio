import React from "react";
import styled from "styled-components";

interface IProjectCardProps {
  project: IProject;
}

const Card = styled.div`
  padding: 12px;
  font-family: Roboto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <Card>
      <Title>{props.project.title}</Title>
      <p>{props.project.description}</p>
      {/* TODO: Render other attributes here */}
    </Card>
  );
}
