import React from "react";
import styled from "styled-components";

interface TagProps {
  tag: Tag;
  checked?: boolean;
  clickable?: boolean;
}

interface TagWrapperProps {
  color: string;
  clickable?: boolean;
}
const TagWrapper = styled.div<TagWrapperProps>`
  font-size: 1em;
  display: inline-block;
  opacity: 1;
  padding: 4px 10px;
  color: ${(props) => props.color};
  border-radius: 20px;
  background-color: transparent;
  border: ${(props) => props.color} solid 2px;
  user-select: ${({ clickable }) => (clickable ? "none" : "text")};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "text")};
`;

export default function Tag({ tag, checked, clickable }: TagProps) {
  return (
    <TagWrapper color={tag.color} clickable={clickable}>
      {tag.name}
    </TagWrapper>
  );
}
