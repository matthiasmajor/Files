import styled from "styled-components";
import { keyframes } from "styled-components";

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  animation: ${({ isAnimation }) =>
    isAnimation ? `${Animation} 4s ease forwards` : "none"};
  &:hover {
    opacity: 0.7;
  }
`;
