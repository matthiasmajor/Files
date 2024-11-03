import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  padding: 15px 15px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeSwitch = () => {
  return (
    <Wrapper as="a" href="#nav">
      <AiOutlineArrowUp style={{ color: "black" }} />
    </Wrapper>
  );
};
