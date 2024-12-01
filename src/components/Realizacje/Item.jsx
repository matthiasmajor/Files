import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Animation = keyframes`
0% {
 width:0%;
}
100% {
width:100%;
}
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.25);
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 2s ease;
`;

export const Element = styled.div`
width: 100%;
background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;

${({ theme }) => theme.mq.desktop} {
  display: block;
  width: 100%;
  height: 600px;
  
  background-image: url("${({ url }) => url}");
  
  font-family: ${({ theme }) => theme.font.family.montserrat};
  cursor: pointer;
}
${({ theme }) => theme.mq.bigDesktop} {
  height:600px;
}
  display: block;
  width: 100%;
  background-image: url("${({ url }) => url}");
  background-size: cover;
  background-repeat: no-repeat; 
  padding-top: 330px;
  font-size: 2em;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  cursor: pointer;

  p {
    font-size:4rem;
    background-color: rgba(255, 255, 255, .15);  
    
  }]

`;

export const Text = styled.div`
  white-space: nowrap;
  color: black;
  font-weight: bold;
  font-family:${({ theme }) => theme.font.family.montserrat}
  font-size: 16px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index:1001;
  padding-bottom:15px;
  ${({ theme }) => theme.mq.desktop} {
  padding-bottom:0px;
  font-size: 20px;
  }


`;

export const Line = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  overflow: hidden;
  top: 55%;
  left: 50%;

  background-color: black;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const Item = ({ title, url }) => {
  return (
    <Element url={url}>
      <Overlay>
        <Text>{title}</Text>
        <Line></Line>
      </Overlay>
    </Element>
  );
};
