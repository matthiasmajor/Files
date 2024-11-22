import React from "react";
import styled, { keyframes } from "styled-components";

// Animation for slight floating effect
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Wrapper for all shapes
const ShapeWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: ${(props) => props.zIndex || "-1"};
`;

// Styled Circle Shape
const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  background-color: ${(props) =>
    props.color || "#64748B"}; /* Tailwind slate-300 */
  border-radius: 50%;
  opacity: ${(props) => props.opacity || "0.3"};
  animation: ${floatAnimation} ${(props) => props.duration || "8s"} ease-in-out
    infinite;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  filter: blur(${(props) => props.blur || "10px"});
`;

// Styled Rectangle Shape
const Rectangle = styled.div`
  position: absolute;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "100px"};
  background-color: ${(props) =>
    props.color || "#A8B5C6"}; /* Tailwind slate-400 */
  border-radius: ${(props) => props.radius || "10px"};
  opacity: ${(props) => props.opacity || "0.3"};
  animation: ${floatAnimation} ${(props) => props.duration || "10s"} ease-in-out
    infinite;
  top: ${(props) => props.top || "30%"};
  right: ${(props) => props.right || "30%"};
  filter: blur(${(props) => props.blur || "10px"});
`;

const AnimatedBackground = () => {
  return (
    <ShapeWrapper>
      {/* Circle Shapes */}

      {/* Rectangle Shapes */}
      <Rectangle
        top="40%"
        right="15%"
        width="250px"
        height="120px"
        color="#64748B"
        duration="12s"
        opacity="0.15"
      />
      <Rectangle
        top="60%"
        left="25%"
        width="180px"
        height="80px"
        color="#CBD5E1"
        duration="10s"
        opacity="0.25"
      />
    </ShapeWrapper>
  );
};

export default AnimatedBackground;
