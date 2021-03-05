import React, { useEffect, useState } from "react";
import { fetchResource } from "../api";
import TagComponent from "./Tag";
import styled from "styled-components";

interface TagListProps {
  onTagFilterChange: (tags: Tag[]) => void;
}

interface TagState {
  tag: Tag;
  selected: boolean;
}

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const Label = styled.span`
  margin-right: 24px;
  font-size: 1.5em;
`;

export default function TagList({ onTagFilterChange }: TagListProps) {
  const [tagStates, setTagStates] = useState<TagState[]>([]);

  const tagStateSortFunction = (value1: TagState, value2: TagState) =>
    value1.tag.id === value2.tag.id
      ? 0
      : value1.tag.id > value2.tag.id
      ? 1
      : -1;

  useEffect(() => {
    fetchResource("tags").then((tags: Tag[]) =>
      setTagStates(
        tags
          .map((value: Tag) => ({ tag: value, selected: false }))
          .sort(tagStateSortFunction)
      )
    );
  }, []);

  useEffect(() => {
    onTagFilterChange(
      tagStates
        .filter((value: TagState) => value.selected)
        .map((value: TagState) => value.tag)
    );
  }, [tagStates, onTagFilterChange]);

  const setTagState = (tag: Tag, selected: boolean) => {
    setTagStates((i) =>
      [...i]
        .filter((val: TagState) => val.tag.id !== tag.id)
        .concat([{ tag: tag, selected: selected }])
        .sort(tagStateSortFunction)
    );
  };

  return (
    <TagsWrapper>
      <Label>Filter for: </Label>
      {tagStates.map((tagState: TagState) => (
        <span
          onClick={() => setTagState(tagState.tag, !tagState.selected)}
          key={tagState.tag.id}
          style={{ marginRight: "12px" }}
        >
          <TagComponent
            tag={tagState.tag}
            clickable
            checked={tagState.selected}
          />
        </span>
      ))}
    </TagsWrapper>
  );
}
