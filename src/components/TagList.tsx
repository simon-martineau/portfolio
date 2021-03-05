import React, { useEffect, useState } from "react";
import { fetchResource } from "../api";
import TagComponent from "./Tag";
import styled from "styled-components";

interface TagListProps {
  onTagFilterChange: (tags: Tag[]) => void;
}

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function TagList({ onTagFilterChange }: TagListProps) {
  const [unselectedTags, setUnselectedTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    fetchResource("tags").then((tags: Tag[]) => setUnselectedTags(tags));
  }, []);

  useEffect(() => {
    onTagFilterChange(selectedTags);
  }, [onTagFilterChange, selectedTags]);

  const toggleTag = (tag: Tag, state: "selected" | "unselected") => {
    if (state === "unselected") {
      setUnselectedTags((i) => [...i].filter((val: Tag) => val !== tag));
      setSelectedTags((i) => [...i, tag]);
    } else if (state === "selected") {
      setSelectedTags((i) => [...i].filter((val: Tag) => val !== tag));
      setUnselectedTags((i) => [...i, tag]);
    }
  };

  return (
    <TagsWrapper>
      <div>
        {unselectedTags.map((tag: Tag) => (
          <span
            onClick={() => toggleTag(tag, "unselected")}
            key={tag.id}
            style={{ marginRight: "12px" }}
          >
            <TagComponent tag={tag} clickable />
          </span>
        ))}
      </div>
      <div>
        {selectedTags &&
          selectedTags.map((tag: Tag) => (
            <span
              onClick={() => toggleTag(tag, "selected")}
              key={tag.id}
              style={{ marginRight: "12px" }}
            >
              <TagComponent tag={tag} clickable checked />
            </span>
          ))}
      </div>
    </TagsWrapper>
  );
}
