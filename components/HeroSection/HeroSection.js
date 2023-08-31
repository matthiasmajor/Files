import React from "react";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "../ContactForm/ContactForm";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const TextHeroAnimation = keyframes`
 0% {
   opacity:0;
   transform:translateY(-20px);
 } 
 100% {
  opacity:1;
  transform:translateY(0px);
 }`;

export const HeroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  align-items: center;

  width: 100%;

  position: relative;

  p {
    font-weight: bold;
    margin: 0;
    padding: 0;
    letter-spacing: -0.4px;
  }
  h1 {
    margin-top: 10px;
    padding-top: 0;

    text-align: Center;
    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    overflow-y: hidden;

    h1 {
      letter-spacing: -1.08px;
      line-height: 60px;
      margin-top: 0;
      margin-bottom: 0px;
      font-size: ${({ theme }) => theme.font.size.heading};
    }
  }
`;

export const Trigger = styled.div`
  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 12px;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: url("${({ url }) => url}");
    background-position: 50% 50%;
    background-size: cover;
    z-index: -1;
    overflow-y: hidden;
  }
`;

export const Hero = ({ url }) => {
  return (
    <HeroSection
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Trigger url={url}></Trigger>
      <p>Daniel Nieruchomosci</p>
      <h1>Nieruchomości, które Cię zainspirują.</h1>
      <StyledButton isAnimation as={Link} to="/Oferta">
        Sprawdz oferte{" "}
      </StyledButton>
    </HeroSection>
  );
};
