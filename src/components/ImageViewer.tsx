import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaTimes } from "react-icons/fa";

import { ImageViewerContext, useImageViewerContext } from "../ImageViewContext";

const ImageViewWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  user-select: none;
  -webkit-user-select: none;
`;

const Image = styled.img`
  max-height: 80%;
  max-width: 80%;
`;

const CloseButtonWrapper = styled.div`
  font-size: 2em;
  position: fixed;
  top: 12px;
  right: 12px;
  cursor: pointer;

  svg {
    fill: white;
  }
`;

const BlockScroll = createGlobalStyle`
  body {
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;

const ImageViewer = () => {
  const imageViewerContext = useImageViewerContext();

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      imageViewerContext.hideImageViewer();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <ImageViewerContext.Consumer>
      {(value) =>
        value.imageViewerState.isOpen && (
          <>
            <BlockScroll />
            <ImageViewWrapper>
              <CloseButtonWrapper onClick={value.hideImageViewer}>
                <FaTimes />
              </CloseButtonWrapper>

              <Image
                src={value.imageViewerState.src}
                alt={value.imageViewerState.alt}
              />
            </ImageViewWrapper>
          </>
        )
      }
    </ImageViewerContext.Consumer>
  );
};

export default ImageViewer;
