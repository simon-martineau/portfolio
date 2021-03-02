import React from "react";
import styled from "styled-components";
import { lighten, darken, desaturate } from "polished";

interface IProjectCardProps {
  project: IProject;
}

const CardShadow = styled.div`
  position: absolute;
  background-color: ${(props) =>
    desaturate(0.3, lighten(0.1, props.theme.mainBg))};
  border-radius: 10px;
  z-index: -1;
  top: -10px;
  left: 10px;
  bottom: 10px;
  right: -10px;
  opacity: 1;
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
`;

const Card = styled.div`
  opacity: 0.9;
  padding: 1.6em;
  position: relative;
  border-radius: 10px;
  color: #eee;
  background-color: ${(props) => desaturate(0.35, props.theme.main)};
  cursor: pointer;

  @media only screen and (max-width: 1170px) {
    width: 100%;
  }

  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  &:hover {
    transform: translate(-5px, 5px);
    opacity: 1;
  }
  &:hover ~ ${CardShadow} {
    transform: translate(5px, -5px);
    opacity: 0.5;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  width: 48%;
  margin-bottom: 4em;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  font-family: "Overlock";
`;

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <CardWrapper>
      <Card>
        <div></div>
        <Title>{props.project.title}</Title>
        <p>{props.project.description}</p>
        {/* TODO: Render other attributes here */}
      </Card>
      <CardShadow />
    </CardWrapper>
  );
}
