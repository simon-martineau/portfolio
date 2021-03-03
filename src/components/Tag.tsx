import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

interface ITagProps {
  tag: ITag;
}

const TagWrapper = styled.div`
  font-size: 1em;
  display: inline-block;
  opacity: 1;
  padding: 4px 8px;
  color: ${(props) => lighten(0.3, props.color!)};
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

export default function Tag({ tag }: ITagProps) {
  return <TagWrapper color={tag.color}>{tag.name}</TagWrapper>;
}
