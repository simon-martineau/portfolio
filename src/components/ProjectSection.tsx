import React from "react";
import ProjectList from "./ProjectList";
import TagList from "./TagList";
import styled from "styled-components";
import { lighten } from "polished";

const Spacer = styled.div`
  height: 80px;
`;

const Title = styled.div`
  color: ${(props) => lighten(0.5, props.theme.main)};
  font-size: 60px;
  font-weight: 700;
  text-align: center;
`;

export default function ProjectSection() {
  return (
    <div>
      <Title>My Projects</Title>
      <Spacer />
      <ProjectList />
      <TagList />
      <Spacer />
    </div>
  );
}
