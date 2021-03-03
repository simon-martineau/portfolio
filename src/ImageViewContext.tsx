import React, { useContext, useState, createContext, useEffect } from "react";

interface ImageViewerState {
  src: string;
  alt: string;
  isOpen: boolean;
}

interface ImageViewContextContent {
  imageViewerState: ImageViewerState;
  showImageViewer: (src: string, alt: string) => void;
  hideImageViewer: () => void;
}

const initialImageViewerContext: ImageViewContextContent = {
  imageViewerState: {
    src: "",
    alt: "",
    isOpen: false,
  },
  showImageViewer: (_: string, __: string) => {},
  hideImageViewer: () => {},
};

export const ImageViewerContext = createContext<ImageViewContextContent>(
  initialImageViewerContext
);

export const ImageViewContextProvider: React.FC = ({ children }) => {
  const [imageViewerContext, setImageViewerContext] = useState(
    initialImageViewerContext
  );

  const showImageViewer = (src: string, alt: string) => {
    setImageViewerContext((i) => {
      return {
        ...i,
        imageViewerState: {
          src: src,
          alt: alt,
          isOpen: true,
        },
      };
    });
  };

  const hideImageViewer = () => {
    setImageViewerContext((i) => {
      return {
        ...i,
        imageViewerState: { ...i.imageViewerState, isOpen: false },
      };
    });
  };

  useEffect(() => {
    console.log("Hello");
    setImageViewerContext((i) => ({
      ...i,
      showImageViewer: showImageViewer,
      hideImageViewer: hideImageViewer,
    }));
  }, []);

  return (
    <ImageViewerContext.Provider value={imageViewerContext}>
      {children}
    </ImageViewerContext.Provider>
  );
};

export const useImageViewerContext = () => useContext(ImageViewerContext);
