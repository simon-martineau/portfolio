import React from "react";
import styled from "styled-components";
import { lighten, desaturate } from "polished";
import { GoMarkGithub } from "react-icons/go";
import Tag from "./Tag";

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
  display: flex;
  align-items: flex-start;
  opacity: 1;
  padding: 1.6em;
  position: relative;
  border-radius: 10px;
  color: #eee;
  background-color: ${(props) => desaturate(0.35, props.theme.main)};
  cursor: pointer;

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

  @media only screen and (max-width: 1170px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2em;
  font-weight: 700;
  font-family: "Overlock";
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1em;

  svg {
    margin-right: 8px;
    font-size: 1.5em;
    fill: ${(props) => props.theme.textColor};
  }

  &:hover {
    color: ${(props) => props.theme.mainBg};
  }

  &:hover svg {
    fill: ${(props) => props.theme.mainBg};
  }
`;

const Thumbnail = styled.img`
  width: 90%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1em;
`;

const LeftSideWrapper = styled.div`
  width: 35%;
`;

const RightSideWrapper = styled.div``;

const TagsWrapper = styled.div`
  margin-top: 8px;

  *:not(:last-child) {
    margin-right: 6px;
  }
`;

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <CardWrapper>
      <Card>
        <LeftSideWrapper>
          <Thumbnail
            src={props.project.thumbnail.image}
            alt={props.project.thumbnail.placeholder}
          />
          <ProjectLink href={props.project.link}>
            <GoMarkGithub />
            Github
          </ProjectLink>
        </LeftSideWrapper>
        <RightSideWrapper>
          <Header>{props.project.title} </Header>
          <TagsWrapper>
            {props.project.tags.map((tag: ITag) => (
              <Tag tag={tag}></Tag>
            ))}
          </TagsWrapper>
          <p>{props.project.description}</p>
        </RightSideWrapper>
      </Card>
      <CardShadow />
    </CardWrapper>
  );
}
