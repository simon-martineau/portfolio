import React from "react";
import styled from "styled-components";

interface TagProps {
  tag: Tag;
  checked?: boolean;
  clickable?: boolean;
  small?: boolean;
}

interface TagWrapperProps {
  color: string;
  clickable?: boolean;
  checked?: boolean;
  small?: boolean;
}

const tagWrapperHover = (color: string) => `
  &:hover {
    box-shadow: 0 0 10px ${color};
  }
`;

const TagWrapper = styled.div<TagWrapperProps>`
  font-family: Ubuntu;
  font-size: ${({ small }) => (small ? "0.8em" : "1em")};
  display: inline-block;
  opacity: 1;
  padding: ${({ small }) => (small ? "2px 6px" : "4px 10px")};
  color: ${({ checked, color, theme }) => (checked ? theme.mainBg : color)};
  border-radius: 20px;
  background-color: ${({ checked, color }) =>
    checked ? color : "transparent"};
  border: ${(props) => props.color} solid 2px;
  user-select: none;
  cursor: ${({ clickable, checked }) =>
    clickable || checked ? "pointer" : "inherit"};
  box-shadow: 0 0 0 ${({ color }) => color};
  transition: box-shadow 0.1s;
  font-weight: ${({ small }) => (small ? "700" : "inherit")};

  ${(props) => (props.clickable ? tagWrapperHover(props.color) : "")}
`;

export default function Tag({ tag, checked, clickable, small }: TagProps) {
  return (
    <TagWrapper
      color={tag.color}
      clickable={clickable}
      checked={checked}
      small={small}
    >
      {tag.name}
    </TagWrapper>
  );
}
