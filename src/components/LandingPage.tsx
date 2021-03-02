import React from "react";
import styled, { keyframes } from "styled-components";

const FullscreenWrapper = styled.div`
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
`;

const Spacer = styled.div`
  width: 100%;
  height: 100px;
`;

const Button = styled.a`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  padding: 12px;
  font-size: 28px;
  cursor: pointer;
  outline: none;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  transition: 100ms;

  &:hover {
    color: ${(props) => props.theme.main};
  }
`;

const PresentationSection = styled.div`
  margin-left: 50px;
`;
const PresentationFirstLine = styled.div`
  font-size: 58px;
  margin-bottom: 8px;
  font-weight: bold;
`;
const PresentationSecondLine = styled.div`
  font-size: 38px;
`;

const NameAnimation = keyframes`

  to {
    back
  }
`;

const MainColoredText = styled.span`
  color: ${(props) => props.theme.main};
  animation: ${NameAnimation} 3s ease-in-out 1;
`;

// const TreeSvg = styled(SVG)`
//   path {
//     fill: ${(props) => props.theme.main};
//   }
//   position: absolute;
//   top: 0;
//   right: 15%;
//   transform: scaleY(-1) scale(1.5) translateY(-19%);
// `;

export default function LandingPage() {
  return (
    <FullscreenWrapper>
      <PresentationSection>
        <PresentationFirstLine>
          Hi, my name is <MainColoredText>Simon Martineau</MainColoredText>
        </PresentationFirstLine>
        <PresentationSecondLine>
          I'm a software engineering studient who likes to make things
        </PresentationSecondLine>
        <Spacer />
      </PresentationSection>
      <Button>More about me</Button>
    </FullscreenWrapper>
  );
}
