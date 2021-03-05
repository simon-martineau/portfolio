import React, { useCallback, useState } from "react";
import ProjectList from "./ProjectList";
import TagList from "./TagList";
import styled from "styled-components";
import { lighten } from "polished";

interface SpacerProps {
  size?: number;
}
const Spacer = styled.div<SpacerProps>`
  height: ${({ size }) => (size ? size : "40")}px;
`;

const Title = styled.div`
  color: ${(props) => lighten(0.5, props.theme.main)};
  font-size: 60px;
  font-weight: 700;
  text-align: center;
`;

const Container = styled.div`
  width: 85%;
  max-width: 1470px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 92%;
  }
`;

export default function ProjectSection() {
  const [tagFilter, setTagFilter] = useState<Tag[]>([]);

  const handleTagFilterChange = useCallback((newTagFilter: Tag[]) => {
    setTagFilter(newTagFilter);
  }, []);

  return (
    <Container>
      <Title>My Projects</Title>
      <Spacer />
      <TagList onTagFilterChange={handleTagFilterChange} />
      <Spacer size={60} />
      <ProjectList tagFilter={tagFilter} />
      <Spacer />
    </Container>
  );
}
